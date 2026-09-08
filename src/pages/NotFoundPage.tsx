import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { useContent } from '../i18n/useContent';
import { useSeo } from '../utils/useSeo';

export function NotFoundPage() {
  const content = useContent();

  useSeo({
    title: content.notFound.title,
    description: content.notFound.body,
    path: '/404',
    noindex: true,
  });

  return (
    <>
      <PageIntro title={content.notFound.title} description={content.notFound.body} eyebrow={content.notFound.eyebrow} />
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <Link
        to="/"
        className="mt-8 editorial-button"
      >
        {content.notFound.cta}
      </Link>
    </div>
    </>
  );
}
