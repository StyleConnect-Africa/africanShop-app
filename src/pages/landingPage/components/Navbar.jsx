import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import NavPic from "../../../assets/img/NavPic.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 ">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <p className="text-lg font-medium font-serif">
          Style <span className="text-[#B28400]">Connect </span>Africa
        </p>
        <button
          className="text-2xl lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col lg:flex-row lg:ml-auto font-serif gap-5 font-medium">
          <Link
            to={"/"}
            className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0"
          >
            Home
          </Link>
          <Link
            to={"/shoppage"}
            className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0"
          >
            Shop
          </Link>
          <Link
            to={"/vendorpage"}
            className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0"
          >
            Vendor
          </Link>
          <Link
            to={"/contactpage"}
            className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center ml-4 gap-6 mt-4 lg:mt-0">
          <div className="flex rounded shadow px-2 h-7">
            <CiSearch className="self-center" />
            <input
              type="search"
              placeholder="search"
              className="outline-none border-none"
            />
          </div>
          <div>
            <img
              className="h-12 rounded-full w-12"
              src={NavPic}
              alt="User Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
