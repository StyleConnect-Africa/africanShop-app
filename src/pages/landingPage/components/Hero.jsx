import React from "react";
import HeroPic from "../../../assets/img/HeroPic.png";

const Hero = () => {
  return (
    <div className="bg-[#FFFFF]  ">
      <div className="flex ">
      <div className="p-20">
        <img src={HeroPic} alt="" className="w-[400px] "/>
      </div>
      <div className="py-24  flex flex-col px-20">
        <div className=" flex flex-col gap-10">
          <h1 className="text-4xl font-bold">
            Discover <br />
            <br /> Authentic <br /> <br /> African Fashion
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Cum
            reprehenderit enim voluptate!
          </p>
          <div className="flex gap-5">
            <button className="bg-[#FF9900] text-white w-[100px] h-[30px] rounded-xl">
              Shop Now
            </button>
            <button className="text-[#FF9900] border border-[#FF9900] w-[70px] h-[30px] rounded-xl">
              Join Us
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
