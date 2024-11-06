import { IonIcon } from "@ionic/react";
import { logoInstagram, logoBehance } from "ionicons/icons";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-24">
      <div className=" bg-[#FBF5DF] py-8">
        <div className="flex w-full justify-around  ">
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-2xl mb-3">
              Style Connect Africa
            </h6>
            <div className=" flex flex-col gap-3 w-96">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                laudantium perspiciatis quidem eius facere aspernatur recusandae
                assumenda fuga hic suscipit.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl ">Nav</h6>
            <div className="flex flex-col gap-4">
              <Link className="hover:underline">Shop</Link>
              <Link className="hover:underline">Invest</Link>
              <Link className="hover:underline">Vendor</Link>
              <Link className="hover:underline">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl ">Information</h6>
            <div className="flex flex-col gap-4">
              <Link className="hover:underline">FAQs</Link>
              <Link className="hover:underline">
                Tems & Conditions
              </Link>
              <Link className="hover:underline">
                Privicy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="font-semibold text-2xl">Contact Us</h6>
            <div className="flex gap-3 ">
              <Link to="https://www.twitter.com/">
                <FaXTwitter className="text-xl" />
              </Link>
              <Link to="https://www.instagram.com/">
                <IonIcon
                  icon={logoInstagram}
                  className="text-xl"
                />
              </Link>
              <Link to="https://www.telegram.com/">
                <TbBrandTelegram className="text-xl " />
              </Link>
            </div>
            <div>
              <p>030 678 99000</p>
            </div>
          </div>
        </div>
        <hr className="my-10 border-black w-[89%] mx-auto" />
        <div className=" ml-20">
          <p>Copyright 2024. All rights reserved</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
