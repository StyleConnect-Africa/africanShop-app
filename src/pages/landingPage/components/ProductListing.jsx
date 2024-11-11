import React from "react";
import Slider from "react-slick";
import ProductListingPic from "../../../assets/img/ProductListingPic.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductListing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <p className="text-4xl font-bold font-sans">Product Listing And Browsing</p>
        <p className="font-serif">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Perspiciatis, temporibus impedit! Iste nulla quam quisquam?
        </p>
      </div>
      <div className="mb-12">
        <Slider {...settings}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#F2FBFC] rounded-2xl shadow-xl">
                <div className="mb-3">
                  <img
                    src={ProductListingPic}
                    alt=""
                    className="rounded-2xl h-48 w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <MdFavoriteBorder className="text-2xl text-[#FF9900]" />
                    <FaCartPlus className="text-2xl text-[#FF9900]" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-normal text-xl">Ama Quophie</p>
                    <span className="text-xl">$60.00</span>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-center mt-8">
        <button className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-accent2">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductListing;
