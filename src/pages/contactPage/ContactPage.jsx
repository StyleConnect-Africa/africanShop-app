import React from 'react'
import Navbar from '../landingPage/components/Navbar'
import HeroPage from './components/HeroPage'
import ContactForm from './components/ContactForm'
import LiveChat from './components/LiveChat'
import Footer from '../landingPage/components/Footer'

const ContactPage = () => {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <ContactForm />
        <LiveChat />
        <Footer />
    </div>
  )
}

export default ContactPage