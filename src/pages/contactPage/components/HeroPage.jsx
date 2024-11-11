import React from 'react';
import ContactPic from "../../../assets/img/ContactPic.png";

const HeroPage = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-gradient-to-r from-orange-100 to-green-100 p-4'>
      <div className='flex justify-center lg:justify-start'>
        <img src={ContactPic} alt="Contact" className='w-full max-w-md lg:max-w-xl h-auto' />
      </div>
      <div className='mt-8 lg:mt-40 w-full lg:w-1/2 lg:relative lg:right-36 text-center lg:text-left'>
        <div className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
          <p className='mb-6'>Contact</p>
          <p>Information</p>
        </div>
        <p className='mt-4 text-sm sm:text-base'>
          Reach out to us for any inquiries or support. Our team is here to assist you with all your needs.
        </p>
      </div>
    </div>
  );
}

export default HeroPage;