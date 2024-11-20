import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gray-50 px-20">
      <div className="w-full max-w-4xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Track Your Order</h1>
        <div className="mb-8">
          
          <div className="flex justify-between w-full text-sm mt-2">
            <span>Processing</span>
            <span>Shipped</span>
            <span>In Transit</span>
            <span>Delivered</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-lg mt-5">
            <div
              className="top-48 left-10 h-2 rounded-lg grow bg-[#B28400]"
              style={{ width: "20%", }} 
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Order Number</label>
              <div className="bg-gray-100 rounded-md h-10"></div>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Order Date</label>
              <div className="bg-gray-100 rounded-md h-10"></div>
            </div>
          </div>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tracking Updates</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Shipped on</label>
              <div className="bg-gray-100 rounded-md h-10"></div>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">In transit on</label>
              <div className="bg-gray-100 rounded-md h-10"></div>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Out for delivery</label>
              <div className="bg-gray-100 rounded-md h-10"></div>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Estimated Delivery Date</label>
              <div className="bg-gray-100 rounded-md h-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-6 gap-[700px] mb-6">
        <Link to="/" className="flex justify-center items-center bg-[#FF9900] text-white w-14 h-8 rounded-lg hover:bg-accent2 hover:text-white">Home</Link>
    <Link to="/orderconfirmation" className="flex justify-center items-center border border-[#FF9900] text-[#FF9900] w-20 h-8 rounded-lg hover:bg-accent2 hover:text-white hover:border-none">Back</Link>
    </div>
    </div>
  );
};

export default Hero;
