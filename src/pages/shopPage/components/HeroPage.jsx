import React, { useState, useEffect } from "react";
import MoreToList1 from "../../../assets/img/MoreToList1.jpg";
import MoreToList2 from "../../../assets/img/MoreToList2.jpg";
import ShopHero1 from "../../../assets/img/ShopHero1.png";
import { PiArrowArcLeftFill, PiArrowArcRightFill } from "react-icons/pi";

const HeroPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 sm:p-16 bg-gradient-to-r from-white to-[#FBF5DF]">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-10">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold">Africa Fashion <br /> At Its Best</h2>
            <p className="text-gray-600 leading-relaxed w-full sm:w-[500px]">
              Discover the vibrant and diverse world of African fashion. Explore our curated collections that celebrate the rich heritage and creativity of Africa.
            </p>
            <button className="border bg-primary text-white w-32 h-10 rounded-lg transition-transform transform hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Available Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">More to the list</h3>
            <div className="flex gap-4 mt-3 ml-0 sm:ml-20">
              <div className="flex justify-center items-center">
                <button className="border-2 border-black h-8 w-8 rounded-full flex justify-center items-center transition-transform transform hover:scale-110">
                  <PiArrowArcLeftFill />
                </button>
              </div>
              {loading ? (
                <div className="w-36 h-36 bg-gray-200 animate-pulse rounded-lg"></div>
              ) : (
                <img className="w-36 h-36 rounded-lg shadow-md transition-opacity duration-500" src={MoreToList1} alt="Product 1" />
              )}
              {loading ? (
                <div className="w-36 h-36 bg-gray-200 animate-pulse rounded-lg"></div>
              ) : (
                <img className="w-36 h-36 rounded-lg shadow-md transition-opacity duration-500" src={MoreToList2} alt="Product 2" />
              )}
              <div className="flex justify-center items-center">
                <button className="border-2 border-black h-8 w-8 rounded-full flex justify-center items-center transition-transform transform hover:scale-110">
                  <PiArrowArcRightFill />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Feedback and Ratings */}
        <div className="flex-1 relative">
          {/* Vendor Image */}
          {loading ? (
            <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
          ) : (
            <img src={ShopHero1} alt="Shop Hero" className="w-full transition-opacity duration-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
