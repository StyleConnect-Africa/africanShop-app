import React from 'react'

const ContactVendor = () => {
  return (
    <div  className='w-[1300px] h-[150px] mx-5 p-20 mb-40'>
        <div className=' flex flex-col items-center justify-center p-4 border shadow-2xl'>
        <p className='text-2xl font-bold'>Contact a Vendor</p>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vitae.</p>
       <div className='flex mt-4 border rounded-2xl w-80 h-10 justify-between bg-[#F5F5F5]'>
       <input 
         type="email"
         placeholder='Email Address ' className='ml-8 bg-[#F5F5F5]'/>
         <button className='bg-[#FF9900] w-16 rounded-2xl'>Submit</button>
       </div>
    </div>
    </div>
  )
}

export default ContactVendor