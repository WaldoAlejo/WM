import type { NavItem, Localized } from '../types';
import { useLocale } from '../i18n/LocaleContext';

const navLabels: Record<string, Localized<string>> = {
  '/': { es: 'Inicio', en: 'Home' },
  '/productos': { es: 'Productos', en: 'Products' },
  '/garantia': { es: 'Garantía', en: 'Warranty' },
  '/nosotros': { es: 'Nosotros', en: 'About' },
  '/contacto': { es: 'Contacto', en: 'Contact' },
};

const navPaths = ['/', '/productos', '/garantia', '/nosotros', '/contacto'];

/** Main navigation items, translated for the current locale. */
export function useMainNav(): NavItem[] {
  const { locale } = useLocale();
  return navPaths.map((path) => ({ path, label: navLabels[path][locale] }));
}
