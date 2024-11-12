import React from "react";
import FeaturedPic1 from "../../../assets/img/FeaturedPic1.png";

const TopCategory = ({ loading }) => {
  return (
    <div className="px-4 md:px-20 py-8">
      <div className="mb-8">
        <p className="text-2xl font-semibold text-center">Top Categories</p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {["Traditional Clothing", "Modern Fashion", "Accessories"].map((category, index) => (
          <div key={index} className={`bg-[#F4F4F2] w-full sm:w-1/2 md:w-1/3 h-80 rounded-xl shadow-lg overflow-hidden relative ${loading ? 'animate-pulse' : ''}`}>
            <p className="text-xl font-medium text-center pt-4">{loading ? <span className="bg-gray-300 h-6 w-32 block mx-auto rounded"></span> : category}</p>
            <div className="flex justify-center items-center h-full">
              {loading ? (
                <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
              ) : (
                <img src={FeaturedPic1} alt={category} className="w-40 h-40 object-cover rounded-full shadow-md" />
              )}
              {!loading && (
                <button className="absolute bottom-4 left-4 bg-[#FF9900] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e68a00] transition">
                  Explore
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
