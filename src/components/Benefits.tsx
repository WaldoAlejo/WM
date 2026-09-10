import type { BenefitItem } from '../types';
import { BenefitIcon } from './BenefitIcon';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';

interface BenefitsProps {
  items: BenefitItem[];
  columns?: 1 | 2 | 3;
}

export function Benefits({ items, columns = 3 }: BenefitsProps) {
  const { locale } = useLocale();
  const gridCols = columns === 3 ? 'sm:grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : '';

  return (
    <ul className={`grid grid-cols-1 gap-6 ${gridCols}`}>
      {items.map((item) => (
        <li key={item.title.es} className="border border-wm-gray-300 p-5">
          <span className="mb-3 flex h-9 w-9 items-center justify-center" aria-hidden="true">
            <BenefitIcon name={item.icon} />
          </span>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-wm-black">{t(item.title, locale)}</h3>
          <p className="mt-1.5 text-sm text-wm-gray-700">{t(item.description, locale)}</p>
        </li>
      ))}
    </ul>
  );
}
