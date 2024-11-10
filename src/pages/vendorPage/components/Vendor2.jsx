import React from "react";
import Twitter from "../../../assets/img/Twitter.png";
import Facebook from "../../../assets/img/Facebook.png";
import Instagram from "../../../assets/img/Instagram.jpg";
import Tiktok from "../../../assets/img/Tiktok.png";
import AvailableProduct1 from "../../../assets/img/AvailableProduct1.jpg";
import AvailableProduct2 from "../../../assets/img/AvailableProduct2.jpg";
import AvailableProduct3 from "../../../assets/img/AvailableProduct3.jpg";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import NavPic from "../../../assets/img/NavPic.jpg";
import Vendor2Pic from "../../../assets/img/Vendor2Pic.png"
import Print from "../../../assets/img/Print.png"

const Vendor2 = () => {
  return (
    <div className="p-10 h-full bg-gray-100">
        
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Feedback and Ratings */}
        <div className="flex-1 relative pl-20">
          {/* Vendor Image */}
          <div className="flex">
          <img
            src={Vendor2Pic}
            alt="Vendor"
            className="size-[400px] h-[550px] -mt-10"
          />
          <div className="">
          <img src={Print} alt="" className="size-60 -mt-10 absolute right-[460px] opacity-30"/>
          </div>
          </div>

          {/* Star Ratings */}
          <div className="absolute bottom-[400px] right-48 bg-[#FBFAF2] p-2 rounded-md shadow-md w-32 text-center">
            <h3 className="font-bold">Star Rating</h3>
            <div className="flex justify-center  space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoIosStar key={index} className="text-[#FF7300] text-xl" />
              ))}
            </div>
          </div>
          <div className="pt-10">
            <div className="flex relative">
              <div className="absolute bg-[#FBF5DF] p-4 rounded-xl shadow-lg w-[220px] top-0 left-0">
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

              <div className="absolute bg-[#FBF5DF] p-4 rounded-xl shadow-lg w-[220px] top-0 left-[240px]">
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
            </div>
          </div>
        </div>
        {/* Right Side: Profile and Social Media */}
        <div className="flex-1 space-y-3 mt- ">
          <div>
            <h2 className="text-2xl font-bold">Profile & Brief</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Atque repellat id dolor autem a cupiditate, dolore <br /> quidem
              adipisci quibusdam, aliquam sunt corrupti rem <br /> vitae
              molestiae,repellendus dolorem saepe magni quia. <br /> Fugit id,
              cupiditate quasi quisquam voluptatibus placeat <br /> eum, natus
              eveniet corrupti veniam eius.
            </p>
          </div>

          {/* Social Media Handles */}
          <div>
            <h3 className="text-[#B28400] font-semibold">
              Social Media Handles
            </h3>
            <div className="flex gap- mt-1 mb-6">
              <Link to="#" className="w-10  flex justify-center items-center">
                <img className="h-4" src={Twitter} alt="Twitter" />
              </Link>
              <Link to="#">
                <img className="h-8" src={Facebook} alt="Facebook" />
              </Link>
              <Link to="#">
                <img className="h-8" src={Instagram} alt="Instagram" />
              </Link>
              <Link to="#" className="w-10  flex justify-center items-center">
                <img className="h-5" src={Tiktok} alt="Tiktok" />
              </Link>
            </div>
          </div>

          {/* Available Products */}
          <div>
            <button className="text-white bg-[#FF9900] w-36 h-8 rounded-xl">
              View All Products
            </button>
            <div className="flex gap-4 mt-5">
              <img
                className="size-40 rounded-t-2xl"
                src={AvailableProduct1}
                alt="Product 1"
              />
              <img
                className="size-40 rounded-t-2xl"
                src={AvailableProduct2}
                alt="Product 2"
              />
              <img
                className="size-40 rounded-t-2xl"
                src={AvailableProduct3}
                alt="Product 3"
              />
            </div>
            <div className="flex gap-4 mt-10">
              <img
                className="size-40 rounded-t-2xl"
                src={AvailableProduct1}
                alt="Product 1"
              />
              <img
                className="size-40 rounded-t-2xl"
                src={AvailableProduct2}
                alt="Product 2"
              />
              <img
                className="size-40 rounded-t-2xl"
                src={AvailableProduct3}
                alt="Product 3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-10">
      <button className="bg-[#FF9900] text-white w-20 h-8 rounded-xl">View all</button>
      </div>
    </div>
  );
};

export default Vendor2;
