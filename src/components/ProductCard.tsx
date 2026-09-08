import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { isPending } from '../types';
import { ProductPhoto } from './ProductPhoto';
import { categories } from '../data/categories';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const content = useContent();
  const { locale } = useLocale();
  const category = categories.find((c) => c.slug === product.categorySlug);
  const mainBenefit = product.benefits[0];

  return (
    <Link
      to={`/productos/${product.slug}`}
      className="group flex h-full flex-col border-b border-wm-gray-300 pb-5 transition-colors hover:border-wm-wine focus-visible:border-wm-wine"
    >
      <div className="editorial-card-photo relative overflow-hidden">
        {(product.featured || product.isNew) && (
          <span className="absolute left-3 top-3 z-10 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-wm-wine">
            {product.isNew ? content.productsPage.newBadge : content.productsPage.featuredBadge}
          </span>
        )}
        <ProductPhoto
          image={product.mainImage}
          className="transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        {category && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-wm-wine">
            {t(category.name, locale)}
          </p>
        )}
        <h3 className="mt-1 text-base font-semibold text-wm-black">{t(product.name, locale)}</h3>
        <p className="mt-0.5 text-sm text-wm-gray-500">
          {isPending(product.model)
            ? content.productDetail.modelPending
            : `${content.productDetail.modelLabel} ${product.model}`}
        </p>
        {mainBenefit && <p className="mt-3 text-sm text-wm-gray-700">{t(mainBenefit.title, locale)}</p>}
        <span className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs font-medium text-wm-wine">{content.home.productCta}<span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
