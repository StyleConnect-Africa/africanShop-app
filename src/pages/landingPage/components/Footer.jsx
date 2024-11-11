import { IonIcon } from "@ionic/react";
import { logoInstagram } from "ionicons/icons";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#FBF5DF] py-8">
      <div className="flex flex-col lg:flex-row w-full justify-around items-center lg:items-start px-4">
        <div className="flex flex-col gap-3 mb-6 lg:mb-0">
          <h6 className="font-semibold text-2xl mb-3 text-center lg:text-left">
            Style Connect Africa
          </h6>
          <div className="flex flex-col gap-3 w-full lg:w-96 text-center lg:text-left">
            <p>
              Connecting you to the finest African fashion and style. Explore our curated collections and join a community that celebrates African heritage and creativity.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-6 lg:mb-0">
          <h6 className="font-semibold text-2xl text-center lg:text-left">Nav</h6>
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <Link className="hover:underline">Shop</Link>
            <Link className="hover:underline">Invest</Link>
            <Link className="hover:underline">Vendor</Link>
            <Link className="hover:underline">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-6 lg:mb-0">
          <h6 className="font-semibold text-2xl text-center lg:text-left">Information</h6>
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <Link className="hover:underline">FAQs</Link>
            <Link className="hover:underline">Terms & Conditions</Link>
            <Link className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-6 lg:mb-0">
          <h6 className="font-semibold text-2xl text-center lg:text-left">Contact Us</h6>
          <div className="flex justify-center lg:justify-start gap-3">
            <Link to="https://www.twitter.com/">
              <FaXTwitter className="text-xl" />
            </Link>
            <Link to="https://www.instagram.com/">
              <IonIcon icon={logoInstagram} className="text-xl" />
            </Link>
            <Link to="https://www.telegram.com/">
              <TbBrandTelegram className="text-xl" />
            </Link>
          </div>
          <div className="text-center lg:text-left">
            <p>030 678 99000</p>
          </div>
        </div>
      </div>
      <hr className="my-10 border-black w-[89%] mx-auto" />
      <div className="text-center">
        <p>Copyright 2024. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
