"use client"

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  fetchCart: () => Promise<void>;
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const fetchCart = async () => {
    const response = await fetch("/api/cart");
    const data = await response.json();
    setCart(data);
  };

  const addToCart = async (item: CartItem) => {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    setCart(data.cart);
  };

  const removeFromCart = async (id: string) => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    setCart(data.cart);
  };

  return (
    <CartContext.Provider value={{ cart, fetchCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
