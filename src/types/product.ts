export type ProductCategory = 'Fashion' | 'Handcraft' | 'Furniture';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  images: string[];
  price: number;
  shopeeLink?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  featured?: boolean;
}

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
} 