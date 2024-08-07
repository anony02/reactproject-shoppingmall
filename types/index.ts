export interface Product {
  id: number;
  thumbnail: string;
  title: string;
  discountPercentage: number;
  price: number;
  rating: number;
  stock: number;
}

export interface ProductsState {
  [key: string]: Product;
}

export interface CartState {
  [key: number]: number;
}

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}
