import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { useSeo } from '../utils/useSeo';
import { cn } from '../utils/cn';
import { filterProducts, updateCatalogParams } from '../utils/catalogSearch';

export function ProductsPage() {
  const content = useContent();
  const { locale } = useLocale();

  useSeo({
    title: content.productsPage.title,
    description: content.productsPage.intro,
    path: '/productos',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('categoria') ?? '';
  const query = searchParams.get('buscar') ?? '';

  const filtered = useMemo(() => filterProducts(products, query, activeCategory), [activeCategory, query]);

  function setQuery(value: string) {
    setSearchParams(updateCatalogParams(searchParams, 'buscar', value), { replace: true });
  }

  function setCategory(slug: string) {
    setSearchParams(updateCatalogParams(searchParams, 'categoria', slug));
  }

  return (
    <>
      <PageIntro title={content.productsPage.title} description={content.productsPage.intro} />
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative w-full sm:max-w-xs">
          <span className="sr-only">{content.productsPage.searchPlaceholder}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={content.productsPage.searchPlaceholder}
            className="w-full border border-wm-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-wm-black"
          />
        </label>

        <div className="flex flex-wrap gap-2" role="group" aria-label={content.productsPage.filterAriaLabel}>
          <button
            type="button"
            onClick={() => setCategory('')}
            aria-pressed={activeCategory === ''}
            className={cn(
              'border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
              activeCategory === '' ? 'border-wm-wine bg-wm-wine text-white' : 'border-wm-gray-300 text-wm-black hover:border-wm-wine',
            )}
          >
            {content.productsPage.categoryAllLabel}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setCategory(cat.slug)}
              aria-pressed={activeCategory === cat.slug}
              className={cn(
                'border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
                activeCategory === cat.slug ? 'border-wm-wine bg-wm-wine text-white' : 'border-wm-gray-300 text-wm-black hover:border-wm-wine',
              )}
            >
              {t(cat.name, locale)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {(query || activeCategory) && (
          <button type="button" onClick={() => setSearchParams({})} className="mb-5 text-sm font-semibold underline">
            {content.productsPage.clearFilters}
          </button>
        )}
        <p role="status" className="sr-only">{content.productsPage.resultsLabel}: {filtered.length}</p>
        <ProductGrid products={filtered} />
      </div>
    </section>
    </>
  );
}
