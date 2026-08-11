import { useLocale, type Locale } from '../i18n/LocaleContext';
import { useContent } from '../i18n/useContent';
import { cn } from '../utils/cn';

const LOCALES: Locale[] = ['es', 'en'];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const content = useContent();

  return (
    <div
      role="group"
      aria-label={content.languageSwitcher.label}
      className={cn('inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide', className)}
    >
      {LOCALES.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-wm-gray-300">/</span>}
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
            className={cn(
              'px-1 transition-colors',
              locale === code ? 'text-wm-black' : 'text-wm-gray-500 hover:text-wm-black',
            )}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
