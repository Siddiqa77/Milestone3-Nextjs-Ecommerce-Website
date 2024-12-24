import Bottombanner from '@/components/Bottombanner'
import Hero from '@/components/Hero'
import React from 'react'
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
     <Hero/>
     {/* <Bottombanner/> */}
     <ProductList/>
    </div>
  )
}

export default Home