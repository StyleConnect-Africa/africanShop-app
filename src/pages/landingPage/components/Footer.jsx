import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#FBF5DF]">
      <div className="flex">
        <div className="w-1/4">
          <p>Style Connect Africa</p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi iure
          numquam voluptas.
        </div>
        <div className="w-2/4">
          <p>Nav</p>
          <Link>Shop</Link>
          <Link>Vendor</Link>
          <Link>Contact</Link>
        </div>
        <div className="w-3/4">
          <p>Information</p>
          <Link>FAQs</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privicy Policy</Link>
        </div>
        <div>
          <p>Contact Us</p>
          <span></span>
          <p>03067899000</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
