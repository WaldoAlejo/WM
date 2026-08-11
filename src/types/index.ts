/**
 * Marks a content field whose real value has not been supplied yet.
 * Rendered with a visible "pending" treatment instead of being hidden,
 * so incomplete content is never mistaken for final copy.
 */
export type Pending<T> = T | { pending: true; note?: string };

/** A value provided in both site languages. Pick one with `t(value, locale)`. */
export interface Localized<T> {
  es: T;
  en: T;
}

export function isPending<T>(value: Pending<T>): value is { pending: true; note?: string } {
  return typeof value === 'object' && value !== null && 'pending' in value && (value as { pending: boolean }).pending === true;
}

export interface CategoryDef {
  slug: string;
  name: Localized<string>;
  description?: Pending<Localized<string>>;
}

export interface BenefitItem {
  title: Localized<string>;
  description: Localized<string>;
}

export interface SpecItem {
  label: Localized<string>;
  value: Pending<Localized<string>>;
}

export interface ProductImage {
  src: string;
  alt: Localized<string>;
}

export interface Product {
  id: string;
  slug: string;
  /** Placeholder name until real product naming is supplied, e.g. "Producto 01" */
  name: Localized<string>;
  model: Pending<string>;
  categorySlug: string;
  shortDescription: Pending<Localized<string>>;
  benefits: BenefitItem[];
  specifications: SpecItem[];
  safetyAndQuality: Pending<Localized<string>[]>;
  mainImage: Pending<ProductImage>;
  gallery: ProductImage[];
  featured: boolean;
  /** Link to a downloadable PDF manual, e.g. '/manuals/producto-01.pdf'. */
  manualUrl: Pending<string>;
  /** Link to a downloadable PDF spec sheet (datasheet), e.g. '/spec-sheets/producto-01.pdf'. Useful for B2B buyers evaluating the product for their own catalog. */
  specSheetUrl: Pending<string>;
  /** Overrides for the generated `<title>`/meta description when provided (see useSeo). */
  seoTitle?: Localized<string>;
  seoDescription?: Localized<string>;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  url: Pending<string>;
  icon: 'instagram' | 'facebook' | 'linkedin' | 'youtube';
}

export interface ContactInfo {
  email: Pending<string>;
  phone: Pending<string>;
  address: Pending<string>;
  hours: Pending<Localized<string>>;
  socials: SocialLink[];
}
