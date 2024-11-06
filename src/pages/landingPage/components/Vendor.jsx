import React from "react";
import Twitter from "../../../assets/img/Twitter.png"
import Facebook from "../../../assets/img/Facebook.png"
import Instagram from "../../../assets/img/Instagram.jpg"
import Tiktok from "../../../assets/img/Tiktok.png"
import AvailableProduct1 from "../../../assets/img/AvailableProduct1.jpg"
import AvailableProduct2 from "../../../assets/img/AvailableProduct2.jpg"
import AvailableProduct3 from "../../../assets/img/AvailableProduct3.jpg"
import RatingPic from "../../../assets/img/RatingPic.png"
import { Link } from "react-router-dom";
const Vendor = () => {
  return (
    <div className="p-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold">Vendor</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Neque
          earum rerum ad quos.
        </p>
      </div>
      <div  className="w-1/2">
        <div>
          <div>
            <div className="flex flex-col gap-7">
            <p className="text-2xl font-bold">Profile & Brief</p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              ratione soluta earum in numquam autem, inventore tempora fuga quas
              illum.
            </p>
            </div>
            <div>
              <p
                className="text-[#B28400]"
              >
                Social Media Handles
              </p>
              <Link className="flex mt-3">
                <img className="size-8 self-center" src={Twitter} alt="" />
                <img className="size-12" src={Facebook} alt="" />
                <img className="size-12" src={Instagram} alt="" />
                <img className="size-8 self-center" src={Tiktok} alt="" />
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-[#B28400]">Available Products</p>
            <div className="flex mt-3">
              <img className="size-60 rounded-t-full" src={AvailableProduct1} alt="" />
              <img className="size-60 rounded-t-full" src={AvailableProduct2} alt="" />
              <img className="size-60 w-60 rounded-t-full" src={AvailableProduct3} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={RatingPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vendor;
