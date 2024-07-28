import axios from 'axios';
import { generateTempPassword } from './generateTempPassword';
import { Product, User } from '../types';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://dummyjson.com/products?limit=0');
  return response.data.products;
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await axios.get(
    'https://dummyjson.com/products/category-list'
  );
  return response.data;
};

export const fetchCategoryProducts = async (category: string) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  return response.data.products;
};

export const fetchProductById = async (id: number) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};

export const fetchProduct = async (id: number) => {
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
};

// register.tsx
const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkEmailExists = async (email: string): Promise<User[]> => {
  const response = await apiClient.get(`/users?email=${email}`);
  return response.data;
};

export const checkUsernameExists = async (username: string) => {
  const response = await apiClient.get(`/users?username=${username}`);
  return response.data.length > 0;
};

export const registerUser = async ({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}) => {
  const response = await apiClient.post('/users', {
    email,
    username,
    password,
  });
  return response.data;
};

// find-password.tsx
export const updatePassword = async (user: User): Promise<User> => {
  const tempPassword = generateTempPassword();
  sendEmail(user.email, tempPassword);
  const response = await apiClient.patch(`/users/${user.id}`, {
    password: tempPassword,
  });
  return response.data;
};

const sendEmail = async (email: string, tempPassword: string) => {
  await axios.post('/api/sendEmail', { email, tempPassword });
};
