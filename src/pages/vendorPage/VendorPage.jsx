import React from 'react'
import Navbar from '../landingPage/components/Navbar'
import HeroPage from './components/HeroPage'
import Vendor1 from './components/Vendor1'
import Vendor2 from './components/Vendor2'
import ContactVendor from './components/ContactVendor'
import Footer from '../landingPage/components/Footer'

const VendorPage = () => {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <Vendor1 />
        <Vendor2 />
        <ContactVendor />
        <Footer />
    </div>
  )
}

export default VendorPage