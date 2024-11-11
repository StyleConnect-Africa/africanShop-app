import React from "react";
import HeroPic from "../../../assets/img/HeroPic.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF80] to-[#fff5f5] p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        {/* Image Section */}
        <div className="relative">
          <img src={HeroPic} alt="Hero" className="w-[300px] sm:w-[400px] lg:w-[500px]" />
          <div className="absolute top-2 left-2 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-yellow-500/30 rounded-full blur-3xl"></div>
        </div>

        {/* Text Content Section */}
        <div className="text-center lg:text-left lg:py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug">
            Discover <br />
            Authentic <br />
            African Fashion
          </h1>
          <p className="mt-4 sm:mt-6 text-accent2 text-base sm:text-lg font-light font-serif">
            Lorem ipsum dolor sit amet consectetur. Venenatis vitae sapien
            suspendisse est egestas.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-serif">
            <Link to="/shoppage" className="bg-primary text-white  w-full sm:w-auto px-4 py-2 rounded-full text-center shadow hover:bg-accent2 hover:text-light">
              Shop Now
            </Link>
            <Link to="/signup" className="border border-primary text-primary w-full sm:w-auto px-4 py-2 rounded-full shadow hover:bg-accent2 hover:border-none hover:text-white">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
