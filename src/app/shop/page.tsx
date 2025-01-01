import ProductList from '@/components/ProductList'
import React from 'react'

const Shop = () => {
  return (
    <div>
       <div className="px-6 py-14 text-center">
      <h2 className="text-[#000] text-4xl font-bold family">Our Products</h2>
      <p className="poppins ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nam <br />
         ipsam voluptatibus harum hic praesentium ipsum cumque reprehenderit ullam eveniet..</p>
      </div>
      <ProductList/>

    </div>
  )
}

export default Shop