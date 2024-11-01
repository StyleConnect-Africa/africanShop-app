import React from 'react'
import FeaturedPic1 from "../assets/img/FeaturedPic1.png"
import FeaturedPic2 from "../assets/img/FeaturedPic2.png"

const FeaturedProducts = () => {
  return (
   <div className='px-16 py-28'>
     <div className='flex'>
        <div className='w-1/4 flex flex-col gap-10'>
            <h1 className='text-2xl font-bold'>Featured <br /> Products</h1>
            <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br /> Totam, facere!</p>
            <button className='bg-[#FF9900] text-white h-9 w-32 rounded-xl'>Explore Products</button>
        </div>
        <div className='w-1/4 bg-[#FBF5DF] rounded-xl shadow-lg'>
            <div>
            <img src={FeaturedPic1} alt="" className='mt-[-90px]'/>
            </div>
            <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Kente Accessories</p>
                <p>Price:$88</p>
            </div>
        </div>
        <div className='w-1/4 mt-[-40px]'>
           <div>
           <img src={FeaturedPic2} alt="" className='w-48 flex mx-auto' />
           </div>
           <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Simple Kente Dress</p>
                <p>Price:$88</p>
            </div>
        </div>
        <div className='w-1/4 mt-[-90px]'>
           <div>
           <img src={FeaturedPic1} alt=""  className='w-60 flex mx-auto'/>
           </div>
           <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Simple Kente Dress</p>
                <p>Price:$88</p>
            </div>
        </div>
    </div>
   </div>

  )
}

export default FeaturedProducts