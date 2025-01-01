"use client";
import ProductList from "@/components/ProductList";
import Bottombanner from "@/components/Bottombanner";

import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <Bottombanner />
    </div>
  );
};

export default Home;
