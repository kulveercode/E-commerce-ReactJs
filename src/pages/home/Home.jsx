import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/MyContext';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';


function Home() {
  
  return (
    <Layout>
     <HeroSection />
     <Filter />
     <ProductCard />
     <Testimonial />
    </Layout>
  )
}

export default Home;



