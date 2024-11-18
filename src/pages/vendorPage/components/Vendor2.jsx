import React from "react";
import Twitter from "../../../assets/img/Twitter.png";
import Facebook from "../../../assets/img/Facebook.png";
import Instagram from "../../../assets/img/Instagram.jpg";
import Tiktok from "../../../assets/img/Tiktok.png";
import Vendor2Pic1 from "../../../assets/img/Vendor2Pic1.png"
import Vendor2Pic2 from "../../../assets/img/Vendor2Pic2.png"
import Vendor2Pic3 from "../../../assets/img/Vendor2Pic3.png"
import Vendor2Pic4 from "../../../assets/img/Vendor2Pic4.png"
import Vendor2Pic5 from "../../../assets/img/Vendor2Pic5.png"
import Vendor2Pic6 from "../../../assets/img/Vendor2Pic6.png"
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import NavPic from "../../../assets/img/NavPic.jpg";
import Vendor2Pic from "../../../assets/img/Vendor2Pic.png";
import Print from "../../../assets/img/Print.png";

const Vendor2 = () => {
  return (
    <div className="p-6 md:p-10 h-full bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Feedback and Ratings */}
        <div className="flex-1 relative">
          {/* Vendor Image */}
          <div className="flex justify-center">
            <img
              src={Vendor2Pic}
              alt="Vendor"
              className="w-full md:w-auto h-auto md:h-[550px] rounded-lg shadow-md"
            />
            <img
              src={Print}
              alt=""
              className="w-20 h-20 md:w-60 md:h-60 absolute right-0 opacity-30"
            />
          </div>

          {/* Star Ratings */}
          <div className="absolute top-48 right-28 bg-[#FBFAF2] p-2 rounded-md shadow-md w-32 text-center">
            <h3 className="font-bold">Star Rating</h3>
            <div className="flex justify-center space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoIosStar key={index} className="text-[#FF7300] text-xl" />
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="pt-10">
            <div className="flex flex-wrap gap-4">
              {[1, 2].map((_, index) => (
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

        {/* Right Side: Profile and Social Media */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Profile & Brief</h2>
            <p className="text-gray-600 leading-relaxed mt-2">
              Our vendors are known for their exceptional quality and service. Each vendor offers a unique selection of products that cater to a wide range of preferences and needs.
            </p>
          </div>

          {/* Social Media Handles */}
          <div>
            <h3 className="text-[#B28400] font-semibold">Social Media Handles</h3>
            <div className="flex gap-4 mt-2 mb-6">
              <Link to="#" className="w-10 flex justify-center items-center">
                <img className="h-4" src={Twitter} alt="Twitter" />
              </Link>
              <Link to="#">
                <img className="h-8" src={Facebook} alt="Facebook" />
              </Link>
              <Link to="#">
                <img className="h-8" src={Instagram} alt="Instagram" />
              </Link>
              <Link to="#" className="w-10 flex justify-center items-center">
                <img className="h-5" src={Tiktok} alt="Tiktok" />
              </Link>
            </div>
          </div>

          {/* Available Products */}
          <div>
            <button className="text-white bg-[#FF9900] w-36 h-10 rounded-xl shadow-md hover:bg-[#e68a00] transition">
              View All Products
            </button>
            <div className="grid grid-cols-3 gap-4 mt-5">
              {[Vendor2Pic1,Vendor2Pic2, Vendor2Pic3, Vendor2Pic4,Vendor2Pic5,Vendor2Pic6].map((product, index) => (
                <img
                  key={index}
                  className="w-32 h-32 rounded-lg shadow-md"
                  src={product}
                  alt={`Product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="bg-[#FF9900] text-white w-20 h-10 rounded-xl shadow-md hover:bg-[#e68a00] transition">
          View all
        </button>
      </div>
    </div>
  );
};

export default Vendor2;
