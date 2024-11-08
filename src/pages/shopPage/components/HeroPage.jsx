import React from "react";
import MoreToList1 from "../../../assets/img/MoreToList1.jpg"
import MoreToList2 from "../../../assets/img/MoreToList2.jpg"
import ShopHero1 from "../../../assets/img/ShopHero1.png"
import { PiArrowArcLeftFill } from "react-icons/pi";
import { PiArrowArcRightFill } from "react-icons/pi";


const HeroPage = () => {
  return (
    <div className="p-16 bg-gradient-to-r from-white to-[#FBF5DF]">

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Profile and Social Media */}
        <div className="flex-1 space-y-10">
          <div className=" flex flex-col gap-y-4">
            <h2 className="text-5xl font-bold">Africa Fashion <br /> At It's Best</h2>
            <p className="text-gray-600 leading-relaxed w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              ratione soluta earum in numquam autem, inventore tempora fuga
              quas illum.
            </p>
            <button className="border bg-[#FF9900] text-white w-24 h-9 rounded-lg">Shop Now</button>
          </div>

          {/* Available Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">More to the list</h3>
            <div className="flex gap-4 mt-3 ml-20">
            <div className=" flex justify-center items-center">
            <button className="border-2 border-black  h-6 w-6 rounded-full">
            <PiArrowArcLeftFill />
            </button>
            </div>
              <img className="w-36 h-36 rounded-lg shadow-md" src={MoreToList1} alt="Product 1" />
              <img className="w-36 h-36 rounded-lg shadow-md" src={MoreToList2} alt="Product 2" />
              <div  className=" flex justify-center items-center">
                <button className="border-2 border-black  h-6 w-6 rounded-full">
                <PiArrowArcRightFill />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Feedback and Ratings */}
        <div className="flex-1 relative">

          {/* Vendor Image */}
          <img src={ShopHero1} alt="" className="w-full" />
          
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
