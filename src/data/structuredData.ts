import type { Product } from '../types';
import { isPending } from '../types';
import { brand, contactInfo } from './company';
import type { Locale } from '../i18n/LocaleContext';
import { t } from '../utils/t';

const SITE_URL = brand.domain;

/**
 * Organization structured data. Only confirmed fields are emitted —
 * contact fields still pending real values are simply omitted rather
 * than filled with placeholder text.
 */
export function organizationJsonLd() {
  const sameAs = contactInfo.socials
    .map((s) => (isPending(s.url) ? null : s.url))
    .filter((url): url is string => Boolean(url));

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: SITE_URL,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/** Product structured data — no price, availability or ratings, since none is real yet. */
export function productJsonLd(product: Product, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t(product.name, locale),
    ...(isPending(product.model) ? {} : { model: product.model }),
    ...(isPending(product.shortDescription) ? {} : { description: t(product.shortDescription, locale) }),
    ...(isPending(product.mainImage) ? {} : { image: [product.mainImage.src] }),
    brand: {
      '@type': 'Brand',
      name: brand.name,
    },
    url: `${SITE_URL}/productos/${product.slug}`,
  };
}
