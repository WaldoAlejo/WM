import { useEffect } from 'react';
import { seoMetadata, type SeoOptions } from './seo';
import { useLocale } from '../i18n/LocaleContext';

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
export function useSeo({ title, description, path, type = 'website', image, imageAlt, noindex }: SeoOptions) {
  const { locale } = useLocale();
  useEffect(() => {
    const metadata = seoMetadata({ title, description, path, type, image, imageAlt, noindex }, locale);
    document.title = metadata.title;
    setCanonical(metadata.url);
    for (const [name, value] of Object.entries(metadata.names)) setMeta('name', name, value);
    for (const [property, value] of Object.entries(metadata.properties)) setMeta('property', property, value);
  }, [title, description, path, type, image, imageAlt, noindex, locale]);
}
