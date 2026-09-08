import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isPending, type Product } from '../types';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { cn } from '../utils/cn';

interface HeroProps {
  products?: Product[];
}

const ROTATE_INTERVAL_MS = 10_000;

/** Editorial product carousel with explicit pause and motion preferences. */
export function Hero({ products = [] }: HeroProps) {
  const content = useContent();
  const { locale } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [readyImages, setReadyImages] = useState<Set<string>>(() => new Set());
  const [firstImageFailed, setFirstImageFailed] = useState(false);
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

  const requestedIndex = products.length ? activeIndex % products.length : 0;
  const requestedImage = products[requestedIndex]?.mainImage;
  const requestedSrc = requestedImage && !isPending(requestedImage) ? requestedImage.src : undefined;
  // Loading only marks readiness. The current requested index determines which
  // frame is displayed, so late downloads cannot override a newer selection.
  useEffect(() => {
    if (requestedSrc && readyImages.has(requestedSrc)) setDisplayedIndex(requestedIndex);
  }, [requestedIndex, requestedSrc, readyImages]);

  const currentIndex = products.length ? displayedIndex % products.length : 0;
  const activeProduct = products[currentIndex];
  const firstImage = products[0]?.mainImage;
  const firstReady = firstImageFailed || !firstImage || isPending(firstImage) || readyImages.has(firstImage.src);

  return (
    <section
      className="editorial-hero dark-surface"
      aria-label={content.hero.spotlightLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="editorial-hero-scene">
        <div className="editorial-hero-photos">
          {products.map((product, i) => {
            const photo = product.mainImage;
            if (isPending(photo) || (i !== 0 && !firstReady)) return null;
            return (
              <img
                key={product.id}
                src={photo.src}
                alt={i === currentIndex && !(i === 0 && firstImageFailed) ? t(photo.alt, locale) : ''}
                aria-hidden={i !== currentIndex || (i === 0 && firstImageFailed)}
                width={1254}
                height={1254}
                loading="eager"
                fetchPriority={i === 0 ? 'high' : 'low'}
                decoding="async"
                onError={() => {
                  if (i === 0) {
                    setFirstImageFailed(true);
                    if (requestedIndex === 0 && products.length > 1) setActiveIndex(1);
                  }
                }}
                onLoad={async (event) => {
                  const image = event.currentTarget;
                  try { await image.decode(); } catch { /* A loaded image may still be usable if decode is unsupported. */ }
                  if (image.naturalWidth > 0) setReadyImages((ready) => new Set(ready).add(photo.src));
                }}
                className={cn('editorial-hero-image', i === currentIndex && !(i === 0 && firstImageFailed) && 'is-active')}
              />
            );
          })}
        </div>
        <div className="editorial-hero-shade" aria-hidden="true" />
        <div className="editorial-hero-copy">
          <p className="editorial-eyebrow text-white/75">{content.home.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">{content.hero.subtitle}</p>
          <Link to="/productos" className="editorial-button editorial-button-light mt-8">
            {content.hero.cta}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="editorial-hero-bar">
        <div className="min-w-0">
          <p className="editorial-eyebrow mb-1 text-white/65">{content.hero.spotlightLabel}</p>
          {activeProduct && (
            <Link to={`/productos/${activeProduct.slug}`} className="inline-flex min-h-11 items-center gap-4 text-sm hover:underline underline-offset-4">
              {t(activeProduct.name, locale)}<span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
        {products.length > 1 && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <div className="flex items-center gap-1" role="group" aria-label={content.hero.spotlightLabel}>
              {products.map((product, i) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => { setActiveIndex(i); setPaused(true); }}
                  aria-label={t(product.name, locale)}
                  aria-pressed={i === currentIndex}
                  className={cn('flex h-11 w-11 items-center justify-center border-b text-xs tabular-nums transition-colors',
                    i === currentIndex ? 'border-white text-white' : 'border-white/25 text-white/65 hover:border-white hover:text-white')}
                >{String(i + 1).padStart(2, '0')}</button>
              ))}
            </div>
            {reducedMotion ? (
              <span className="max-w-40 text-xs text-white/75">{content.hero.manualRotation}</span>
            ) : (
              <button type="button" onClick={() => setPaused((value) => !value)} className="inline-flex min-h-11 items-center gap-2 text-xs text-white/80 underline underline-offset-4 hover:text-white">
                <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
                {paused ? content.hero.resumeRotation : content.hero.pauseRotation}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
