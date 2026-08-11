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
      className="group block border border-wm-gray-300 bg-white transition-all hover:border-wm-wine hover:shadow-md focus-visible:border-wm-wine focus-visible:shadow-md"
    >
      <div className="relative overflow-hidden bg-wm-gray-50 p-6">
        {product.featured && (
          <span className="absolute left-3 top-3 z-10 bg-wm-wine-tint px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-wm-wine">
            {content.productsPage.featuredBadge}
          </span>
        )}
        <ProductPhoto
          image={product.mainImage}
          className="transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
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
      </div>
    </Link>
  );
}
