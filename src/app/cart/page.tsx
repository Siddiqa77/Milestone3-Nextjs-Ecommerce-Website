"use client";

import { useCart } from "@/components/CartContext";


const CartPage = () => {
  const { cart } = useCart();

  console.log("Cart Items: ", cart); 

  if (cart.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="border-b py-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
