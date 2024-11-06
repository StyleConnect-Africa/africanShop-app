import React from "react";
import ProductListingPic from "../../../assets/img/ProductListingPic.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const ProductListing = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center gap-5 ">
          <p className="text-4xl font-bold">Product Listing And Browsing</p>
          <p className="flex flex-col items-center justify-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Perspiciatis, temporibus impedit! Iste nulla quam quisquam?
          </p>
        </div>
        <div className="flex p-10 justify-around">
          <div className="bg-[#F2FBFC] w-[242px] rounded-2xl shadow-xl self-center">
            <div className=" mb-3">
              <img
                src={ProductListingPic}
                alt=""
                className=" rounded-2xl h-64 w-60"
              />
            </div>
            <div className="pl-2">
              <div className="">
                <p
                  className="flex gap-44 text-2xl text-[#FF9900]"
                >
                  <MdFavoriteBorder />
                  <span className="">
                    {" "}
                    <FaCartPlus />
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="font-normal text-xl flex gap-11">
                  Ama Quophie <span>$60.00</span>
                </p>
              </div>
              <div className="mb-2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F2FBFC] w-[242px] rounded-2xl shadow-xl self-center">
            <div className=" mb-3">
              <img
                src={ProductListingPic}
                alt=""
                className=" rounded-2xl h-64 w-60"
              />
            </div>
            <div className="pl-2">
              <div>
                <p
                  className="flex gap-44 text-2xl text-[#FF9900]"
                >
                  <MdFavoriteBorder />
                  <span className="">
                    {" "}
                    <FaCartPlus />
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="font-normal text-xl flex gap-11">
                  Ama Quophie <span>$60.00</span>
                </p>
              </div>
              <div className="mb-2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F2FBFC] w-[242px] rounded-2xl shadow-xl self-center">
            <div className=" mb-3">
              <img
                src={ProductListingPic}
                alt=""
                className=" rounded-2xl h-64 w-60"
              />
            </div>
            <div className="pl-2">
              <div>
                <p
                  className="flex gap-44 text-2xl text-[#FF9900]"
                >
                  <MdFavoriteBorder />
                  <span className="">
                    {" "}
                    <FaCartPlus />
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="font-normal text-xl flex gap-11">
                  Ama Quophie <span>$60.00</span>
                </p>
              </div>
              <div className="mb-2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F2FBFC] w-[242px] rounded-2xl shadow-xl self-center">
            <div className=" mb-3">
              <img
                src={ProductListingPic}
                alt=""
                className=" rounded-2xl h-64 w-60"
              />
            </div>
            <div className="pl-2">
              <div>
                <p
                  className="flex gap-44 text-2xl text-[#FF9900]"
                >
                  <MdFavoriteBorder />
                  <span className="">
                    {" "}
                    <FaCartPlus />
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="font-normal text-xl flex gap-11">
                  Ama Quophie <span>$60.00</span>
                </p>
              </div>
              <div className="mb-2">
                <p className="flex">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <button className="w-44 h-10 bg-[#FF9900] rounded-xl">View All to Shop Now</button>
      </div>
    </div>
  );
};

export default ProductListing;
