import { Link, Navigate, useParams } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { categories } from '../data/categories';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { brand, productLine } from '../data/company';
import { isPending } from '../types';
import { ProductGallery } from '../components/ProductGallery';
import { Benefits } from '../components/Benefits';
import { SpecificationsTable } from '../components/SpecificationsTable';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { PendingNote } from '../components/PendingNote';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { useSeo } from '../utils/useSeo';
import { useJsonLd } from '../utils/useJsonLd';
import { productJsonLd } from '../data/structuredData';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const content = useContent();
  const { locale } = useLocale();

  const name = product ? t(product.name, locale) : 'Product';
  const shortDescription = product && !isPending(product.shortDescription) ? t(product.shortDescription, locale) : undefined;

  useSeo({
    title: product?.seoTitle ? t(product.seoTitle, locale) : name,
    description:
      (product?.seoDescription ? t(product.seoDescription, locale) : undefined) ??
      shortDescription ??
      `${name} — ${brand.name} ${productLine.name}`,
    path: `/productos/${slug ?? ''}`,
    type: 'product',
  });
  useJsonLd(product ? productJsonLd(product, locale) : {});

  if (!product) {
    return <Navigate to="/productos" replace />;
  }

  const category = categories.find((c) => c.slug === product.categorySlug);
  const related = getRelatedProducts(product);

  return (
    <article className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8">
      <nav aria-label={content.common.breadcrumbAriaLabel} className="mb-8 text-xs text-wm-gray-500">
        <Link to="/productos" className="hover:text-wm-black">
          {content.productsPage.title}
        </Link>
        <span className="mx-2">{content.productDetail.breadcrumbSeparator}</span>
        <span className="text-wm-black">{name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div className="bg-white p-8 lg:sticky lg:top-20">
          <ProductGallery mainImage={product.mainImage} gallery={product.gallery} />
        </div>

        <div>
          {category && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wm-wine">
              {t(category.name, locale)}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-extrabold text-wm-black sm:text-4xl">{name}</h1>
          <p className="mt-2 text-sm text-wm-gray-500">
            {isPending(product.model) ? (
              <PendingNote label={content.productDetail.modelPending} />
            ) : (
              `${content.productDetail.modelLabel} ${product.model}`
            )}
          </p>

          <p className="mt-6 text-base text-wm-gray-700">
            {shortDescription ?? <PendingNote label={content.productDetail.descriptionPending} />}
          </p>

          <div className="mt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-wm-black">
              {content.productDetail.benefitsHeading}
            </h2>
            <Benefits items={product.benefits} columns={1} />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center border border-wm-black bg-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-wm-black"
            >
              {content.productDetail.inquiryCta}
            </Link>
            {!isPending(product.manualUrl) && (
              <a
                href={product.manualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-wm-black transition-colors hover:bg-wm-black hover:text-white"
              >
                {content.productDetail.manualCta}
              </a>
            )}
            {!isPending(product.specSheetUrl) && (
              <a
                href={product.specSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-wm-black transition-colors hover:bg-wm-black hover:text-white"
              >
                {content.productDetail.specSheetCta}
              </a>
            )}
            <WarrantyBadge size={64} />
          </div>
          {(isPending(product.manualUrl) || isPending(product.specSheetUrl)) && (
            <p className="mt-3 space-x-4 text-xs text-wm-gray-500">
              {isPending(product.manualUrl) && (
                <span>
                  {content.productDetail.manualCta} <PendingNote label={content.productDetail.manualPending} />
                </span>
              )}
              {isPending(product.specSheetUrl) && (
                <span>
                  {content.productDetail.specSheetCta} <PendingNote label={content.productDetail.specSheetPending} />
                </span>
              )}
            </p>
          )}

          <div className="mt-16">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-wm-black">
              {content.productDetail.specsHeading}
            </h2>
            <SpecificationsTable specs={product.specifications} />
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-wm-black">
              {content.productDetail.safetyHeading}
            </h2>
            {isPending(product.safetyAndQuality) ? (
              <PendingNote label={content.productDetail.safetyPending} />
            ) : (
              <ul className="space-y-2 text-sm text-wm-gray-700">
                {product.safetyAndQuality.map((item) => (
                  <li key={item.es}>• {t(item, locale)}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <SectionHeading title={content.productDetail.relatedHeading} />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
