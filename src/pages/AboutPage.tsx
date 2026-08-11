import { useContent } from '../i18n/useContent';
import { isPending } from '../types';
import { PendingNote } from '../components/PendingNote';
import { useSeo } from '../utils/useSeo';
import { brand, contactInfo } from '../data/company';

export function AboutPage() {
  const content = useContent();

  useSeo({
    title: content.aboutPage.title,
    description: content.aboutPage.seoDescription,
    path: '/nosotros',
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-wm-black sm:text-4xl">{content.aboutPage.title}</h1>

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

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
          {content.aboutPage.standardHeading}
        </h2>
        <p className="mt-3 text-sm text-wm-gray-700">{content.aboutPage.standardIntro}</p>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {content.aboutPage.standardPoints.map((point, i) => (
            <li key={point} className="flex items-start gap-3 border border-wm-gray-300 p-4 text-sm text-wm-gray-700">
              <span className="shrink-0 text-xs font-bold text-wm-wine">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-wm-gray-700">{content.aboutPage.standardClosing}</p>
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

      <p className="mt-14 text-center text-lg font-semibold text-wm-black">{content.aboutPage.tagline}</p>

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
  );
}
