import React, { useState, useEffect } from 'react';
import TrendingPic from "../../../assets/img/TrendingPic.jpg";

const Trending = ({ loading }) => {
  return (
    <div className="p-6 md:p-20">
      <div className="mb-6">
        <p className="font-semibold text-2xl">Trending</p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`border-2 flex gap-x-5 w-full sm:w-1/2 md:w-1/3 rounded-lg p-4 transition-transform transform hover:scale-105 ${
              loading ? 'border-gray-300 animate-pulse' : 'border-black'
            }`}
          >
            <div className={`${loading ? 'bg-gray-300' : ''} w-16 h-16 object-cover border border-black rounded-full`}>
              {!loading && <img src={TrendingPic} alt="" className="w-full h-full rounded-full" />}
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className={`${loading ? 'bg-gray-300 h-4 w-24 rounded' : 'font-medium'}`}>
                {!loading && 'Accessories'}
              </p>
              <p className={`${loading ? 'bg-gray-300 h-4 w-16 rounded mt-2' : 'text-slate-500'}`}>
                {!loading && 'Beads'}
              </p>
              {!loading && (
                <button className="bg-[#FF9900] text-white border rounded-lg w-20 h-8 mt-4">Buy</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;