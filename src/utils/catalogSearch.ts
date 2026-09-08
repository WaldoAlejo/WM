import type { Product } from '../types';

function normalizeSearch(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

/** Match both languages so changing the interface language preserves results. */
export function filterProducts<T extends Pick<Product, 'name' | 'model' | 'categorySlug'>>(
  products: readonly T[], query: string, category: string,
): T[] {
  const terms = normalizeSearch(query).split(/\s+/).filter(Boolean);
  return products.filter((product) => {
    if (category && product.categorySlug !== category) return false;
    const model = typeof product.model === 'string' ? product.model : '';
    const searchable = normalizeSearch(`${product.name.es} ${product.name.en} ${model}`);
    return terms.every((term) => searchable.includes(term));
  });
}

/** Copy instead of mutating React Router's current search parameters. */
export function updateCatalogParams(current: URLSearchParams, key: 'buscar' | 'categoria', value: string) {
  const next = new URLSearchParams(current);
  if (value) next.set(key, value);
  else next.delete(key);
  return next;
}
