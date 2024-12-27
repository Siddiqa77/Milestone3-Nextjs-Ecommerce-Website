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
  const { id } = useParams(); // Fetching product ID from the route
  const [product, setProduct] = useState<Product | null>(null);

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
    // <div classNameNameName="p-3 max-w-4xl mx-auto">
    //   <Image
    //     src={product.thumbnail}
    //     alt={product.name}
    //     width={200}
    //     height={400}
    //     classNameNameName="w-full h-[700px] object-cover rounded-lg mb-4"
    //   />
    //   <h1 classNameNameName="text-3xl font-bold mb-2">{product.name}</h1>
    //   <p classNameNameName="text-lg text-gray-700 mb-4">{product.description}</p>
    //   <span classNameNameName="text-2xl font-bold text-green-600">${product.price}</span>
    // </div>

    <div className="font-[sans-serif] p-4">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-row gap-2">
              <div className="flex-1">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="w-full h-[700px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-32 tracking-wider leading-10">
            <div>
              <h1 className="text-lg sm:text-[30px] font-bold text-gray-800">
                {product.title}
              </h1>
              <p className="text-gray-500 mt-1 text-sm">{product.name}</p>
             
              <p className="text-lg text-gray-700 mb-4">
                {product.description}
              </p>
              <div className="flex items-center flex-wrap gap-4 mt-4">
                <h4 className="text-gray-800 text-2xl sm:text-3xl font-bold">
                  ${product.price}
                </h4>
                <p className="text-gray-500 text-lg">
                  
                  <span className="text-sm ml-1.5">Tax included</span>
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1 text-lg px-2.5 bg-green-600 text-white rounded-full">
                  <p>4</p>
                  <svg
                    className="w-[13px] h-[13px] fill-white"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 mt-2">
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                </div>

            <div>
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold  "
                >
                 <Link href="/"> Back to Home</Link>
                </button>
                <button
                  type="button"
                  className="px-4 py-3 w-[45%] borderinline-flex  md:px-10  md:py-4 bg-[#B88E2F] poppins text-[#fff] text-[16px] font-medium rounded-sm hover:bg-amber-700  hover:font-bold "
                >
                 <Link href="/cart">Add To Cart</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductDetails;