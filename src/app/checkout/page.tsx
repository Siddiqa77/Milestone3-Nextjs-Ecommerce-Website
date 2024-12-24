"use client"

import Link from 'next/link';
import { useState } from 'react';

interface CheckoutItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function Checkout() {
  const [cart, setCart] = useState<CheckoutItem[]>([
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

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center border-b last:border-b-0 py-4"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-700">Price: ${item.price}</p>
              <p className="text-gray-700">Quantity: {item.quantity}</p>
            </div>
            <p className="text-right text-gray-900 font-semibold">
              ${item.price * item.quantity}
            </p>
          </div>
        ))}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-right">Total: ${total}</h2>
         <Link href="/confirm-payment"> <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full">
            Confirm Payment
          </button></Link>
        </div>
      </div>
    </div>
  );
}
