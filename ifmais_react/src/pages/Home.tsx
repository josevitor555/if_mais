import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/product/ProductGrid';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { CartProvider } from '@/context/CartContext';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export function Home() {
  const [activeCategory, setActiveCategory] = useState('todos');

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content" className="py-8" role="main" aria-label="Produtos disponíveis">
          <ProductGrid
            products={products}
            activeCategory={activeCategory}
            categories={categories}
            onCategoryChange={setActiveCategory}
          />
        </main>

        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}