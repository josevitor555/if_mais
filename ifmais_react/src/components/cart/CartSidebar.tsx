import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { CartItem } from './CartItem';

export function CartSidebar() {
    const { items, total, isOpen, toggleCart, clearCart } = useCart();

    const handleCheckout = () => {
        if (items.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        alert('Funcionalidade de checkout em desenvolvimento!');
    };

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-full sm:max-w-md p-6 [&>button]:hidden">
                <SheetHeader className="space-y-2.5 mb-6 flex flex-row items-center justify-between">
                    <SheetTitle className="text-left text-lg">Seu Carrinho</SheetTitle>
                    <button
                        onClick={toggleCart}
                        className="h-10 w-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors text-white"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                        <div className="text-center">
                            <p className="text-muted-foreground text-lg mb-2">
                                Seu carrinho está vazio
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Adicione alguns produtos para começar
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col h-full">
                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto py-4 max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-130">
                            <div className="space-y-0">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>

                        {/* Cart Footer */}
                        <div className="border-t border-border pt-6 space-y-4">
                            {/* Total */}
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium text-foreground">
                                    Total em R$
                                </span>
                                <span className="text-2xl font-bold text-orange-500">
                                    R$ {total.toFixed(2)}
                                </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-lg font-medium"
                                >
                                    Finalizar Meu Pedido
                                </button>

                                {items.length > 0 && (
                                    <button
                                        onClick={clearCart}
                                        // variant="outline"
                                        className="w-full border text-foreground rounded-full py-3"
                                    >
                                        Limpar Carrinho
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}