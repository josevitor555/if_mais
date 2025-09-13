import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden bg-card border-border shadow-none pt-0">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <CardContent>
        <h3 className="font-semibold text-lg text-card-foreground mb-2">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-lg mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-card-foreground">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full py-6 rounded-full bg-background text-foreground hover:text-white hover:bg-orange-500 transition-colors duration-200"
          variant="outline"
        >
          <span className='text-lg'> Adicionar </span>
        </Button>
      </CardFooter>
    </Card>
  );
}