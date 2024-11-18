import React from 'react'
import Print from "../../../assets/img/Print.png"
import NavPic from "../../../assets/img/NavPic.jpg"

const Feedback = () => {
  return (
    <div className='p-20'>
        <div className='py-10'>
            <p className='font-bold flex justify-center text-xl mt-4'>Feedback from satified customers</p>
            <img src={Print} alt="" className='opacity-25 absolute -mt-20 -ml-20'/>
        </div>
        <div className=" relative">
            <div className="flex flex-wrap gap-4">
              {[1, 2,3,4,5].map((_, index) => (
                <div key={index} className="bg-[#FBF5DF] p-4 rounded-xl shadow-lg w-full md:w-[220px]">
                  <h3 className="font-bold text-center">Feedback</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Quality and affordable
                  </p>
                  <div className="flex items-center mt-3 gap-3">
                    <img
                      src={NavPic}
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-gray-700">Customer</p>
                      <p className="font-semibold">Joana Doe</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
    
  )
}

export default Feedback