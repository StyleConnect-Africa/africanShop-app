import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div  className='bg-[#F4F4F2] flex justify-between h-14 items-center px-20'>
        <Link className='w-56 h-8 border bg-white rounded-lg shadow'>
            <button className='flex mx-auto'>
            <CiSearch className='size-5 self-center gap-4'/>
                <input placeholder='Search Products' />
            </button>
        </Link>
        <div className='flex gap-10'>
            <Link className='h-8 w-28 border bg-white rounded-lg shadow flex justify-center items-center'>
                <button>Wish List</button>
            </Link>
            <Link  className='h-8 w-28 border bg-white rounded-lg shadow flex justify-center items-center'>
                <button> My Cart</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar2