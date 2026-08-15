import type { CategoryDef } from '../types';

/**
 * Live category taxonomy. Only categories with real assigned products are
 * listed here — WM asked to keep unused placeholder lines out of the site
 * until there's real inventory to put in them (see project notes).
 */
export const categories: CategoryDef[] = [
  {
    slug: 'categoria-01',
    name: { es: 'Hogar', en: 'Home' },
    description: { pending: true, note: 'Descripción de la categoría pendiente.' },
  },
  {
    slug: 'energia',
    name: { es: 'Energía', en: 'Energy' },
    description: { pending: true, note: 'Descripción de la categoría pendiente.' },
  },
];
