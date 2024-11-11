import React from 'react';
import { FaMailBulk } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import Print from "../../../assets/img/Print.png";

const ContactForm = () => {
  return (
    <div className='px-4 sm:px-10 py-10 sm:py-20 relative'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-bold mb-4'>Get In Touch</p>
        <p className='text-center'>We'd love to hear from you. Whether you have a question or need assistance, we're here to help.</p>
      </div>
      <img src={Print} alt="" className='w-40 absolute right-4 sm:right-[60px] -bottom-36 opacity-5' />
      <div className='flex flex-col lg:flex-row gap-10 mt-10'>
        <div className='flex flex-col gap-6 w-full lg:w-[890px]'>
          <div className='flex flex-col gap-y-3'>
            <p className='font-bold font-sans text-lg lg:text-2xl text-center'>Send Message</p>
            <p className='font-serif'>Fill out the form below to send us a message. Our team will get back to you as soon as possible.</p>
          </div>
          <form className='flex flex-col gap-y-5 mt-3 font-serif'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input type="text" name='name' placeholder='Your Name' className='border border-black h-12 w-full sm:w-[400px] text-center' />
              <input type="email" name='email' placeholder='Your Email' className='border border-black h-12 w-full sm:w-[400px] text-center' />
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input type="text" name='phone' placeholder='Phone Number' className='border border-black h-12 w-full sm:w-[400px] text-center' />
              <input type="text" name='subject' placeholder='Subject' className='border border-black h-12 w-full sm:w-[400px] text-center' />
            </div>
            <textarea name="message" placeholder='Message' className='border border-black h-28 w-full p-4' />
          </form>
          <div className='mt-6'>
            <button className='bg-primary text-light w-1/3 sm:w-32 h-10 rounded-xl'>Send Message</button>
          </div>
        </div>
        <div className='flex flex-col gap-y-4 w-full lg:w-auto'>
          <ContactButton icon={<FaMailBulk />} title="Email Address" content="contact@styleconnectafrica.com" />
          <ContactButton icon={<BsTelephoneFill />} title="Phone Number" content="+ 33 20858 58902" />
          <ContactButton icon={<FaFax />} title="Fax Address" content="+ 33 20858 58902" />
          <ContactButton icon={<IoGlobeSharp />} title="Website" content="www.styleconnectafrica.com" />
        </div>
      </div>
    </div>
  );
}

const ContactButton = ({ icon, title, content }) => (
  <button className='flex items-center bg-[#FBF5DF] h-20 w-full sm:w-80 rounded-lg'>
    <div className='flex items-center justify-center gap-3 mx-auto'>
      <div className='text-[#B28400]'>{icon}</div>
      <div>
        <p className='font-bold'>{title}</p>
        <p className='text-slate-500'>{content}</p>
      </div>
    </div>
  </button>
);

export default ContactForm;