import { useState } from 'react';
import type { Pending, Product, ProductImage } from '../types';
import { ProductPhoto } from './ProductPhoto';
import { useContent } from '../i18n/useContent';
import { cn } from '../utils/cn';

interface ProductGalleryProps {
  mainImage: Pending<ProductImage>;
  gallery: Product['gallery'];
}

/** Main photo + thumbnail strip (side column on larger screens, row below on mobile). Works with zero gallery images (main only). */
export function ProductGallery({ mainImage, gallery }: ProductGalleryProps) {
  const content = useContent();
  const allImages: Pending<ProductImage>[] = [mainImage, ...gallery];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = allImages[activeIndex] ?? mainImage;

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="min-w-0 flex-1">
        <ProductPhoto image={active} className="border border-wm-gray-300" loading="eager" />
      </div>

      {allImages.length > 1 && (
        <div
          className="flex gap-3 overflow-x-auto no-scrollbar sm:w-16 sm:shrink-0 sm:flex-col sm:overflow-visible lg:w-20"
          role="tablist"
          aria-label={content.productDetail.galleryAriaLabel}
        >
          {allImages.map((img, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-16 w-16 shrink-0 overflow-hidden border bg-wm-gray-50 transition-colors sm:h-16 sm:w-16 lg:h-20 lg:w-20',
                index === activeIndex ? 'border-wm-black' : 'border-wm-gray-300',
              )}
            >
              <ProductPhoto image={img} className="h-full w-full rounded-none border-0 p-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
