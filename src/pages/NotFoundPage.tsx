import { Link } from 'react-router-dom';
import { useContent } from '../i18n/useContent';
import { useSeo } from '../utils/useSeo';

export function NotFoundPage() {
  const content = useContent();

  useSeo({
    title: content.notFound.title,
    description: content.notFound.body,
    path: '/404',
  });

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wm-gray-500">{content.notFound.eyebrow}</p>
      <h1 className="mt-3 text-3xl font-extrabold text-wm-black sm:text-4xl">{content.notFound.title}</h1>
      <p className="mt-4 text-base text-wm-gray-700">{content.notFound.body}</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center border border-wm-black bg-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-wm-black"
      >
        {content.notFound.cta}
      </Link>
    </div>
  );
}
