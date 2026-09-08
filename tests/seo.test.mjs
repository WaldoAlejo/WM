import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, readFile, writeFile, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { products } from '../src/data/products.ts';
import { seoPages } from '../src/data/seoPages.ts';
import { seoMetadata, renderSeoHead } from '../src/utils/seo.ts';
import { renderSitemap, withSeoHead, writeSeoFiles } from '../scripts/seoFiles.mjs';

test('sitemap contiene todos los productos y excluye la página de error', () => {
  const xml = renderSitemap();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(new Set(urls).size, urls.length);
  assert.equal(urls.length, products.length + 5);
  for (const product of products) assert.ok(urls.includes(`https://www.wmglobalcorp.com/productos/${product.slug}`));
  assert.ok(!xml.includes('/404'));
});

test('cada página social usa una imagen local existente y una URL absoluta', async () => {
  for (const page of seoPages) {
    const metadata = seoMetadata(page);
    const image = new URL(metadata.properties['og:image']);
    assert.equal(image.origin, 'https://www.wmglobalcorp.com');
    assert.equal(metadata.names['twitter:image'], image.href);
    await access(new URL(`../public${image.pathname}`, import.meta.url));
  }
});

test('el HTML escapa títulos y descripciones sin insertar etiquetas del contenido', () => {
  const html = renderSeoHead({ path: '/productos', title: 'WM & "prueba"', description: '</title><script>alert(1)</script>' });
  assert.ok(html.includes('WM &amp; &quot;prueba&quot;'));
  assert.ok(!html.includes('<script>'));
  assert.ok(html.includes('&lt;script&gt;'));
});

test('404 usa noindex y una navegación normal vuelve a index', () => {
  assert.equal(seoMetadata(seoPages.find((page) => page.path === '/404')).names.robots, 'noindex, follow');
  assert.equal(seoMetadata(seoPages[0], 'en').names.robots, 'index, follow');
  assert.equal(seoMetadata(seoPages[0], 'en').properties['og:locale'], 'en_US');
});

test('genera HTML por ruta conservando la aplicación y el head de cada producto', async (context) => {
  const directory = await mkdtemp(join(tmpdir(), 'wm-seo-test-'));
  context.after(async () => {
    if (!resolve(directory).startsWith(resolve(tmpdir()) + '\\wm-seo-test-') && !resolve(directory).startsWith(resolve(tmpdir()) + '/wm-seo-test-')) throw new Error('Unexpected test directory');
    await rm(directory, { recursive: true, force: true });
  });
  const template = '<html><head><!-- wm-seo:start --><title>Old</title><!-- wm-seo:end --></head><body><div id="root"></div><script src="/assets/app.js"></script></body></html>';
  await writeFile(join(directory, 'index.html'), template);
  assert.equal(await writeSeoFiles(directory), seoPages.length);
  for (const page of seoPages) {
    const filename = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
    const html = await readFile(join(directory, filename), 'utf8');
    assert.ok(html.includes(renderSeoHead(page)));
    assert.ok(html.includes('<script src="/assets/app.js"></script>'));
    assert.equal((html.match(/<title>/g) ?? []).length, 1);
  }
  assert.equal(await readFile(join(directory, 'sitemap.xml'), 'utf8'), renderSitemap());
});

test('la generación falla explícitamente si falta la zona de metadatos', () => {
  assert.throws(() => withSeoHead('<html></html>', seoPages[0]), /Missing SEO markers/);
});
