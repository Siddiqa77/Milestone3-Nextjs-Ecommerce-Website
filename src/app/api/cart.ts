import { NextApiRequest, NextApiResponse } from "next";

let cart: { id: number; name: string; price: number; quantity: number }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(cart);
  } else if (req.method === "POST") {
    const { id, name, price } = req.body;

    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    res.status(200).json({ message: "Item added to cart", cart });
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    cart = cart.filter((item) => item.id !== id);
    res.status(200).json({ message: "Item removed from cart", cart });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
