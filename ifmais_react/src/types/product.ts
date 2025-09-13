export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'doces' | 'salgados' | 'bebidas' | 'sobremesas';
}

export interface Category {
  id: string;
  name: string;
  label: string;
}