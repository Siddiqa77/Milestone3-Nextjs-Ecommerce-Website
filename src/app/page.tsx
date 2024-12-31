
"use client";


import ProductList from "@/components/ProductList";
import Bottombanner from "@/components/Bottombanner";
import Hero from "@/components/Hero";

const Home = () => {
 
  return (
    <div>
     

      {/* Hero Section */}
      <Hero />

      {/* Product List */}
     
        <ProductList />
      

      {/* Bottom Banner */}
      <Bottombanner />

      {/* Cart Component */}
    
    </div>
  );
};

export default Home;
