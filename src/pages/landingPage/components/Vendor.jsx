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
    <div className="p-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold">Vendor</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Neque
          earum rerum ad quos.
        </p>
      </div>

      <div className="flex w-full gap-10 mt-8">
        {/* Left side - Profile and other content */}
        <div className="flex flex-col w-1/2 gap-8">
          <div>
            <div className="flex flex-col gap-7">
              <p className="text-2xl font-bold">Profile & Brief</p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ratione soluta earum in numquam autem, inventore tempora fuga
                quas illum.
              </p>
            </div>
            <div>
              <p className="text-[#B28400] mt-4">Social Media Handles</p>
              <Link className="flex mt-3 gap-2">
                <img className="h-8 self-center" src={Twitter} alt="Twitter" />
                <img
                  className="h-8 self-center"
                  src={Facebook}
                  alt="Facebook"
                />
                <img
                  className="h-8 self-center"
                  src={Instagram}
                  alt="Instagram"
                />
                <img className="h-8 self-center" src={Tiktok} alt="Tiktok" />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[#B28400]">Available Products</p>
            <div className="flex mt-3 gap-4">
              <img
                className="size-40 rounded-t-full"
                src={AvailableProduct1}
                alt="Product 1"
              />
              <img
                className="size-40 rounded-t-full"
                src={AvailableProduct2}
                alt="Product 2"
              />
              <img
                className="size-40 rounded-t-full"
                src={AvailableProduct3}
                alt="Product 3"
              />
            </div>
          </div>
        </div>

        {/* Right side - Feedback beside RatingPic */}
        <div className="flex items-start gap-4">
          {/* Feedback Section to the left of RatingPic */}

          {/* RatingPic Section */}
          <div className="flex-shrink-0">
            <div className="flex">
              <div className="bg-[#FBF5DF] p-4 h-[150px] rounded-2xl shadow-md w-[200px] mt-12 ml-16">
                <p className="text-center font-bold">Feedback</p>
                <p className="mt-2">Quality and affordable</p>
                <div className="flex mt-1 justify-center gap-2">
                  <img
                    src={NavPic}
                    alt="Customer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p>Customer</p>
                    <p>Joana Doe</p>
                  </div>
                </div>
              </div>
              <img src={RatingPic} alt="Rating" className="size-[400px] w-1/2" />
              <div className="flex flex-col w-32 shadow-md items-center mt-40 mr-28 bg-[#FBFAF2] p-4 rounded-md h-20 ">
              <p className="font-bold">Star Rating</p>
              <div className="flex space-x-1 mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoIosStar key={index} className="text-[#FF7300] text-xl" />
                ))}
              </div>
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
