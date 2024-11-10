import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import NavPic from "../../../assets/img/NavPic.jpg";

const Navbar = () => {
  return (
    <nav className="flex px-20 py-5 justify-between items-center h-16 ">
      <div className="flex">
        <p className="text-lg font-medium">
          Style <span className="text-[#B28400]">Connect </span>Africa
        </p>
      </div>
      <div className="flex gap-5 font-medium">
        <Link
          to={"/"}
          className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400]"
        >
          Home
        </Link>
        <Link
          to={"/shoppage"}
          className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400]"
        >
          Shop
        </Link>
        <Link
          to={"/vendorpage"}
          className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400]"
        >
          Vendor
        </Link>
        <Link
          to={"/invest"}
          className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400]"
        >
          Invest
        </Link>
        <Link
          to={"/contactpage"}
          className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400]"
        >
          Contact
        </Link>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <div className="flex  rounded shadow px-2 h-7">
          <CiSearch className=" self-center" />
          <input
            type="search"
            name=""
            id=""
            placeholder="search"
            className="outline-none border-none"
          />
        </div>
        <div className=" ">
          <img
            className="h-12 rounded-full w-12"
            src={NavPic}
            alt="User Profile"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
