import React from 'react';
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div className='bg-[#F4F4F2] flex flex-col sm:flex-row justify-between items-center h-auto sm:h-14 px-4 sm:px-20 py-2'>
      <div className='flex items-center w-full sm:w-auto mb-2 sm:mb-0'>
        <div className='flex items-center w-full sm:w-56 h-10 border bg-white rounded-lg shadow'>
          <CiSearch className='text-gray-500 ml-2' />
          <input
            placeholder='Search Products'
            className='w-full h-full px-2 outline-none'
          />
        </div>
      </div>
      <div className='flex gap-4 sm:gap-10'>
        <Link to="/wishlist" className='flex items-center justify-center h-10 w-10 sm:w-28 border bg-white rounded-lg shadow transition-transform transform hover:scale-105'>
          <AiOutlineHeart className='text-gray-500 sm:mr-2' />
          <span className='hidden sm:inline'>Wish List</span>
        </Link>
        <Link to="/cart" className='flex items-center justify-center h-10 w-10 sm:w-28 border bg-white rounded-lg shadow transition-transform transform hover:scale-105'>
          <AiOutlineShoppingCart className='text-gray-500 sm:mr-2' />
          <span className='hidden sm:inline'>My Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar2;