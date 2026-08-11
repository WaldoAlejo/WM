import type { ContactInfo } from '../types';

/** WM is the registered brand. Every product line (WM Global, Energy, Bags, Toys, ...) sits under it. */
export const brand = {
  name: 'WM',
  domain: 'https://www.wmglobalcorp.com',
};

/**
 * This site currently covers the WM Global line (not limited to home/kitchen —
 * spans whatever categories WM brings in). When another line (Energy, Bags,
 * Toys, ...) is ready, it gets its own config object like this one instead of
 * a rewrite — nothing else in the app should hardcode "WM Global" directly.
 */
export const productLine = {
  slug: 'global',
  name: 'WM Global',
};

/**
 * Real contact data confirmed by WM. Phone and socials remain pending
 * placeholders so the layout never displays fabricated info.
 *
 * `address` is intentionally not rendered anywhere in the UI (business
 * decision — avoid publishing the exact location). Kept here as real data
 * in case it's needed for non-public use (invoicing, internal reference).
 */
export const contactInfo: ContactInfo = {
  email: 'contact@wmglobalcorp.com',
  phone: { pending: true, note: 'Teléfono de contacto pendiente.' },
  address: 'Quito, Pichincha, Ecuador',
  hours: { es: 'Lunes a viernes, de 09:00 a 17:00 (GMT-5)', en: 'Monday to Friday, 9:00 AM to 5:00 PM (GMT-5)' },
  socials: [
    { label: 'Instagram', url: { pending: true }, icon: 'instagram' },
    { label: 'Facebook', url: { pending: true }, icon: 'facebook' },
  ],
};
