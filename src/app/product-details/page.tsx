"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";



type Product = {
  id: number;
  title: string;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
  quantity:number;
};

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;
  

  return (
    <div className="family p-4">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full">
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={300}
              height={400}
              className="w-full h-[700px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg sm:text-[30px] font-bold text-gray-800 family">
              {product.title}
            </h1>
            <p className="text-gray-500 mt-1 text-sm">{product.name}</p>
            <p className="text-lg text-gray-700 mb-4 poppins">{product.description}</p>
            <h4 className="text-gray-800 text-2xl sm:text-3xl font-bold">
              ${product.price}
            </h4>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                className="px-4 py-3 bg-gray-200 text-gray-800 rounded"
                type="button"
              >
                <Link href="/">Back to Home</Link>
              </button>
              <button
                className="px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
