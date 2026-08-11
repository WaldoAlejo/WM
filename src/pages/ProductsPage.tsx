import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { useSeo } from '../utils/useSeo';
import { cn } from '../utils/cn';

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
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !activeCategory || product.categorySlug === activeCategory;
      const matchesQuery =
        !query.trim() || t(product.name, locale).toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, locale]);

  function setCategory(slug: string) {
    if (!slug) {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', slug);
    }
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8">
      <SectionHeading title={content.productsPage.title} subtitle={content.productsPage.intro} />

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
            className={cn(
              'border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
              activeCategory === '' ? 'border-wm-copper bg-wm-copper text-white' : 'border-wm-gray-300 text-wm-black hover:border-wm-copper',
            )}
          >
            {content.productsPage.categoryAllLabel}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setCategory(cat.slug)}
              className={cn(
                'border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors',
                activeCategory === cat.slug ? 'border-wm-copper bg-wm-copper text-white' : 'border-wm-gray-300 text-wm-black hover:border-wm-copper',
              )}
            >
              {t(cat.name, locale)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <ProductGrid products={filtered} />
      </div>
    </section>
  );
}
