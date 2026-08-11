import { useLocale } from './LocaleContext';
import { content as es } from '../data/content.es';
import { content as en } from '../data/content.en';

/** Widens literal string/array types from `as const` content to their base shape,
 *  so content.es.ts and content.en.ts (whose leaf literals differ) both satisfy it. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type AppContent = Widen<typeof es>;

/** Returns the site copy dictionary for the current locale. */
export function useContent(): AppContent {
  const { locale } = useLocale();
  return locale === 'en' ? en : es;
}
