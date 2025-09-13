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
    <header className={cn('bg-white shadow-sm', className)}>
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Cruz <span className="text-orange-500">MYFOOD</span>
              </h1>
            </div>
          </div>

          {/* Cart button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              size="lg"
              onClick={toggleCart}
              className="relative rounded-full bg-orange-500 hover:bg-orange-600"
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
              <span className="sr-only">Seu Carrinho</span>
            </Button>
            
            <span className="text-lg text-gray-600 hidden sm:block">Seu Carrinho</span>
          </div>
        </div>
      </div>
    </header>
  );
}