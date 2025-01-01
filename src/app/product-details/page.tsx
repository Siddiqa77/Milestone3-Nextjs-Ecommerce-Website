"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          if (!res.ok) throw new Error("Failed to fetch product.");
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const addToCart = async (product: Product) => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: product.id,
          name: product.title,
          price: product.price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to the cart.");
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (!product)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading product details...</p>
      </div>
    );

  return (
    <div className="p-4 font-[sans-serif]">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full lg:sticky top-0">
            <Image
              src={product.thumbnail || "/placeholder-image.png"}
              alt={product.name || "Product Image"}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="w-full mt-4 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 family">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg mt-2 poppins">
              {product.description}
            </p>
            <div className="flex items-center mt-4">
              <h4 className="text-gray-800 text-2xl font-bold">
                ${product.price}
              </h4>
              <p className="text-gray-500 ml-4 text-sm">Tax included</p>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="px-4 py-2 bg-gray-100 border rounded-md hover:bg-gray-200 text-gray-800 poppins">
                <Link href="/">Back to Home</Link>
              </button>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 popp"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
