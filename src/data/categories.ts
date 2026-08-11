import type { CategoryDef } from '../types';

/**
 * Placeholder category taxonomy. WM has not yet supplied the real
 * product-line naming, so slugs/names stay neutral until replaced.
 */
export const categories: CategoryDef[] = [
  {
    slug: 'categoria-01',
    name: { es: 'Hogar', en: 'Home' },
    description: { pending: true, note: 'Descripción de la categoría pendiente.' },
  },
  {
    slug: 'categoria-02',
    name: { es: 'Categoría 02', en: 'Category 02' },
    description: { pending: true, note: 'Nombre y descripción reales de la línea pendientes.' },
  },
  {
    slug: 'categoria-03',
    name: { es: 'Categoría 03', en: 'Category 03' },
    description: { pending: true, note: 'Nombre y descripción reales de la línea pendientes.' },
  },
];
