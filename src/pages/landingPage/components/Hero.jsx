import React from "react";
import HeroPic from "../../../assets/img/HeroPic.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF80] to-[#fff5f5] p-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative">
          <img
            src={HeroPic}
            alt="Hero"
            className="w-[400px] lg:w-[500px] "
          />
          <div className="absolute top-2 left-2 w-[100px] h-[100px] bg-yellow-500/30 rounded-full blur-3xl"></div>
        </div>

        {/* Text Content Section */}
        <div className="text-center lg:text-left lg:py-16">
          <h1 className="text-5xl lg:text-6xl font-bold leading-snug">
            Discover <br />
            Authentic <br />
            African Fashion
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur. Venenatis vitae sapien
            suspendisse est egestas.
          </p>
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <button className="bg-[#FF9900] text-white px-6 py-3 rounded-full shadow hover:bg-[#e68900]">
              Shop Now
            </button>
            <button className="border border-[#FF9900] text-[#FF9900] px-6 py-3 rounded-full shadow hover:bg-[#FF9900] hover:text-white">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
