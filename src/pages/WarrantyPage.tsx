import { WarrantyBadge } from '../components/WarrantyBadge';
import { PendingNote } from '../components/PendingNote';
import { ContactForm } from '../components/ContactForm';
import { useContent } from '../i18n/useContent';
import { isPending } from '../types';
import { useSeo } from '../utils/useSeo';

export function WarrantyPage() {
  const content = useContent();

  useSeo({
    title: content.warrantyPage.title,
    description: content.warrantyPage.intro,
    path: '/garantia',
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-wm-black sm:text-4xl">{content.warrantyPage.title}</h1>
          <p className="mt-4 max-w-2xl text-base text-wm-gray-700">{content.warrantyPage.intro}</p>
        </div>
        <WarrantyBadge size={80} className="hidden sm:block" />
      </div>

      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
          {content.warrantyPage.coverageHeading}
        </h2>
        <div className="mt-3">
          {isPending(content.warrantyPage.coverageBody) ? (
            <PendingNote label={content.warrantyPage.coveragePending} />
          ) : (
            <p className="text-sm text-wm-gray-700">{content.warrantyPage.coverageBody}</p>
          )}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-wm-black">
          {content.warrantyPage.howToHeading}
        </h2>
        <div className="mt-3">
          {isPending(content.warrantyPage.howToBody) ? (
            <PendingNote label={content.warrantyPage.howToPending} />
          ) : (
            <p className="text-sm text-wm-gray-700">{content.warrantyPage.howToBody}</p>
          )}
        </div>
      </section>

      <section className="mt-14 border-t border-wm-gray-300 pt-10">
        <h2 className="text-xl font-bold text-wm-black">{content.warrantyPage.formHeading}</h2>
        <p className="mt-2 mb-6 text-sm text-wm-gray-700">{content.warrantyPage.formIntro}</p>
        <ContactForm
          subjectOptions={content.warrantyPage.subjectOptions}
          defaultSubjectIndex={0}
          showAttachments
          showModelAndCity
        />
      </section>
    </div>
  );
}
