import React from 'react';
import FeaturedPic1 from "../../../assets/img/FeaturedPic1.png";
import FeaturedPic2 from "../../../assets/img/FeaturedPic2.png";

const FeaturedProducts = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/4 flex flex-col gap-6 lg:gap-10">
          <h1 className="text-2xl font-bold font-sans text-center lg:text-left">
            Featured <br /> Products
          </h1>
          <p className="text-lg font-serif text-center lg:text-left">
            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.{" "}
            <br /> Totam, facere!
          </p>
          <button className="bg-primary text-accent2 font-normal hover:bg-accent2 hover:text-white w-full lg:w-1/2 p-2 lg:p-3 text-center font-serif rounded-md">
            Explore Products
          </button>
        </div>
        <div className="flex flex-col  lg:flex-row gap-12 lg:gap-10">
          <div className="w-full lg:w-1/4  mb-10 mt-8 bg-light rounded-xl shadow-lg">
            <div>
              <img src={FeaturedPic1} alt="" className="mt-[-90px] mx-auto" />
            </div>
            <div className="flex flex-col justify-center items-center text-base font-serif font-medium">
              <p className="text-primary">Kente Accessories</p>
              <p className="text-accent1">Price: $88</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4  mb-10  mt-[-40px]">
            <div>
              <img src={FeaturedPic2} alt="" className="w-48 flex mx-auto" />
            </div>
            <div className="flex flex-col justify-center items-center text-base font-medium">
              <p className="text-primary">Simple Kente Dress</p>
              <p className="text-accent2">Price: $88</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-[-90px]">
            <div>
              <img src={FeaturedPic1} alt="" className="w-60 flex mx-auto" />
            </div>
            <div className="flex flex-col justify-center items-center text-base font-medium">
              <p className="text-primary">Simple Kente Dress</p>
              <p className="text-accent2">Price: $88</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;