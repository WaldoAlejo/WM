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
    <div className="editorial-catalog">
      <PageIntro compact title={content.productsPage.title} description={content.productsPage.intro} />
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative w-full sm:max-w-xs">
          <span className="sr-only">{content.productsPage.searchPlaceholder}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={content.productsPage.searchPlaceholder}
            className="min-h-11 w-full rounded-sm border border-wm-gray-300 bg-white px-4 py-2.5 text-sm focus:border-wm-wine"
          />
        </label>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:shrink-0" role="group" aria-label={content.productsPage.filterAriaLabel}>
          <button
            type="button"
            onClick={() => setCategory('')}
            aria-pressed={activeCategory === ''}
            className={cn(
              'col-span-2 min-h-11 rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-300',
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
                'min-h-11 rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-300',
                activeCategory === cat.slug ? 'border-wm-wine bg-wm-wine text-white' : 'border-wm-gray-300 text-wm-black hover:border-wm-wine',
              )}
            >
              {t(cat.name, locale)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        {(query || activeCategory) && (
          <button type="button" onClick={() => setSearchParams({})} className="mb-5 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">
            {content.productsPage.clearFilters}
          </button>
        )}
        <p role="status" className="sr-only">{content.productsPage.resultsLabel}: {filtered.length}</p>
        <ProductGrid products={filtered} />
      </div>
    </section>
    </div>
  );
}
