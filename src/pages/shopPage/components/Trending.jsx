import React from 'react'
import TrendingPic from "../../../assets/img/TrendingPic.jpg"
const Trending = () => {
  return (
    <div className='p-20'>
        <div className='mb-6'>
            <p className='font-semibold text-2xl'>Trending</p>
        </div>
        <div className='flex gap-5'>
        <div className='border-2 border-black flex gap-x-5 w-1/3 rounded-lg p-4 '>
            <div>
                <img src={TrendingPic} alt="" className='size-40 border border-black'/>
            </div>
            <div className='w-40 mt-5'>
                <p>Accessories</p>
                <p className='text-slate-500'>Beads</p>
                <button className='bg-[#FF9900] text-white border rounded-lg w-12 h-8 mt-14'>Buy</button>
            </div>
        </div>
        <div className='border-2 border-black flex gap-x-5 w-1/3 rounded-lg p-4 '>
            <div>
                <img src={TrendingPic} alt="" className='size-40 border border-black'/>
            </div>
            <div className='w-40 mt-5'>
                <p>Accessories</p>
                <p className='text-slate-500'>Beads</p>
                <button className='bg-[#FF9900] text-white border rounded-lg w-12 h-8 mt-14'>Buy</button>
            </div>
        </div>
        <div className='border-2 border-black flex gap-x-5 w-1/3 rounded-lg p-4 '>
            <div>
                <img src={TrendingPic} alt="" className='size-40 border border-black'/>
            </div>
            <div className='w-40 mt-5'>
                <p>Accessories</p>
                <p className='text-slate-500'>Beads</p>
                <button className='bg-[#FF9900] text-white border rounded-lg w-12 h-8 mt-14'>Buy</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Trending