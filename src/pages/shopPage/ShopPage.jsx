import React from 'react'
import Navbar from '../landingPage/components/Navbar'
import Navbar2 from './components/Navbar2'
import HeroPage from './components/HeroPage'
import Trending from './components/Trending'
import TopCategory from './components/TopCategory'
import Products from './components/Products'
import Footer from '../landingPage/components/Footer'

const ShopPage = () => {
  return (
    <div>
        <Navbar />
        <Navbar2 />
        <HeroPage />
        <Trending />
        <TopCategory />
        <Products />
        <Footer />
    </div>
  )
}

export default ShopPage