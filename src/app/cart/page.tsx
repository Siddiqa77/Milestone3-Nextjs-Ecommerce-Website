"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  quantity: number;
};

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart items from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products") || "[]");
    setCart(data);
  }, []);

  // Update quantity of an item
  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  // Remove a single item
  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("products");
  };

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-4 text-center min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4 family family">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 mb-4 poppins">
          Start shopping to fill it up!
        </p>
        <Link href="/">
          <button className="px-6 py-3 w-full poppins max-w-xs md:px-10 md:py-4 bg-[#B88E2F] text-white text-base font-medium rounded-md hover:bg-amber-700 hover:font-bold  poppins">
            Go to Shop
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center family">Your Cart</h1>
      <button
        onClick={clearCart}
        className="px-4 py-2 bg-red-600 text-white rounded-md mb-4 hover:bg-red-700 transition poppins"
      >
        Clear Cart
      </button>
      <ul className="space-y-6">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex flex-wrap items-center space-y-4 md:space-y-0 md:space-x-6 border-b py-6"
          >
            {/* Product Thumbnail */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/80";
              }}
            />
            {/* Product Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)} each</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="text-gray-700 font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>
            {/* Total Price for Item */}
            <p className="text-right text-gray-900 font-semibold w-full md:w-auto">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {/* Remove Button */}
            <button
              onClick={() => removeItem(item.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {/* Total Cart Price */}
      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/confirm-payment">
          <button className="px-6 py-3 w-full poppins max-w-xs md:px-10 md:py-4 bg-[#B88E2F] text-white text-base font-medium rounded-md hover:bg-amber-700 hover:font-bold poppins transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            Confirm Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
