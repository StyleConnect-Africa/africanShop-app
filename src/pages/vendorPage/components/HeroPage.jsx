import React, { useState, useEffect } from "react";
import VendorHero1 from "../../../assets/img/VendorHero1.jpg";
import VendorHero2 from "../../../assets/img/VendorHero2.jpg";
import VendorHero3 from "../../../assets/img/VendorHero3.jpg";

const HeroPage = ({ loading }) => {
  return (
    <div className={`bg-gradient-to-tr from-amber-100 to-[#FFFFFF] flex flex-col md:flex-row p-6 md:p-10 gap-6 md:gap-14 mt-6 h-full ${loading ? 'animate-pulse' : ''}`}>
      <div className="flex justify-center md:justify-start mt-6 md:mt-10 gap-2">
        <img
          src={VendorHero1}
          alt="Vendor Hero 1"
          className={`w-32 md:w-52 h-40 md:h-[300px] rounded-lg ${loading ? 'bg-gray-300' : ''}`}
        />
        <img
          src={VendorHero2}
          alt="Vendor Hero 2"
          className={`w-32 md:w-52 h-52 md:h-[400px] -mt-6 md:-mt-12 rounded-lg ${loading ? 'bg-gray-300' : ''}`}
        />
        <img
          src={VendorHero3}
          alt="Vendor Hero 3"
          className={`w-32 md:w-52 h-40 md:h-[300px] rounded-lg ${loading ? 'bg-gray-300' : ''}`}
        />
      </div>
      <div className="flex flex-col ml-0 md:ml-6 gap-4 md:gap-6 mt-4 md:-mt-4 text-center md:text-left">
        <div className="mb-4 md:mb-6">
          <div className="text-3xl md:text-5xl font-bold font-serif h-auto md:h-48">
            <p className="mb-2 md:mb-5">Discover Our</p>
            <p className="mb-2 md:mb-5">Talented Designers</p>
            <p className="mb-2 md:mb-5">and Their Creations</p>
          </div>
          <div className="mt-4 md:mt-7 font-sans">
            <p>
              Explore the unique styles and innovative designs from our top designers. <br className="hidden md:block" /> Each piece is crafted with passion and precision.
            </p>
          </div>
        </div>
        <hr className="border-black w-32 md:w-48 mx-auto md:mx-0" />
        <div className="flex justify-center md:justify-start gap-5 mt-4 md:mt-5 font-sans">
          <li className="flex items-center gap-1">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            Wholesalers
          </li>
          <li className="flex items-center gap-1">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            Retailers
          </li>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
