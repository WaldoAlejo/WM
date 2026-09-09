import type { Locale } from './LocaleContext';

const STORAGE_KEY = 'wm-locale';
type StorageAccess = () => Pick<Storage, 'getItem' | 'setItem'>;
const browserStorage: StorageAccess = () => window.localStorage;

export function detectInitialLocale(
  storageAccess: StorageAccess = browserStorage,
  browserLanguage = navigator.language,
): Locale {
  try {
    const stored = storageAccess().getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // Storage can be unavailable; the browser language still gives a usable default.
  }
  return browserLanguage.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function persistLocale(locale: Locale, storageAccess: StorageAccess = browserStorage): void {
  try {
    storageAccess().setItem(STORAGE_KEY, locale);
  } catch {
    // Language changes remain usable for this visit when persistence is blocked.
  }
}