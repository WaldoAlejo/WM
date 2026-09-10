import { brand, productLine } from '../data/company.ts';

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'product';
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

// Existing catalog photograph, used when a page has no product-specific image.
export const defaultSocialImage = '/products/batidora-inmersion-5-en-1/batidor5en1_1.png';

export function seoMetadata(page: SeoOptions, locale: 'es' | 'en' = 'es') {
  const siteName = `${brand.name} — ${productLine.name}`;
  const title = `${page.title} | ${siteName}`;
  const url = new URL(page.path, brand.domain).href;
  const image = new URL(page.image ?? defaultSocialImage, brand.domain).href;
  return {
    title, url,
    names: {
      description: page.description,
      robots: page.noindex ? 'noindex, follow' : 'index, follow',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': page.description,
      'twitter:image': image,
      'twitter:image:alt': page.imageAlt ?? siteName,
    },
    properties: {
      'og:title': title,
      'og:description': page.description,
      'og:url': url,
      'og:type': page.type ?? 'website',
      'og:site_name': siteName,
      'og:locale': locale === 'es' ? 'es_EC' : 'en_US',
      'og:image': image,
      'og:image:alt': page.imageAlt ?? siteName,
    },
  };
}

export function escapeMarkup(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
}

/** Same metadata as the client hook, emitted into HTML at build time. */
export function renderSeoHead(page: SeoOptions) {
  const metadata = seoMetadata(page);
  return [
    `<title>${escapeMarkup(metadata.title)}</title>`,
    `<link rel="canonical" href="${escapeMarkup(metadata.url)}" />`,
    ...Object.entries(metadata.names).map(([name, value]) => `<meta name="${name}" content="${escapeMarkup(value)}" />`),
    ...Object.entries(metadata.properties).map(([property, value]) => `<meta property="${property}" content="${escapeMarkup(value)}" />`),
  ].join('\n    ');
}
