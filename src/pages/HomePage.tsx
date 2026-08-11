import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { Reveal } from '../components/Reveal';
import { getFeaturedProducts } from '../data/products';
import { categories } from '../data/categories';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { useSeo } from '../utils/useSeo';
import { useJsonLd } from '../utils/useJsonLd';
import { organizationJsonLd } from '../data/structuredData';

export function HomePage() {
  const content = useContent();
  const { locale } = useLocale();

  useSeo({
    title: content.home.seoTitle,
    description: content.hero.subtitle,
    path: '/',
  });
  useJsonLd(organizationJsonLd());

  const featured = getFeaturedProducts();

  return (
    <>
      <Hero products={featured} />

      <section className="bg-wm-copper-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={content.categories.heading}
              eyebrowClassName="text-white/80"
              title={content.categories.subheading}
              titleClassName="text-white"
            />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 80}>
                <Link
                  to={`/productos?categoria=${cat.slug}`}
                  className="flex h-32 items-center justify-center border-2 border-transparent bg-white px-4 text-center text-sm font-semibold uppercase tracking-wide text-wm-black shadow-sm transition-colors hover:border-wm-black"
                >
                  {t(cat.name, locale)}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-wm-gray-300 bg-wm-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title={content.featured.heading} subtitle={content.featured.subheading} />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/productos"
              className="inline-flex items-center justify-center border border-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-wm-black transition-colors hover:bg-wm-black hover:text-white"
            >
              {content.featured.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={content.quality.heading} subtitle={content.quality.subheading} />
        </Reveal>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.quality.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 80}>
              <li className="border border-wm-gray-300 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-wm-black">{point.title}</h3>
                <p className="mt-2 text-sm text-wm-gray-700">{point.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t-2 border-wm-copper bg-wm-black text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div className="flex items-center gap-5">
            <WarrantyBadge size={72} />
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">{content.warrantyHome.heading}</h2>
              <p className="mt-1.5 max-w-md text-sm text-white/80">{content.warrantyHome.body}</p>
            </div>
          </div>
          <Link
            to="/garantia"
            className="inline-flex shrink-0 items-center justify-center border border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-wm-black"
          >
            {content.warrantyHome.cta}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={content.contactCta.heading} subtitle={content.contactCta.body} align="center" />
        </Reveal>
        <div className="mt-8">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center border border-wm-black bg-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-wm-black"
          >
            {content.contactCta.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
