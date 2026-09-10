import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { QualityIcon } from '../components/QualityIcon';
import { getFeaturedProducts } from '../data/products';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { isPending } from '../types';
import { t } from '../utils/t';
import { useSeo } from '../utils/useSeo';
import { useJsonLd } from '../utils/useJsonLd';
import { organizationJsonLd } from '../data/structuredData';

// Deliberate editorial selections; all featured products remain in the catalog.
const heroIds = ['p01', 'p07', 'p02'];
const qualityIcons = ['design', 'quality', 'support'] as const;
const selectionIds = ['p01', 'p07', 'p09'];

export function HomePage() {
  const content = useContent();
  const { locale } = useLocale();
  useSeo({ title: content.home.seoTitle, description: content.hero.subtitle, path: '/' });
  useJsonLd(organizationJsonLd());
  const featured = getFeaturedProducts();
  const heroProducts = heroIds.flatMap((id) => featured.filter((product) => product.id === id));
  const selection = selectionIds.flatMap((id) => featured.filter((product) => product.id === id));
  const homeImage = {
    src: '/products/freidora-de-aire-vidrio-4l/AirFrayer_4L.png',
    alt: {
      es: 'Freidora de aire de vidrio WM en negro, con detalles en cobre',
      en: 'WM glass air fryer in black, with copper-toned accents',
    },
  };
  const energyImage = featured.find((product) => product.id === 'p09')?.mainImage;

  return (
    <div className="editorial-home">
      <Hero products={heroProducts} />
      <section className="editorial-intro wm-section mx-auto max-w-4xl px-6 text-center">
        <p className="editorial-eyebrow text-wm-wine">{content.home.eyebrow}</p>
        <h2 className="editorial-heading mx-auto mt-5 max-w-3xl">{content.home.introTitle}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-wm-gray-700 sm:text-base">{content.home.introBody}</p>
        <Link to="/nosotros" className="editorial-text-link mt-6">{content.home.brandCta}<span aria-hidden="true">↗</span></Link>
      </section>

      <section aria-labelledby="home-story-heading" className="editorial-story wm-container">
        <div className="editorial-story-image">
          {homeImage && !isPending(homeImage) && <img src={homeImage.src} alt={t(homeImage.alt, locale)} width={1254} height={1254} loading="lazy" decoding="async" className="h-full w-full object-cover" />}
        </div>
        <div className="editorial-story-copy">
          <p className="editorial-eyebrow text-wm-wine">{content.home.homeLabel}</p>
          <h2 id="home-story-heading" className="editorial-heading mt-5">{content.home.homeTitle}</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-wm-gray-700 sm:text-base">{content.home.homeBody}</p>
          <Link to="/productos?categoria=categoria-01" className="editorial-text-link mt-8">{content.home.homeCta}<span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section aria-labelledby="energy-story-heading" className="editorial-story editorial-story-energy wm-container">
        <div className="editorial-story-copy">
          <p className="editorial-eyebrow text-wm-wine">{content.home.energyLabel}</p>
          <h2 id="energy-story-heading" className="editorial-heading mt-5">{content.home.energyTitle}</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-wm-gray-700 sm:text-base">{content.home.energyBody}</p>
          <Link to="/productos?categoria=energia" className="editorial-text-link mt-8 text-wm-wine">{content.home.energyCta}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="editorial-story-image editorial-energy-photo">
          {energyImage && !isPending(energyImage) && <img src={energyImage.src} alt={t(energyImage.alt, locale)} width={1448} height={1086} loading="lazy" decoding="async" className="h-full w-full object-contain" />}
        </div>
      </section>

      <section className="wm-container wm-section">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="editorial-eyebrow text-wm-wine">{content.home.selectionLabel}</p>
            <h2 className="editorial-heading mt-4">{content.featured.heading}</h2>
          </div>
          <Link to="/productos" className="editorial-text-link shrink-0">{content.featured.cta}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5 lg:gap-8">
          {selection.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              image={product.id === 'p09' ? {
                src: '/products/estacion-de-energia-portatil-p3200/PowerStation_real.png',
                alt: {
                  es: 'Estación de energía portátil WM en una sala de estar',
                  en: 'WM portable power station in a living room',
                },
              } : undefined}
              imageVariant={product.id === 'p09' ? 'lifestyle' : undefined}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="quality-heading" className="editorial-quality">
        <div className="wm-container pb-16 pt-8 sm:pb-20">
          <h2 id="quality-heading" className="editorial-eyebrow mb-8 text-wm-wine">{content.quality.heading}</h2>
          <ul className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {content.quality.points.map((point, index) => (
              <li key={point.title} className="border-t border-wm-gray-300 pt-5">
                <QualityIcon name={qualityIcons[index]} className="text-wm-wine" />
                <h3 className="mt-3 text-base font-semibold">{point.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-wm-gray-700">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="editorial-warranty dark-surface">
        <div className="wm-container flex flex-col items-start gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col gap-5 sm:w-auto sm:flex-row sm:items-center sm:gap-7">
            <WarrantyBadge size={112} className="self-center sm:self-auto" />
            <div>
              <h2 className="text-3xl font-medium leading-tight sm:text-4xl">{content.warrantyHome.heading}</h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/80">{content.warrantyHome.body}</p>
            </div>
          </div>
          <Link to="/garantia" className="editorial-text-link shrink-0">{content.warrantyHome.cta}<span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="editorial-contact-cta mx-auto max-w-4xl px-6 text-center">
        <p className="editorial-eyebrow text-wm-wine">{content.home.supportLabel}</p>
        <h2 className="editorial-heading mt-5">{content.contactCta.heading}</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-wm-gray-700">{content.contactCta.body}</p>
        <Link to="/contacto" className="editorial-button mt-8 justify-center gap-2.5 text-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true" focusable="false">
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
          </svg>
          <span className="leading-5">{content.contactCta.cta}</span>
        </Link>
      </section>
    </div>
  );
}
