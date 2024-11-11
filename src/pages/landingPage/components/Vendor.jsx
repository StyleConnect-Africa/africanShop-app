import React from "react";
import Twitter from "../../../assets/img/Twitter.png";
import Facebook from "../../../assets/img/Facebook.png";
import Instagram from "../../../assets/img/Instagram.jpg";
import Tiktok from "../../../assets/img/Tiktok.png";
import AvailableProduct1 from "../../../assets/img/AvailableProduct1.jpg";
import AvailableProduct2 from "../../../assets/img/AvailableProduct2.jpg";
import AvailableProduct3 from "../../../assets/img/AvailableProduct3.jpg";
import RatingPic from "../../../assets/img/RatingPic.png";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import NavPic from "../../../assets/img/NavPic.jpg";

const Vendor = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-16">
      {/* Header */}
      <div className="flex flex-col justify-center items-center text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Vendors</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br className="hidden sm:block" /> Neque
          earum rerum ad quos.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* Left Side: Profile and Social Media */}
        <div className="flex-1 space-y-6 sm:space-y-10 text-center lg:text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Profile & Brief</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              ratione soluta earum in numquam autem, inventore tempora fuga
              quas illum.
            </p>
          </div>

          {/* Social Media Handles */}
          <div>
            <h3 className="text-[#B28400] font-semibold">Social Media Handles</h3>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <Link to="#"><img className="h-8" src={Twitter} alt="Twitter" /></Link>
              <Link to="#"><img className="h-8" src={Facebook} alt="Facebook" /></Link>
              <Link to="#"><img className="h-8" src={Instagram} alt="Instagram" /></Link>
              <Link to="#"><img className="h-8" src={Tiktok} alt="Tiktok" /></Link>
            </div>
          </div>

          {/* Available Products */}
          <div>
            <h3 className="text-[#B28400] font-semibold">Available Products</h3>
            <div className="flex justify-center lg:justify-start gap-4 mt-3 overflow-x-auto">
              <img className="w-24 h-24 rounded-t-full" src={AvailableProduct1} alt="Product 1" />
              <img className="w-24 h-24 rounded-t-full" src={AvailableProduct2} alt="Product 2" />
              <img className="w-24 h-24 rounded-t-full" src={AvailableProduct3} alt="Product 3" />
            </div>
          </div>
        </div>

        {/* Right Side: Feedback and Ratings */}
        <div className="flex-1 relative mt-10 lg:mt-0 text-center lg:text-left">
          {/* Feedback Section */}
          <div className="absolute bg-[#FBF5DF] p-4 rounded-xl shadow-lg w-[220px] top-16 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-10">
            <h3 className="font-bold text-center">Feedback</h3>
            <p className="text-sm text-gray-600 mt-2">Quality and affordable</p>
            <div className="flex items-center justify-center lg:justify-start mt-3 gap-3">
              <img src={NavPic} alt="Customer" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-gray-700">Customer</p>
                <p className="font-semibold">Joana Doe</p>
              </div>
            </div>
          </div>

          {/* Vendor Image */}
          <img src={RatingPic} alt="Vendor" className="w-full lg:w-auto lg:max-w-md mx-auto" />

          {/* Star Ratings */}
          <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 lg:translate-x-0 lg:right-10 bg-[#FBFAF2] p-4 rounded-md shadow-md w-32 text-center">
            <h3 className="font-bold">Star Rating</h3>
            <div className="flex justify-center mt-2 space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoIosStar key={index} className="text-[#FF7300] text-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
