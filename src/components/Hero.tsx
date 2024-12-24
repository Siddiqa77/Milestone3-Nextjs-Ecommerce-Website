// components/HeroContent.tsx
import Image from "next/image";
import React from "react";


const Hero  = () => {
  return (
   <section>
     
     <div className="relative h-screen bg-gray-100">
      <div className="absolute inset-0">
        {/* Full-screen Background Image */}
        <Image
          src="/hero1.png"
          alt="Decorative Background"
          width={1500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
        <div className="bg-[#FFF3E3] p-8 rounded-xl shadow-lg max-w-lg mx-auto md:ml-auto md:mr-0 md:max-w-md lg:max-w-lg lg:ml-[600px]">
          <p className="text-[16px] font-semibold text-[#333] mb-2 poppins">
            New Arrival
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold text-[#B88E2F] mb-4 family">
            Discover Our New Collection
          </h1>
          <p className="text-[#333] mb-6 poppins text-[14px] md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-8 md:px-10 py-3 md:py-4 bg-[#B88E2F] poppins text-[#fff] text-sm font-medium rounded-sm hover:bg-amber-700  hover:font-bold">
            BUY NOW
          </button>
        </div>
        
      </div>
     
    </div>
    <div className="px-6 py-14 text-center">
      <h2 className="text-[#000] text-4xl font-bold family">Latest Products</h2>
      <p className="poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
   </section>
    
    
    
  );
};

export default Hero;
