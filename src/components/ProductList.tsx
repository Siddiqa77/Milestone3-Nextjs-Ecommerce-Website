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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4  wrapper">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow-lg w-[350px] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ..."
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
          <h3 className="text-xl font-bold mb-2 family">{product.title}</h3>
          <p className="text-gray-700 mb-2 line-clamp-2 poppins">
            {product.description}
          </p>
          <span className="text-lg font-bold poppins">${product.price}</span>

          <div className="mt-4 flex justify-between items-center">
            {/* View Details Button */}
            <Link href={`/product/${product.id}`}>
              <button className="px-4 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-amber-700 md:ml-20 poppins transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
