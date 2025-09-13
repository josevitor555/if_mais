import { Product } from '@/types/product';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  subtotal: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  isOpen: boolean;
}

export interface CartContextType {
  // State
  items: CartItem[];
  total: number;
  isOpen: boolean;
  notification: {
    isVisible: boolean;
    product?: Product;
  };
  
  // Actions
  addToCart: (product: Product) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  hideNotification: () => void;
}