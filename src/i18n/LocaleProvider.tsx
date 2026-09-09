import { useEffect, useState, type ReactNode } from 'react';
import { LocaleContext, type Locale } from './LocaleContext';
import { detectInitialLocale, persistLocale } from './localeStorage';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    persistLocale(next);
  }

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}