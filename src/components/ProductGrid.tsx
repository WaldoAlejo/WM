import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { useContent } from '../i18n/useContent';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const content = useContent();

  if (products.length === 0) {
    return <p className="py-16 text-center text-sm text-wm-gray-500">{content.productsPage.noResults}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
