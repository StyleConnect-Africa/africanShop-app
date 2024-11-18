import React from 'react';

const ContactVendor = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 ">
      <div className="flex flex-col items-center justify-center p-6 border shadow-2xl rounded-lg bg-white">
        <p className="text-2xl font-bold">Contact a Vendor</p>
        <p className="mt-4 text-center text-gray-600">
          Reach out to our vendors for any inquiries or collaborations. We are here to assist you.
        </p>
        <div className="flex mt-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
          />
          <button className="bg-[#FF9900] text-white px-4 py-2 rounded-r-lg hover:bg-[#e68a00] transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactVendor;