import type { SpecItem } from '../types';
import { isPending } from '../types';
import { PendingNote } from './PendingNote';
import { useContent } from '../i18n/useContent';
import { useLocale } from '../i18n/LocaleContext';
import { t } from '../utils/t';

interface SpecificationsTableProps {
  specs: SpecItem[];
}

export function SpecificationsTable({ specs }: SpecificationsTableProps) {
  const content = useContent();
  const { locale } = useLocale();

  return (
    <table className="w-full border-collapse text-sm">
      <caption className="sr-only">{content.productDetail.specsHeading}</caption>
      <tbody>
        {specs.map((spec) => (
          <tr key={spec.label.es} className="border-b border-wm-gray-300 last:border-b-0">
            <th scope="row" className="w-1/3 py-3 pr-4 text-left font-medium text-wm-gray-700">
              {t(spec.label, locale)}
            </th>
            <td className="py-3 text-wm-black">{isPending(spec.value) ? <PendingNote /> : t(spec.value, locale)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
