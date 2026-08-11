import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { ProductPhoto } from './ProductPhoto';
import { WarrantyBadge } from './WarrantyBadge';
import { cn } from '../utils/cn';

interface HeroProps {
  products?: Product[];
}

const ROTATE_INTERVAL_MS = 10_000;

/**
 * Front-panel composition: copy on the left, one large rotating product
 * photo on the right — echoes the packaging "FRENTE" layout, but with a
 * single dominant image (like Ninja/Kitchen-it hero banners) instead of a
 * grid of small, unevenly-filled tiles. The warranty seal sits as a small
 * corner badge rather than competing for equal visual weight, and a
 * thumbnail strip below keeps the other featured products one click away.
 * Only the fade transition is skipped for prefers-reduced-motion — the
 * rotation itself keeps happening, since it's the feature, not decoration.
 */
export function Hero({ products = [] }: HeroProps) {
  const content = useContent();
  const { locale } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (products.length < 2) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % products.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [products.length]);

  const activeProduct = products[activeIndex];

  return (
    <section className="border-b border-wm-gray-300 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:pb-20 lg:pt-8 lg:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-wm-copper-dark">
            {content.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-wm-black sm:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-5 max-w-md text-base text-wm-gray-700">{content.hero.subtitle}</p>
          <Link
            to="/productos"
            className="mt-8 inline-flex items-center justify-center border border-wm-black bg-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-wm-black"
          >
            {content.hero.cta}
          </Link>

          <ul className="mt-10 space-y-3 border-t border-wm-gray-300 pt-8">
            {content.hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-wm-gray-700">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-wm-copper bg-wm-copper-tint text-wm-copper-dark"
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12.5l2.5 2.5L16.5 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="min-w-0 flex-1">
              <div className="relative">
                <Link
                  to={activeProduct ? `/productos/${activeProduct.slug}` : '/productos'}
                  className="group block overflow-hidden bg-wm-gray-50 p-5 sm:p-6"
                >
                  <div key={activeIndex} className={reducedMotion ? undefined : 'fade-in-up'}>
                    <ProductPhoto
                      image={activeProduct?.mainImage ?? { pending: true }}
                      loading="eager"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full border border-wm-gray-300 bg-white shadow-md sm:h-20 sm:w-20">
                  <WarrantyBadge size={60} />
                </div>
              </div>

              {activeProduct && (
                <Link
                  to={`/productos/${activeProduct.slug}`}
                  className="mt-6 block text-sm font-semibold uppercase tracking-[0.1em] text-wm-black transition-colors hover:text-wm-copper-dark"
                >
                  {t(activeProduct.name, locale)}
                </Link>
              )}
            </div>

            {products.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar sm:w-16 sm:shrink-0 sm:flex-col sm:overflow-visible lg:w-20">
                {products.map((product, i) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={t(product.name, locale)}
                    aria-pressed={i === activeIndex}
                    className={cn(
                      'h-14 w-14 shrink-0 overflow-hidden border bg-wm-gray-50 p-1.5 transition-colors sm:h-16 sm:w-16 lg:h-20 lg:w-20',
                      i === activeIndex ? 'border-wm-copper' : 'border-wm-gray-300 hover:border-wm-copper',
                    )}
                  >
                    <ProductPhoto image={product.mainImage} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
