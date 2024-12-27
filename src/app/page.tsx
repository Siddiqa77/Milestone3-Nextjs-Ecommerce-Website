import Bottombanner from '@/components/Bottombanner'
import Hero from '@/components/Hero'
import React from 'react'
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
     <Hero/>
    
     <ProductList/>
     <Bottombanner/>
    </div>
  )
}

export default Home