import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { PendingNote } from '../components/PendingNote';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';
import { brand, contactInfo } from '../data/company';
import { isPending } from '../types';
import { useSeo } from '../utils/useSeo';
import { cn } from '../utils/cn';

type Category = 'support' | 'sales';

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5L16.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SupportIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6.5h16v9H9.5L5 19v-3.5H4v-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProductsIcon({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 8L12 4l8.5 4-8.5 4-8.5-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3.5 8v8l8.5 4 8.5-4V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ContactPage() {
  const content = useContent();
  const { locale } = useLocale();
  const [category, setCategory] = useState<Category | null>(null);
  const categories = content.contactPage.categories;

  useSeo({
    title: content.contactPage.title,
    description: content.contactPage.intro,
    path: '/contacto',
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-wm-black sm:text-4xl">{content.contactPage.title}</h1>
      <p className="mt-4 max-w-2xl text-base text-wm-gray-700">{content.contactPage.intro}</p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
            {content.contactPage.categoriesHeading}
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              to="/garantia"
              className="group flex h-full flex-col border border-wm-gray-300 p-5 text-left transition-all hover:border-wm-wine hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wm-wine-tint">
                <ShieldIcon className="text-wm-wine" />
              </span>
              <span className="mt-3 font-semibold text-wm-black">{categories.warranty.title}</span>
              <span className="mt-1.5 flex-1 text-sm text-wm-gray-700">{categories.warranty.description}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-wm-wine">
                {categories.warranty.cta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setCategory('support')}
              aria-pressed={category === 'support'}
              className={cn(
                'group flex h-full flex-col border p-5 text-left transition-all',
                category === 'support'
                  ? 'border-wm-wine bg-wm-wine shadow-md'
                  : 'border-wm-gray-300 hover:border-wm-wine hover:shadow-md',
              )}
            >
              <span
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full',
                  category === 'support' ? 'bg-white/15' : 'bg-wm-wine-tint',
                )}
              >
                <SupportIcon className={category === 'support' ? 'text-white' : 'text-wm-wine'} />
              </span>
              <span className={cn('mt-3 font-semibold', category === 'support' ? 'text-white' : 'text-wm-black')}>
                {categories.support.title}
              </span>
              <span
                className={cn(
                  'mt-1.5 flex-1 text-sm',
                  category === 'support' ? 'text-white/85' : 'text-wm-gray-700',
                )}
              >
                {categories.support.description}
              </span>
              <span
                className={cn(
                  'mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide',
                  category === 'support' ? 'text-white' : 'text-wm-wine',
                )}
              >
                {content.contactPage.selectCta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCategory('sales')}
              aria-pressed={category === 'sales'}
              className={cn(
                'group flex h-full flex-col border p-5 text-left transition-all',
                category === 'sales'
                  ? 'border-wm-wine bg-wm-wine shadow-md'
                  : 'border-wm-gray-300 hover:border-wm-wine hover:shadow-md',
              )}
            >
              <span
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full',
                  category === 'sales' ? 'bg-white/15' : 'bg-wm-wine-tint',
                )}
              >
                <ProductsIcon className={category === 'sales' ? 'text-white' : 'text-wm-wine'} />
              </span>
              <span className={cn('mt-3 font-semibold', category === 'sales' ? 'text-white' : 'text-wm-black')}>
                {categories.sales.title}
              </span>
              <span
                className={cn('mt-1.5 flex-1 text-sm', category === 'sales' ? 'text-white/85' : 'text-wm-gray-700')}
              >
                {categories.sales.description}
              </span>
              <span
                className={cn(
                  'mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide',
                  category === 'sales' ? 'text-white' : 'text-wm-wine',
                )}
              >
                {content.contactPage.selectCta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </button>
          </div>

          {category && (
            <div className="mt-10 border-t border-wm-gray-300 pt-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-wm-black">{categories[category].title}</h3>
                <button
                  type="button"
                  onClick={() => setCategory(null)}
                  className="shrink-0 text-xs font-semibold uppercase tracking-wide text-wm-gray-500 hover:text-wm-black"
                >
                  {content.contactPage.backToCategories}
                </button>
              </div>

              {category === 'support' ? (
                <ContactForm subjectOptions={categories.support.subjectOptions} showAttachments showModelAndCity />
              ) : (
                <ContactForm subjectOptions={categories.sales.subjectOptions} />
              )}
            </div>
          )}
        </div>

        <aside>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
            {content.contactPage.infoHeading}
          </h2>
          <div className="mt-4 space-y-4 text-sm">
            <div className="border border-wm-gray-300 p-5">
              <p className="font-medium text-wm-black">{content.contactPage.infoItems.emailHeading}</p>
              <p className="mt-1.5">
                {isPending(contactInfo.email) ? (
                  <PendingNote label={content.contactPage.emailPending} />
                ) : (
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-wm-gray-500">
                    {contactInfo.email}
                  </a>
                )}
              </p>
              <p className="mt-2 text-wm-gray-700">{content.contactPage.infoItems.emailDescription}</p>
            </div>

            <div className="border border-wm-gray-300 p-5">
              <p className="font-medium text-wm-black">{content.contactPage.infoItems.websiteHeading}</p>
              <p className="mt-1.5">
                <a href={brand.domain} target="_blank" rel="noopener noreferrer" className="hover:text-wm-gray-500">
                  {brand.domain.replace(/^https?:\/\//, '').toUpperCase()}
                </a>
              </p>
              <p className="mt-2 text-wm-gray-700">{content.contactPage.infoItems.websiteDescription}</p>
            </div>

            <div className="border border-wm-gray-300 p-5">
              <p className="font-medium text-wm-black">{content.contactPage.infoItems.hoursHeading}</p>
              <p className="mt-1.5">
                {isPending(contactInfo.hours) ? (
                  <PendingNote label={content.contactPage.hoursPending} />
                ) : (
                  t(contactInfo.hours, locale)
                )}
              </p>
              <p className="mt-2 text-wm-gray-700">{content.contactPage.infoItems.hoursDescription}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
