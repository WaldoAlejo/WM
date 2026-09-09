import { Link, Navigate, useParams } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts, getLifestyleImage } from '../data/products';
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
import { PageIntro } from '../components/PageIntro';
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
    image: product && !isPending(product.mainImage) ? product.mainImage.src : undefined,
    imageAlt: product && !isPending(product.mainImage) ? t(product.mainImage.alt, locale) : undefined,
  });
  useJsonLd(product ? productJsonLd(product, locale) : {});

  if (!product) {
    return <Navigate to="/productos" replace />;
  }

  const category = categories.find((c) => c.slug === product.categorySlug);
  const related = getRelatedProducts(product);
  const lifestyleImage = getLifestyleImage(product);

  return (
    <article className="editorial-product-detail">
      <PageIntro title={name} eyebrow={category ? t(category.name, locale) : content.productsPage.title}>
        {isPending(product.model) ? content.productDetail.modelPending : `${content.productDetail.modelLabel} ${product.model}`}
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
      <nav aria-label={content.common.breadcrumbAriaLabel} className="mb-8 text-xs text-wm-gray-500">
        <Link to="/productos" className="hover:text-wm-black">
          {content.productsPage.title}
        </Link>
        <span className="mx-2">{content.productDetail.breadcrumbSeparator}</span>
        <span className="text-wm-black">{name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div className="min-w-0 lg:sticky lg:top-24">
          <ProductGallery key={product.slug} mainImage={product.mainImage} gallery={product.gallery} />

          <div className="mt-8 border-t border-wm-gray-300 pt-8">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/contacto?motivo=sales&producto=${encodeURIComponent(product.slug)}`}
                className="editorial-button"
              >
                {content.productDetail.inquiryCta}
              </Link>
              <WarrantyBadge size={56} />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {!isPending(product.manualUrl) && (
                <a
                  href={product.manualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-button editorial-button-secondary"
                >
                  {content.productDetail.manualCta}
                </a>
              )}
              {!isPending(product.specSheetUrl) && (
                <a
                  href={product.specSheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-button editorial-button-secondary"
                >
                  {content.productDetail.specSheetCta}
                </a>
              )}
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
          </div>
        </div>

        <div>
          <p className="text-base leading-7 text-wm-gray-700">
            {shortDescription ?? <PendingNote label={content.productDetail.descriptionPending} />}
          </p>

          <div className="mt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-wm-black">
              {content.productDetail.benefitsHeading}
            </h2>
            <Benefits items={product.benefits} columns={1} />
          </div>

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

      {lifestyleImage && (
        <div className="editorial-product-lifestyle mt-16 lg:mt-20">
          <img
            src={lifestyleImage.src}
            alt={t(lifestyleImage.alt, locale)}
            loading="lazy"
            className="max-h-[620px] w-full object-contain"
          />
        </div>
      )}

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
      </div>
    </article>
  );
}
