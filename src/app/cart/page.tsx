"use client"
import { useCart } from "@/components/context/CartContext";
import { useEffect } from "react";


export const Cart = () => {
  const { cart, fetchCart, removeFromCart } = useCart();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <div className="fixed top-0 right-0 bg-white shadow-lg w-80 h-screen p-4">
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h4 className="font-bold">{item.name}</h4>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};
