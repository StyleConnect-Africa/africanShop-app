import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { User, LogOut, Edit, ShoppingCart, Heart, Trash2 } from 'lucide-react'; // Import necessary icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    // Redirect to sign-in page
    navigate('/login');
  };

  const handleSignOut = () => {
    // Logic to sign out the user
    setIsSignedIn(false);
  };

  const handleProfileClick = () => {
    // Redirect to profile page
    navigate('/profile');
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <p className="text-lg font-medium font-serif">
          Style <span className="text-[#B28400]">Connect </span>Africa
        </p>
        <button className="text-2xl lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
        <div className="flex flex-col lg:flex-row lg:ml-auto font-serif gap-5 font-medium">
          <Link to="/" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0">
            Home
          </Link>
          <Link to="/shoppage" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0">
            Shop
          </Link>
          <Link to="/vendorpage" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0">
            Vendor
          </Link>
          <Link to="/contactpage" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-[#B28400] py-2 lg:py-0">
            Contact
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center ml-4 gap-6 mt-4 lg:mt-0">
          {isSignedIn ? (
            <div className="relative">
              <button className="flex items-center space-x-2" onClick={handleProfileClick}>
                <User className="h-6 w-6" />
                <span>Profile</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleProfileClick}>
                    <User className="inline-block mr-2" /> View Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Edit className="inline-block mr-2" /> Edit Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <ShoppingCart className="inline-block mr-2" /> Cart
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Heart className="inline-block mr-2" /> Wishlist
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleSignOut}>
                    <LogOut className="inline-block mr-2" /> Logout
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Trash2 className="inline-block mr-2" /> Delete Account
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button className="flex items-center space-x-2" onClick={handleSignIn}>
              <User className="h-6 w-6" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
