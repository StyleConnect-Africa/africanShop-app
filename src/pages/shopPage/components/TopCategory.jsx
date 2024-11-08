import React from "react";
import FeaturedPic1 from "../../../assets/img/FeaturedPic1.png";
const TopCategory = () => {
  return (
    <div className="px-20 h-full">
      <div className="h-36">
        <p className="text-2xl font-semibold">Top Categories</p>
      </div>
      <div className="flex gap-5">
        <div className="bg-[#F4F4F2] w-1/3 h-60  rounded-xl shadow">
          <p className="flex justify-center items-center pt-4 text-xl">Traditional Clothing</p>
          <div className="flex">
            <div className="pt-32 pl-10">
            <button className="border-[#FF9900] text-[#FF9900] border h-10 w-20 rounded-xl ">
              Explore
            </button>
            </div>
            <img src={FeaturedPic1} alt="" className="size-48 py-2 ml-20" />
          </div>
        </div>
        <div className="bg-[#F4F4F2] w-1/3 h-72 -mt-12 rounded-xl shadow">
          <p className="flex justify-center items-center pt-4 text-xl">Traditional Clothing</p>
          <div className="flex">
            <div className="pt-44 pl-10">
            <button className="border-[#FF9900] text-[#FF9900] border h-10 w-20 rounded-xl ">
              Explore
            </button>
            </div>
            <img src={FeaturedPic1} alt="" className="size-60 py-2 ml-20" />
          </div>
        </div>
        <div className="bg-[#F4F4F2] w-1/3 h-[340px] -mt-24  rounded-xl shadow">
          <p className="flex justify-center items-center pt-4 text-xl">Traditional Clothing</p>
          <div className="flex">
            <div className="pt-56 pl-10">
            <button className="border-[#FF9900] text-[#FF9900] border h-10 w-20 rounded-xl ">
              Explore
            </button>
            </div>
            <img src={FeaturedPic1} alt="" className="size-72 py-2 ml-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
