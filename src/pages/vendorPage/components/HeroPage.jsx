import React from "react";
import VendorHero1 from "../../../assets/img/VendorHero1.jpg";
import VendorHero2 from "../../../assets/img/VendorHero2.jpg";
import VendorHero3 from "../../../assets/img/VendorHero3.jpg";
const HeroPage = () => {
  return (
    <div className="bg-gradient-to-tr from-amber-100 to-[#FFFFFF] from- flex p-10 gap-14 mt-6 h-full">
      <div className="flex mt-10 gap-2">
        <img
          src={VendorHero1}
          alt=""
          className="size-52 h-[300px] rounded-lg"
        />

        <img
          src={VendorHero2}
          alt=""
          className="size-52 h-[400px] -mt-12  rounded-lg"
        />

        <img
          src={VendorHero3}
          alt=""
          className="size-52 h-[300px]  rounded-lg"
        />
      </div>
      <div className="flex flex-col ml-6 gap -mt-4">
        <div className="mb-6">
          <div className="text-5xl font-bold h-48 ">
            <p className="mb-5">Meet Our</p>
            <p className="mb-5">Designers & </p>
            <p className="mb-5">Their Works</p>
          </div>
          <div  className="mt-7">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Ducimus
            qui reprehenderit doloremque.
          </p>
          </div>
        </div>
        <hr  className=" border-black w-48"/>
        <div className="flex gap-5 mt-5">
  <li className="flex items-center gap-1">
    <span className="w-2 h-2 bg-black rounded-full"></span>
    Wholesalers
  </li>
  <li className="flex items-center gap-1">
    <span className="w-2 h-2 bg-black rounded-full"></span>
    Retailers
  </li>
</div>

      </div>
    </div>
  );
};

export default HeroPage;
