import React from 'react';
import { FaWifi } from 'react-icons/fa6';
import LiveChat1 from '../../../assets/img/LiveChat1.png';
import Print from '../../../assets/img/Print.png';

const LiveChat = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center relative px-5">
      {/* Left Card */}
      <div className="bg-[#F2FBFC] shadow-lg rounded-lg p-8 w-full max-w-xs lg:max-w-sm h-auto text-center mt-5 relative">
        <div className="bg-white p-4 w-40 h-28 mx-auto mb-4">
          <FaWifi className="text-[#B28400] size-20 rotate-90 mx-auto" />
        </div>
        <h2 className="text-xl font-semibold mb-3">Chat with us live</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Venenatis vitae sapien
          suspendisse est egestas.
        </p>
        <button className="border border-primary text-primary py-2 px-6 mt-20 rounded-full hover:bg-primary hover:text-white transition">
          Let's Chat
        </button>
      </div>

      {/* Right Image */}
      <div className="ml-10">
        <img src={LiveChat1} alt="Live Chat" className="w-[500px]" />
      </div>

      {/* Background Decoration */}
      <img
        src={Print}
        alt="Background Pattern"
        className="absolute  -bottom-4 -right-24  lg:bottom-10 lg:left-10 size-52 opacity-30"
      />
    </div>
  );
};

export default LiveChat;
