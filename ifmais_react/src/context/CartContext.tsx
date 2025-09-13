import React, { createContext, useContext, useState } from 'react';
import type { CartContextType, CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart-items', []);
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState<{ isVisible: boolean; product?: Product }>(
    { isVisible: false, product: undefined }
  );

  // Calculate total whenever items change
  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  const addToCart = (product: Product) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Update quantity if item already exists
        return currentItems.map(item =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.product.price
              }
            : item
        );
      } else {
        // Add new item
        const newItem: CartItem = {
          id: `cart-${Date.now()}-${product.id}`,
          product,
          quantity: 1,
          subtotal: product.price
        };
        return [...currentItems, newItem];
      }
    });
    
    // Show notification when item is added
    setNotification({ isVisible: true, product });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId
          ? {
              ...item,
              quantity,
              subtotal: quantity * item.product.price
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsOpen(prev => !prev);
  };

  const hideNotification = () => {
    setNotification({ isVisible: false, product: undefined });
  };

  const value: CartContextType = {
    items: cartItems,
    total,
    isOpen,
    notification,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    hideNotification
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}