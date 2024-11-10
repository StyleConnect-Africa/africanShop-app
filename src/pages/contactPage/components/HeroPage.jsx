import React from 'react'
import ContactPic from "../../../assets/img/ContactPic.png"

const HeroPage = () => {
  return (
    <div className='flex bg-gradient-to-r from-orange-100 to-green-100'>
        <div>
            <img src={ContactPic} alt="" className='w-[1200px] h-[600] relative left-24'/>
        </div>
        <div className=' mt-40 w-1/2 relative right-36'>
            <div className='text-5xl font-bold '>
            <p className='mb-6'>Contact</p>
            <p> Information</p>
            </div>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Debitis, dolore velit! Omnis.</p>
        </div>
    </div>
  )
}

export default HeroPage