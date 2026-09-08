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
 * Rotation pauses while someone interacts and respects reduced motion.
 */
export function Hero({ products = [] }: HeroProps) {
  const content = useContent();
  const { locale } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(() => document.hidden);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setPageHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const rotating = !paused && !reducedMotion && !hovered && !focused && !pageHidden;

  useEffect(() => {
    if (products.length < 2 || !rotating) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % products.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [products.length, rotating]);

  const currentIndex = products.length ? activeIndex % products.length : 0;
  const activeProduct = products[currentIndex];

  return (
    <section className="border-b border-wm-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:pb-20 lg:pt-8 lg:px-8">
        <div>
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
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wm-wine text-white"
                  aria-hidden="true"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12.5l2.5 2.5L16.5 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mx-auto w-full min-w-0 max-w-md lg:max-w-none"
          role="group"
          aria-label={content.hero.spotlightLabel}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="min-w-0 flex-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-wm-wine">
                {content.hero.spotlightLabel}
              </p>
              <div className="relative">
                <Link
                  to={activeProduct ? `/productos/${activeProduct.slug}` : '/productos'}
                  className="group block overflow-hidden border border-wm-gray-300 bg-white p-5 sm:p-6"
                >
                  <div key={activeIndex} className={reducedMotion ? undefined : 'fade-in-up'}>
                    <ProductPhoto
                      image={activeProduct?.mainImage ?? { pending: true }}
                      loading="eager"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="absolute -bottom-4 right-3 flex h-16 w-16 items-center justify-center rounded-full border border-wm-gray-300 bg-white shadow-md sm:h-20 sm:w-20">
                  <WarrantyBadge size={60} />
                </div>
              </div>

              {activeProduct && (
                <Link
                  to={`/productos/${activeProduct.slug}`}
                  className="mt-6 block min-h-16 text-sm font-semibold uppercase tracking-[0.1em] text-wm-black transition-colors hover:text-wm-wine"
                >
                  {t(activeProduct.name, locale)}
                </Link>
              )}
            </div>

            {products.length > 1 && (
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-9">
                {products.map((product, i) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => { setActiveIndex(i); setPaused(true); }}
                    aria-label={t(product.name, locale)}
                    aria-pressed={i === currentIndex}
                    className={cn(
                      'aspect-square min-h-11 min-w-0 overflow-hidden border bg-white p-1 transition-colors',
                      i === currentIndex ? 'border-2 border-wm-wine' : 'border-wm-gray-300 hover:border-wm-wine',
                    )}
                  >
                    <ProductPhoto image={product.mainImage} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
            {products.length > 1 && (
              <div className="flex min-h-11 items-center justify-between gap-3 border-t border-wm-gray-300 pt-3">
                <span className="text-xs tabular-nums text-wm-gray-700">{currentIndex + 1} / {products.length}</span>
                {reducedMotion ? (
                  <span className="text-right text-xs text-wm-gray-700">{content.hero.manualRotation}</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPaused((value) => !value)}
                    className="inline-flex min-h-11 items-center gap-2 px-2 text-xs font-semibold text-wm-wine underline underline-offset-4 hover:text-wm-black"
                  >
                    <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
                    {paused ? content.hero.resumeRotation : content.hero.pauseRotation}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
