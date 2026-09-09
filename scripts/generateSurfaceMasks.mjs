// Recreate with: node scripts/generateSurfaceMasks.mjs
// Palette-independent alpha masks; all surface colors live in src/styles/surfaces.css.
import { writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const width = 2048;
const height = 220;
let seed = 1977;
function random() {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
}

const pixels = Buffer.alloc((width + 1) * height);
for (let y = 0; y < height; y++) {
  const t = y / (height - 1);
  // Short eased shoulders and a long constant-slope middle spread contrast
  // evenly instead of concentrating it in the center of a smoothstep curve.
  const shoulder = 0.15;
  const ramp = t < shoulder
    ? t * t / (2 * shoulder * (1 - shoulder))
    : t > 1 - shoulder
      ? 1 - (1 - t) ** 2 / (2 * shoulder * (1 - shoulder))
      : (t - shoulder / 2) / (1 - shoulder);
  const value = 255 * ramp;
  // Monochrome triangular dither hides quantization without visible grain.
  // Fade noise to zero at the endpoints so adjacent surfaces match exactly.
  const amplitude = Math.min(t * 40, (1 - t) * 40, 1);
  for (let x = 0; x < width; x++) {
    const noise = (random() - random()) * amplitude;
    pixels[y * (width + 1) + x + 1] = Math.max(0, Math.min(255, Math.round(value + noise)));
  }
}

function chunk(type, data) {
  const tag = Buffer.from(type);
  let crc = 0xffffffff;
  for (const byte of Buffer.concat([tag, data])) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  const result = Buffer.alloc(data.length + 12);
  result.writeUInt32BE(data.length);
  tag.copy(result, 4);
  data.copy(result, 8);
  result.writeUInt32BE((crc ^ 0xffffffff) >>> 0, result.length - 4);
  return result;
}

const palette = Buffer.alloc(256 * 3, 255);
const alpha = Buffer.from(Array.from({ length: 256 }, (_, i) => i));
function saveMask(name, maskWidth, maskHeight, data) {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(maskWidth);
  header.writeUInt32BE(maskHeight, 4);
  header[8] = 8;
  header[9] = 3;
  const png = Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', header), chunk('PLTE', palette), chunk('tRNS', alpha),
    chunk('IDAT', deflateSync(data, { level: 9 })), chunk('IEND', Buffer.alloc(0)),
  ]);
  writeFileSync(new URL(`../public/${name}.png`, import.meta.url), png);
  console.log(`Generated ${name}.png (${png.length} bytes)`);
}
saveMask('surface-fade-y', width, height, pixels);
const horizontal = Buffer.alloc((height + 1) * width);
for (let y = 0; y < width; y++) {
  for (let x = 0; x < height; x++) horizontal[y * (height + 1) + x + 1] = pixels[x * (width + 1) + y + 1];
}
saveMask('surface-fade-x', height, width, horizontal);
