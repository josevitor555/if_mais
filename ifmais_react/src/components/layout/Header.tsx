import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={cn('bg-white sticky top-0 z-50', className)} role="banner">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900" role="heading" aria-level={1}>
                Cruz <span className="text-orange-600"> Food </span>
              </h1>
            </div>
          </div>

          {/* Cart button */}
          <nav className="flex items-center space-x-4" role="navigation" aria-label="Carrinho de compras">
            <Button
              variant="default"
              size="lg"
              onClick={toggleCart}
              className="relative w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600"
              aria-label={`Abrir carrinho com ${itemCount} ${itemCount === 1 ? 'item' : 'itens'}`}
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-orange-500 hover:bg-orange-600"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}