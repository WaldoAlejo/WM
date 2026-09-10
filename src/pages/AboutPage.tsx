import { PageIntro } from '../components/PageIntro';
import { Logo } from '../components/Logo';
import { useContent } from '../i18n/useContent';
import { isPending } from '../types';
import { PendingNote } from '../components/PendingNote';
import { useSeo } from '../utils/useSeo';
import { brand, contactInfo } from '../data/company';

export function AboutPage() {
  const content = useContent();
  const [standardTitleBefore, standardTitleAfter] = content.aboutPage.standardHeading.split('WM®');

  useSeo({
    title: content.aboutPage.title,
    description: content.aboutPage.seoDescription,
    path: '/nosotros',
  });

  return (
    <>
      <PageIntro compact title={content.aboutPage.title} description={content.aboutPage.seoDescription} />
      <div className="editorial-prose mx-auto max-w-3xl px-6 pb-16 lg:px-8">

      <section className="mt-8 space-y-4">
        {isPending(content.aboutPage.intro) ? (
          <PendingNote label={content.aboutPage.introPending} />
        ) : (
          content.aboutPage.intro.map((paragraph) => (
            <p key={paragraph} className="text-base text-wm-gray-700">
              {paragraph}
            </p>
          ))
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
          {content.aboutPage.valueHeading}
        </h2>
        <div className="mt-3 space-y-3">
          {content.aboutPage.valueBody.map((paragraph) => (
            <p key={paragraph} className="text-sm text-wm-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="wm-standard-heading" className="editorial-standard mt-12">
        <h2 id="wm-standard-heading" className="sr-only">{content.aboutPage.standardHeading}</h2>
        <div className="grid gap-6 sm:grid-cols-[0.85fr_1.15fr] sm:items-end sm:gap-8">
          <div aria-hidden="true">
            <Logo height={32} />
            <div className="mt-4 font-heading text-[28px] font-medium leading-tight tracking-tight text-wm-ink">
              {[standardTitleBefore, standardTitleAfter].filter(Boolean).map((part) => part.trim()).join(' ')}
            </div>
          </div>
          <p className="text-sm text-wm-gray-700">{content.aboutPage.standardIntro}</p>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {content.aboutPage.standardPoints.map((point) => (
            <li key={point} className="editorial-quality-pillar flex items-center justify-center text-center text-[15px] font-bold leading-6 text-wm-wine">
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-8 border-t border-wm-gray-300 pt-6 text-sm text-wm-gray-700">{content.aboutPage.standardClosing}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
          {content.aboutPage.qualityHeading}
        </h2>
        <div className="mt-3 space-y-3">
          {content.aboutPage.qualityBody.map((paragraph) => (
            <p key={paragraph} className="text-sm text-wm-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
          {content.aboutPage.visionHeading}
        </h2>
        <div className="mt-3 space-y-3">
          {content.aboutPage.visionBody.map((paragraph) => (
            <p key={paragraph} className="text-sm text-wm-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <div className="mt-14 text-center text-lg font-semibold text-wm-black">
        <p className="sr-only">{content.aboutPage.tagline}</p>
        <div aria-hidden="true" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          <Logo height={28} className="shrink-0" />
          <span>{content.aboutPage.tagline.replace(/^WM®\s*/, '')}</span>
        </div>
      </div>

      <section className="mt-8 border-t border-wm-gray-300 pt-8 text-center text-sm text-wm-gray-700">
        <p>
          {content.aboutPage.contactClosingPrefix}{' '}
          {isPending(contactInfo.email) ? (
            <PendingNote />
          ) : (
            <a href={`mailto:${contactInfo.email}`} className="font-medium text-wm-black hover:text-wm-gray-500">
              {contactInfo.email}
            </a>
          )}{' '}
          {content.aboutPage.contactClosingOr}{' '}
          <a
            href={brand.domain}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-wm-black hover:text-wm-gray-500"
          >
            {brand.domain.replace(/^https?:\/\//, '').toUpperCase()}
          </a>
          .
        </p>
      </section>
    </div>
    </>
  );
}
