import { fileURLToPath } from 'node:url';
import { writeSeoFiles } from './seoFiles.mjs';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const count = await writeSeoFiles(outputDirectory);
console.log(`SEO estático: ${count} páginas HTML y sitemap generados.`);
