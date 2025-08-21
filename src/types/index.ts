export interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  vendor: string;
  category: string;
  location: string;
  zipCode: string;
  rating: number;
  reviewCount: number;
  purchaseCount: number;
  expiryDate: string;
  terms: string[];
  featured: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'vendor' | 'admin';
  zipCode?: string;
  favorites: string[];
  purchases: Purchase[];
}

export interface Purchase {
  id: string;
  dealId: string;
  purchaseDate: string;
  quantity: number;
  totalAmount: number;
  status: 'active' | 'used' | 'expired';
  code: string;
}

export interface Review {
  id: string;
  dealId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  distance: number;
  rating: number;
}