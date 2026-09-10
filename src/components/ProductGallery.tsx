import { useEffect, useState } from 'react';
import type { Pending, Product, ProductImage } from '../types';
import { isPending } from '../types';
import { ProductPhoto } from './ProductPhoto';
import { ImageLightbox } from './ImageLightbox';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { cn } from '../utils/cn';

// Includes the main image; additional catalog images remain available in the data.
const MAX_VISIBLE_IMAGES = 5;

interface ProductGalleryProps {
  mainImage: Pending<ProductImage>;
  gallery: Product['gallery'];
}

/** Main photo + thumbnail strip (side column on larger screens, row below on mobile). Works with zero gallery images (main only). */
export function ProductGallery({ mainImage, gallery }: ProductGalleryProps) {
  const content = useContent();
  const { locale } = useLocale();
  const allImages: Pending<ProductImage>[] = [mainImage, ...gallery].slice(0, MAX_VISIBLE_IMAGES);
  const realImages = allImages.filter((img): img is ProductImage => !isPending(img));
  const [activeIndex, setActiveIndex] = useState(0);
  const [requestedIndex, setRequestedIndex] = useState(0);
  const [visited, setVisited] = useState(() => new Set([0]));
  const [ready, setReady] = useState<Set<string>>(() => new Set());
  const [failed, setFailed] = useState<Set<number>>(() => new Set());
  const [attempts, setAttempts] = useState<Record<number, number>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const active = allImages[activeIndex] ?? mainImage;
  const activeRealIndex = !isPending(active) && ready.has(active.src) ? realImages.indexOf(active) : -1;
  const requested = allImages[requestedIndex] ?? mainImage;
  const requestedSrc = isPending(requested) ? undefined : requested.src;

  useEffect(() => {
    if (!requestedSrc || ready.has(requestedSrc)) setActiveIndex(requestedIndex);
  }, [requestedIndex, requestedSrc, ready]);

  function selectImage(index: number) {
    setRequestedIndex(index);
    setVisited((previous) => new Set(previous).add(index));
    if (failed.has(index)) {
      setFailed((previous) => { const next = new Set(previous); next.delete(index); return next; });
      setAttempts((previous) => ({ ...previous, [index]: (previous[index] ?? 0) + 1 }));
    }
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="min-w-0 flex-1">
        <button
          type="button"
          onClick={() => activeRealIndex >= 0 && setLightboxOpen(true)}
          disabled={activeRealIndex < 0}
          aria-label={content.productDetail.zoomAriaLabel}
          className="wm-button-surface gallery-stage block w-full"
        >
          <span className="gallery-frames">
            {(isPending(active) || failed.has(activeIndex)) && <ProductPhoto image={{ pending: true }} />}
            {allImages.map((photo, index) => {
              if (isPending(photo) || !visited.has(index)) return null;
              const visible = index === activeIndex && !failed.has(index);
              return (
                <img
                  key={`${index}-${attempts[index] ?? 0}`}
                  src={photo.src}
                  alt={visible ? t(photo.alt, locale) : ''}
                  aria-hidden={!visible}
                  loading="eager"
                  decoding="async"
                  width={1254}
                  height={1254}
                  className={cn('gallery-frame', visible && 'is-active')}
                  onLoad={async (event) => {
                    const image = event.currentTarget;
                    try { await image.decode(); } catch { /* Use a successfully loaded image when decode is unavailable. */ }
                    if (image.naturalWidth > 0) setReady((previous) => new Set(previous).add(photo.src));
                  }}
                  onError={() => setFailed((previous) => new Set(previous).add(index))}
                />
              );
            })}
          </span>
        </button>
        {failed.has(requestedIndex) && <p role="status" className="mt-4 text-sm text-wm-gray-700">{content.productDetail.galleryLoadError}</p>}
      </div>

      {lightboxOpen && activeRealIndex >= 0 && (
        <ImageLightbox
          images={realImages}
          activeIndex={activeRealIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(realIndex) => {
            const target = realImages[realIndex];
            const indexInAll = allImages.indexOf(target);
            if (indexInAll >= 0) selectImage(indexInAll);
          }}
        />
      )}

      {allImages.length > 1 && (
        <div
          className="flex gap-3 overflow-x-auto no-scrollbar sm:w-16 sm:shrink-0 sm:flex-col sm:overflow-visible lg:w-20"
          role="group"
          aria-label={content.productDetail.galleryAriaLabel}
        >
          {allImages.map((img, index) => (
            <button
              key={index}
              type="button"
              aria-pressed={index === activeIndex}
              onClick={() => selectImage(index)}
              className="wm-button-surface h-16 w-16 shrink-0 overflow-hidden border p-0 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            >
              <ProductPhoto image={img} fit="cover" className="h-full w-full rounded-none border-0 p-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
