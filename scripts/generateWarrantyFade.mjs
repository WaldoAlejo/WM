// Recreate with: node scripts/generateWarrantyFade.mjs
// Colors match --color-wm-page (#f4f3f1) and the warranty surface (#181715).
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
  const value = 220 * t * t * (3 - 2 * t);
  // Monochrome triangular dither hides quantization without visible grain.
  // Fade noise to zero at the endpoints so adjacent surfaces match exactly.
  const amplitude = Math.min(t * 40, (1 - t) * 40, 1);
  for (let x = 0; x < width; x++) {
    const noise = (random() - random()) * amplitude;
    pixels[y * (width + 1) + x + 1] = Math.max(0, Math.min(220, Math.round(value + noise)));
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

const header = Buffer.alloc(13);
header.writeUInt32BE(width);
header.writeUInt32BE(height, 4);
header[8] = 8;
header[9] = 3; // Indexed RGB: exact warm neutrals with a compact lossless palette.
const palette = Buffer.alloc(221 * 3);
for (let i = 0; i <= 220; i++) {
  palette.set([244 - i, 243 - i, 241 - i], i * 3);
}
const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk('IHDR', header),
  chunk('PLTE', palette),
  chunk('IDAT', deflateSync(pixels, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);
writeFileSync(new URL('../public/warranty-fade.png', import.meta.url), png);
console.log(`Generated warranty-fade.png (${png.length} bytes)`);
