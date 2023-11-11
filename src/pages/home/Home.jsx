import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/MyContext';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/CartSlice';


function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart)

  const addcart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }

  
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

