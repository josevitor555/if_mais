import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { CartItem } from './CartItem';
import AddedToCartNotification from '@/components/comp-271';

export function CartSidebar() {
    const { items, total, isOpen, toggleCart, clearCart, notification, hideNotification } = useCart();

    // Keyboard navigation for closing cart
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            toggleCart();
        }
    };

    const handleCheckout = () => {
        if (items.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        
        // Create WhatsApp message template
        const phoneNumber = 'phoneNumber'; // Example phone number
        let message = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
        
        // Add each cart item to the message
        items.forEach(item => {
            const itemPrice = item.product.price.toFixed(2);
            message += `R$ ${itemPrice} - ${item.product.title}`;
            if (item.quantity > 1) {
                message += ` x${item.quantity}`;
            }
            message += '\n';
        });
        
        // Add total
        message += `\nTotal: R$ ${total.toFixed(2)}`;
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
    };

    return (
        <>
            <AddedToCartNotification 
                product={notification.product}
                isVisible={notification.isVisible}
                onClose={hideNotification}
            />
            <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent 
                className="w-full sm:max-w-md p-2 [&>button]:hidden" 
                onKeyDown={handleKeyDown}
            >
                <SheetHeader className="space-y-2.5 mb-6 flex flex-row items-center justify-between">
                    <SheetTitle className="text-left text-lg">Seu Carrinho</SheetTitle>
                    <button
                        onClick={toggleCart}
                        className="h-10 w-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors text-white"
                        aria-label="Fechar carrinho"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                        <div className="text-center">
                            <p className="text-muted-foreground text-2xl mb-2">
                                Seu carrinho está vazio
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Adicione alguns produtos para começar
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col h-full">
                        
                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto py-4 max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-120">
                            <div className="space-y-0">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>

                        {/* Cart Footer */}
                        <div className="border-t border-border pt-6 space-y-8 px-2">
                            {/* Total */}
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium text-foreground">
                                    Total em R$
                                </span>
                                <span className="text-2xl font-bold text-orange-600">
                                    R$ {total.toFixed(2)}
                                </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 px-2">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-lg font-medium"
                                    aria-label="Finalizar pedido no WhatsApp"
                                >
                                    Finalizar Meu Pedido
                                </button>

                                {items.length > 0 && (
                                    <button
                                        onClick={clearCart}
                                        // variant="outline"
                                        className="w-full border border-gray-300 text-foreground rounded-full py-3"
                                        aria-label="Limpar todos os itens do carrinho"
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
        </>
    );
}