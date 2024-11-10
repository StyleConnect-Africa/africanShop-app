import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import Print from "../../../assets/img/Print.png"


const ContactForm = () => {
  return (
    <div className='px-10 h-full py-20'>
    <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl font-bold mb-4'>Get In Touch</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p> Tempora veniam et nobis sunt?</p>
    </div>
    <img src={Print} alt="" className='size-40 absolute right-[60px] -bottom-36 opacity-20'/>
    <div className='flex'>
        <div className='flex flex-col gap-2 w-[890px]'>
           <div className='flex flex-col gap-y-3'>
           <p className='font-bold text-xl'>Send Message</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio quam corrupti atque maiores quidem. Neque, sit!</p>
           </div>
           
           <form className='flex flex-col gap-y-5 mt-3'>
            <div className='flex gap-4'>
            <div>
            <input type="text" 
            name='name'
            placeholder='Your Name' className='border border-black h-12 w-[400px] text-center'/>
            </div>
            <div>
            <input type="email" 
            name='email'
            placeholder='Your Email' className='border border-black h-12 w-[400px] text-center'/>
            </div>
            </div>
            <div className='flex gap-4'>
            <div>
            <input type="text" 
            name='name'
            placeholder='Phone Number'  className='border border-black h-12 w-[400px] text-center'/>
            </div>
            <div>
            <input type="text" 
            name='email'
            placeholder='Subject'  className='border border-black h-12 w-[400px] text-center'/>
            </div>
            </div>
            <textarea name="text" id=""
            placeholder='message' className='border border-black h-28 w-[820px] p-4'/>
           </form>
           <div className='mt-6'>
            <button className='bg-[#FF9900] text-white w-32 h-7 rounded-xl'>Send Message</button>
           </div>
        </div>
        <div className='flex flex-col gap-y-4'>
            <button className='flex bg-[#FBF5DF] h-20 w-80 rounded-lg'>
            <div className=' flex ml-20 gap-3 self-center'>
            <FaMailBulk className='size-5 self-center text-[#B28400]'/>
            <div>
                <p className='font-bold'>Email Address</p>
                <p className='text-slate-500'>ouremail.com</p>
            </div>
            </div>
            </button>
            <button className='flex bg-[#FBF5DF] h-20 w-80 rounded-lg'>
            <div className=' flex ml-20 gap-3 self-center'>
            <BsTelephoneFill className='size-5 self-center text-[#B28400]'/>
            <div>
                <p className='font-bold'>Phone Number</p>
                <p className='text-slate-500'>+ 33 20858 58902</p>
            </div>
            </div>
            </button>
            <button className='flex bg-[#FBF5DF] h-20 w-80 rounded-lg'>
            <div className=' flex ml-20 gap-3 self-center'>
            <FaFax  className='size-5 self-center text-[#B28400]'/>
            <div>
                <p className='font-bold'>Fax Address</p>
                <p className='text-slate-500'>+ 33 20858 58902</p>
            </div>
            </div>
            </button>
            <button className='flex bg-[#FBF5DF] h-20 w-80 rounded-lg'>
            <div className=' flex ml-20 gap-3 self-center'>
            <IoGlobeSharp className='size-5 self-center text-[#B28400]'/>
            <div>
                <p className='font-bold mr-28'>Website</p>
                <p className='text-slate-500'>www.styleconnectafrica.com</p>
            </div>
            </div>
            </button>
        </div>
    </div>
    </div>
  )
}

export default ContactForm