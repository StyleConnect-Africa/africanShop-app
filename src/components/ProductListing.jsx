import React from 'react'
import ProductListingPic from "../assets/img/ProductListingPic.jpg"

const ProductListing = () => {
  return (
    <div>
       <div className='p-20'>
       <div className='flex flex-col items-center gap-5'>
            <p className='text-4xl font-bold'>Product Listing And Browsing</p>
            <p className='flex flex-col items-center justify-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Perspiciatis, temporibus impedit! Iste nulla quam quisquam?</p>
        </div>
        <div>
            <div>
                <img src={ProductListingPic} alt="" className='w-40' />
            </div>
            <div>
                <p><span></span></p>
                <p>Ama Quophie <span>$60.00</span></p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, dicta.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ProductListing