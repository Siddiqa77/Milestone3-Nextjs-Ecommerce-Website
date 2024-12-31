


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 wrapper">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow-lg w-[350px] bg-white"
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={350}
            height={300}
            className="w-full h-64 object-cover rounded-lg mb-4"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/350x300";
            }}
          />
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700 mb-2 line-clamp-2">{product.description}</p>
          <span className="text-lg font-bold">${product.price}</span>
          <Link href={`/product/${product.id}`}>
            <button className="mt-4 px-4 py-2 inline-flex md:px-10 md:ml-5 md:py-4 bg-[#B88E2F] text-white text-[16px] font-medium rounded-sm hover:bg-amber-700 hover:font-bold">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
