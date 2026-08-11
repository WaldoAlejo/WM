import type { Locale } from '../i18n/LocaleContext';
import type { Localized } from '../types';

/** Picks the string for the current locale out of a Localized<T> value. */
export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
