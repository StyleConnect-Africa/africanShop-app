import React from 'react'
import Vendor2Pic1 from "../../../assets/img/Vendor2Pic1.png"
import Vendor2Pic2 from "../../../assets/img/Vendor2Pic2.png"
import Vendor2Pic3 from "../../../assets/img/Vendor2Pic3.png"

const Hero = () => {
  return (
    <div className='px-20'>
        <div className='flex flex-col items-center  gap-y-3'>
            <p className='text-2xl font-bold'>PRODUCT OF Ms. DOE</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quasi ipsum facilis voluptatibus.</p>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-5 ">
              {[Vendor2Pic1, Vendor2Pic2,Vendor2Pic3, Vendor2Pic3, Vendor2Pic1, Vendor2Pic2,Vendor2Pic3,Vendor2Pic3,Vendor2Pic1,Vendor2Pic2,Vendor2Pic3, Vendor2Pic3,Vendor2Pic1,Vendor2Pic2,Vendor2Pic3,Vendor2Pic3,Vendor2Pic1,Vendor2Pic2,Vendor2Pic3,Vendor2Pic3] .map((product, index) => (
                <img
                  key={index}
                  className="w-44 h-44 rounded-lg shadow-md"
                  src={product}
                  alt={`Product ${index + 1}`}
                />
              ))}
            </div>
    </div>
  )
}

export default Hero