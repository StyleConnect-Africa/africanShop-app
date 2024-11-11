import React from 'react';

const NewsLetter = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-16 py-10'>
      <div className='max-w-4xl mx-auto flex flex-col items-center justify-center p-6 border shadow-2xl bg-white'>
        <p className='text-2xl font-bold text-center'>Join Our Newsletter</p>
        <p className='mt-4 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vitae.
        </p>
        <div className='flex mt-4 border rounded-2xl w-full max-w-md h-12 justify-between bg-[#F5F5F5]'>
          <input
            type="email"
            placeholder='Email Address'
            className='flex-grow px-4 bg-[#F5F5F5] outline-none rounded-l-2xl'
          />
          <button className='bg-[#FF9900] w-20 rounded-r-2xl text-white'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;