"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
      
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 wrapper">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg w-[350px]">
          
          <Image 
            src={product.image} 
            alt={product.name} 
            width={350} 
            height={300}
            className="w-full h-64 object-cover rounded-lg mb-4"
            onError={(e) => { 
              e.currentTarget.src = 'https://via.placeholder.com/150'; 
            }}
          />
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <span className="text-lg font-bold">${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;