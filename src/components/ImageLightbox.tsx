import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ProductImage } from '../types';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { useModalDialog } from '../utils/useModalDialog';

interface ImageLightboxProps {
  images: ProductImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Full-screen image viewer. Opened by clicking a product photo; closes on
 *  backdrop click, the close button, or Escape. Arrow keys step through the
 *  gallery when there's more than one image. */
export function ImageLightbox({ images, activeIndex, onClose, onNavigate }: ImageLightboxProps) {
  const content = useContent();
  const { locale } = useLocale();
  const active = images[activeIndex];
  const dialogRef = useModalDialog(Boolean(active));

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' && images.length > 1) {
        e.preventDefault();
        onNavigate((activeIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        e.preventDefault();
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length, onClose, onNavigate]);

  if (!active) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={content.productDetail.galleryAriaLabel}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none items-center justify-center border-0 bg-black/95 p-4 text-white open:flex sm:p-8 [&_:focus-visible]:outline-white"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <button
        type="button"
        autoFocus
        onClick={onClose}
        aria-label={content.productDetail.closeZoomAriaLabel}
        className="wm-button-surface absolute right-4 top-4 flex h-11 w-11 items-center justify-center"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex - 1 + images.length) % images.length);
            }}
            aria-label={content.productDetail.previousImageAriaLabel}
            className="wm-button-surface absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center sm:left-4"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % images.length);
            }}
            aria-label={content.productDetail.nextImageAriaLabel}
            className="wm-button-surface absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center sm:right-4"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      <img
        src={active.src}
        alt={t(active.alt, locale)}
        className="max-h-full max-w-full object-contain"
      />
    </dialog>,
    document.body,
  );
}
