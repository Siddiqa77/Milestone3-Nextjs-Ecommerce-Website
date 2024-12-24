"use client"

import Link from 'next/link';
// app/cart/page.tsx
import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 2,
      imageUrl: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 1,
      imageUrl: "/images/product2.jpg",
    },
  ]);

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center border p-4 rounded-lg bg-white mb-4"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">Price: ${item.price}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
          <Link href="/checkout">  <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
              Checkout
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
}
