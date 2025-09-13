import { useMemo } from 'react';
import { Product, Category } from '@/types/product';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
  categories: Category[];
  onCategoryChange: (category: string) => void;
}

export function ProductGrid({ products, activeCategory, categories, onCategoryChange }: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Featured Products Section */}
      <div className="text-center">
        <h2 className="text-3xl font-light text-muted-foreground mb-4">
          {activeCategory === 'todos' ? 'Produtos em Destaque' : `Nossos produtos em Destaque`}
        </h2>
        <div className="w-16 h-1 rounded-full bg-orange-500 mx-auto mb-6"></div>
        
        {/* Category Filter - positioned to the right */}
        <div className="flex justify-end mb-8 mt-12">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}