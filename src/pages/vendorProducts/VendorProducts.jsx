import React, { useEffect } from 'react';
import Navbar from '../landingPage/components/Navbar'
import Hero from './components/Hero'
import Feedback from './components/Feedback'
import Footer from '../landingPage/components/Footer'



const VendorProducts = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
  return (
    <div>
        <Navbar />
        <Hero />
        <Feedback />
        <Footer />
    </div>
  )
}

export default VendorProducts