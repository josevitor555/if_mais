import React from "react"
import { CircleCheckIcon } from "lucide-react"
import type { Product } from "@/types/product"

interface AddedToCartNotificationProps {
  product?: Product;
  isVisible: boolean;
  onClose: () => void;
}

export default function AddedToCartNotification({ product, isVisible, onClose }: AddedToCartNotificationProps) {
  if (!isVisible || !product) return null;

  // Auto-close after 3 seconds
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className="rounded-lg px-6 py-4 bg-white max-w-md w-full mx-4">
        <p className="text-base flex items-center">
          <CircleCheckIcon
            className="me-4 -mt-0.5 inline-flex text-emerald-500"
            size={20}
            aria-hidden="true"
          />
          <span>
            <strong>{product.title}</strong> foi adicionado ao carrinho!
          </span>
        </p>
      </div>
    </div>
  )
}
