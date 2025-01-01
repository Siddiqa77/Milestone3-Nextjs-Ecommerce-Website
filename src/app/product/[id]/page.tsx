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
 

  // Add to Cart
  const [condition, setcondition] = useState(true);

  const addToCart1 = () => {
    if (condition) {
      let data = localStorage.getItem("products");
      if (!data) {
        localStorage.setItem("products", "[]");
        data = "[]";
      }
      const cartArray = JSON.parse(data);
      const ProductList: Product = product!;
      cartArray.push(ProductList);
      localStorage.setItem("products", JSON.stringify(cartArray));
    }
  };

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

 

  if (!product) return <div>Loading...</div>;

  return (
    <div className="family p-4">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-row gap-2">
              <div className="flex-1">
                <Image
                  src={product.thumbnail || "/placeholder-image.png"}
                  alt={product.name || "Product Image"}
                  width={300}
                  height={400}
                  className="w-full h-[700px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-32 tracking-wider leading-10">
            <div>
              <h1 className="text-lg sm:text-[30px] font-bold text-gray-800 family">
                {product.title}
              </h1>
              <p className="text-gray-500 mt-1 text-sm poppins">
                {product.name}
              </p>

              <p className="text-lg text-gray-700 mb-4 poppins">
                {product.description}
              </p>
              <div className="flex items-center flex-wrap gap-4 mt-4">
                <h4 className="text-gray-800 text-2xl sm:text-3xl font-bold">
                  ${product.price}
                </h4>
                <p className="text-gray-500 text-lg">
                  <span className="text-sm ml-1.5 poppins">Tax included ⭐⭐⭐⭐⭐</span>
                </p>
              </div>
            </div>

            <div>
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="px-4 py-3 w-[35%] border border-gray-300 text-[16px] font-medium bg-gray-100 hover:bg-gray-200 poppins text-gray-800  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
                >
                  <Link href="/cart">Cart</Link>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setcondition(false);
                    addToCart1();
                  }}
                  className="px-4 py-3 w-[35%] md:px-10 md:py-4 bg-[#B88E2F] text-white text-[16px] font-medium rounded-sm poppins hover:bg-amber-700 hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
                >
                  Add To Cart
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
