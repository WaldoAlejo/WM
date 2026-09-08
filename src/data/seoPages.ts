import { products } from './products.ts';
import { content } from './content.es.ts';
import { isPending } from '../types/index.ts';
import type { SeoOptions } from '../utils/seo.ts';

/** Public routes for static HTML heads and the sitemap; Spanish is the shared-URL default. */
export const seoPages: SeoOptions[] = [
  { path: '/', title: content.home.seoTitle, description: content.hero.subtitle },
  { path: '/productos', title: content.productsPage.title, description: content.productsPage.intro },
  { path: '/garantia', title: content.warrantyPage.title, description: content.warrantyPage.intro },
  { path: '/nosotros', title: content.aboutPage.title, description: content.aboutPage.seoDescription },
  { path: '/contacto', title: content.contactPage.title, description: content.contactPage.intro },
  ...products.map((product): SeoOptions => ({
    path: `/productos/${product.slug}`,
    title: product.seoTitle?.es ?? product.name.es,
    description: product.seoDescription?.es ?? (isPending(product.shortDescription) ? product.name.es : product.shortDescription.es),
    type: 'product',
    image: isPending(product.mainImage) ? undefined : product.mainImage.src,
    imageAlt: isPending(product.mainImage) ? undefined : product.mainImage.alt.es,
  })),
  { path: '/404', title: content.notFound.title, description: content.notFound.body, noindex: true },
];
