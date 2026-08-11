import type { Pending, ProductImage } from '../types';
import { isPending } from '../types';
import { cn } from '../utils/cn';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../i18n/useContent';
import { t } from '../utils/t';

interface ProductPhotoProps {
  image: Pending<ProductImage>;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Mirrors the dashed placeholder box used for "PRODUCT PHOTOGRAPH" in the
 * master packing template when no real photograph has been supplied yet.
 */
export function ProductPhoto({ image, className, loading = 'lazy' }: ProductPhotoProps) {
  const { locale } = useLocale();
  const content = useContent();

  if (isPending(image)) {
    return (
      <div
        className={cn(
          'flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-wm-gray-300 bg-wm-gray-50 p-6 text-center',
          className,
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-wm-gray-500">
          {content.productPhoto.placeholderLabel}
        </span>
        <span className="text-[11px] text-wm-gray-500">{content.productPhoto.placeholderHint}</span>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={t(image.alt, locale)}
      loading={loading}
      className={cn('aspect-square w-full rounded-sm bg-wm-gray-50 object-contain', className)}
    />
  );
}
