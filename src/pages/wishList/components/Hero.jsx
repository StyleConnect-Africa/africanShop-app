import React from 'react'
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='bg-gray-100'>
        <div>
            <p>WishList / Cart</p>
            <div className="flex rounded shadow px-2 h-7">
            <CiSearch className="self-center" />
            <input
              type="search"
              placeholder="search"
              className="outline-none border-none"
            />
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default Hero