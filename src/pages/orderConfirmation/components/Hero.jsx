import React from "react";
import CheckoutPic1 from "../../../assets/img/CheckoutPic1.png";
import CheckoutPic2 from "../../../assets/img/CheckoutPic2.png";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="px-20 p-6">
      <h1 className="text-2xl font-bold mb-6">Order Confirmation</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        
        <div>
          <h2 className="text-lg font-bold">Your Details</h2>
          <hr  className="border border-black mb-2 w-[105px]"/>
          <p>Jane Doe</p>
          <p>janedoe1234@gmail.com</p>
          <p>Ghana</p>
          <p>Accra</p>
          <p>+233 54 567 8551<span className="text-yellow-500 font-medium ml-24">Edit</span></p>
        </div>

    
        <div>
          <h2 className="text-lg font-bold">Shipping Details</h2>
          <hr  className="border border-black mb-2 w-36"/>
          <p>Jane Doe</p>
          <p>janedoe1234@gmail.com</p>
          <p>Ghana</p>
          <p>Accra</p>
          <p>+233 54 567 8551<span className="text-yellow-500 font-medium ml-24">Edit</span></p>
        </div>

        
        <div>
          <h2 className="text-lg font-bold">Payment Details</h2>
          <hr className="border border-black mb-2 w-36"/>
          <p>Jane Doe</p>
          <p>janedoe1234@gmail.com</p>
          <p>Ghana</p>
          <p>Accra</p>
          <p>+233 54 567 8551<span className="text-yellow-500 font-medium ml-24">Edit</span></p>
        </div>
      </div>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" w-[1200px]">
            <h2 className="text-lg font-bold mt-10">Order Summary</h2>
            <hr  className="border border-black mb-2 w-[140px]"/>
            <div className="flex gap-32 py-10">
            <div className="flex gap-4">
              <img src={CheckoutPic1} alt="" className="size-40" />
              <div className="self-center w">
                <p>
                  Product Name: <span className="font-medium">Shirt</span>
                </p>
                <p>
                  Quantity: <span className="font-medium">1</span>
                </p>
                <p>
                  Price: <span className="font-medium">$200.60</span>
                </p>
                <p>
                  Total: <span className="font-medium">$200.60</span>
                </p>
                <p>
                  Vendor: <span className="font-medium">Jane A</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={CheckoutPic2} alt="" className="size-40" />
              <div className="self-center">
                <p>
                  Product Name: <span className="font-medium">Crocheted two Piece</span>
                </p>
                <p>
                  Quantity: <span className="font-medium">1</span>
                </p>
                <p>
                  Price: <span className="font-medium">$200.60</span>
                </p>
                <p>
                  Total: <span className="font-medium">$200.60</span>
                </p>
                <p>
                  Vendor: <span className="font-medium">Michael B</span>
                </p>
              </div>
            </div>
          </div>
            </div>
        </div>
    <div className="flex gap-[420px]">
        <Link to="/" className="flex justify-center items-center bg-[#FF9900] text-white w-14 h-8 rounded-lg hover:bg-accent2 hover:text-white">Home</Link>
    <Link to="/trackorder" className="flex justify-center items-center border border-[#FF9900] text-[#FF9900] w-32 h-8 rounded-lg hover:bg-accent2 hover:text-white hover:border-none">Check Status</Link>
    </div>
    </div>
  );
};

export default OrderConfirmation;
