import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { seoPages } from '../src/data/seoPages.ts';
import { escapeMarkup, renderSeoHead, seoMetadata } from '../src/utils/seo.ts';

export function renderSitemap(pages = seoPages) {
  const urls = pages.filter((page) => !page.noindex)
    .map((page) => `  <url><loc>${escapeMarkup(seoMetadata(page).url)}</loc></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

export function withSeoHead(html, page) {
  const marker = /<!-- wm-seo:start -->[\s\S]*?<!-- wm-seo:end -->/;
  if (!marker.test(html)) throw new Error('Missing SEO markers in index.html');
  return html.replace(marker, () => `<!-- wm-seo:start -->\n    ${renderSeoHead(page)}\n    <!-- wm-seo:end -->`);
}

export async function writeSeoFiles(outputDirectory) {
  const template = await readFile(join(outputDirectory, 'index.html'), 'utf8');
  for (const page of seoPages) {
    // Only local catalog routes are used as output paths.
    if (!/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(page.path)) throw new Error(`Invalid static route: ${page.path}`);
    const file = join(outputDirectory, page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, withSeoHead(template, page));
  }
  await writeFile(join(outputDirectory, 'sitemap.xml'), renderSitemap());
  return seoPages.length;
}
