import { useEffect } from 'react';
import { brand, productLine } from '../data/company';

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'product';
}

/** Browser-tab / OG suffix: brand + current line, for wayfinding. The Organization
 *  schema (structuredData.ts) uses brand.name alone as the legal entity name. */
const SITE_NAME = `${brand.name} — ${productLine.name}`;
const SITE_URL = brand.domain;

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Sets per-page title, description, canonical URL and Open Graph tags. */
export function useSeo({ title, description, path, type = 'website' }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setCanonical(url);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
  }, [title, description, path, type]);
}
