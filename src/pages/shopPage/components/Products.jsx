import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FeaturedPic1 from "../../../assets/img/FeaturedPic1.png"
import { MdFavoriteBorder } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { PiArrowArcLeftFill } from "react-icons/pi";
import { PiArrowArcRightFill } from "react-icons/pi";


const Products = () => {
  const [dropdowns, setDropdowns] = useState({
    dropdown1: false, // Category
    dropdown2: false, // Type
    dropdown3: false, // Most Popular
  });

  const [selectedItems, setSelectedItems] = useState({
    dropdown1: "Category",
    dropdown2: "Type",
    dropdown3: "Most Popular",
  });

  const dropdownRefs = {
    dropdown1: useRef(null),
    dropdown2: useRef(null),
    dropdown3: useRef(null),
  };

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleItemClick = (key, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [key]: item,
    }));
    setDropdowns((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const handleClickOutside = (event) => {
    Object.keys(dropdownRefs).forEach((key) => {
      if (
        dropdownRefs[key].current &&
        !dropdownRefs[key].current.contains(event.target)
      ) {
        setDropdowns((prev) => ({
          ...prev,
          [key]: false,
        }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items1 = [" Traditional Clothing", "Modern African Fashion", "Reginonal Styles","Cultural & Tribal Styles", "Fashion Accessories","Textile & Prints","Seasonal & Occassional Wear"]; // Simple dropdown
  const items2 = [
    { label: "Traditional Clothing", subItems: ["Kaftan", "Kente", "Zulu Traditional Wear","BouBou","Agbada","Maasai Attire"] },
    { label: "Modern African Fashion", subItems: ["AfroChic", "Ankara Style", "Adire","Kitenge","AfroPop"] },
    { label: "Regional Styles", subItems: ["North African Fashion", "West African Fashion", "East African Fashion","North African Fashion"] },
    { label: "Cultural & Tribal Styles", subItems: ["Maasai", "Igbo", "Yuroba","Zulu","Hausa"] },
    { label: "Textile & Prints", subItems: ["Adinkra", "Batix", "Tie-Dye","Kente","Ankara"] },
    { label: "Fashion Accessories", subItems: ["HeadWraps", "Scarfs", "Hats","Jewelry","Bags"] },
    { label: "Seasonal & Occassional Wear", subItems: ["Wedding Attire", "Formal Attire", "Atire for Festivals & Celebration","Beach Wear"] },
  ]; // Nested dropdown for Type
  const items3 = [
    { label: "Traditional Clothing", subItems: ["Jeans", "T-Shirts", "Hoodies"] },
    { label: "Modern African Fashion", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Regional Styles", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Fashion Accessories", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Textile & Prints", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Seasonal & Occassional Wear", subItems: ["Suits", "Shirts", "Pants"] },
  ]; // Nested dropdown for Most Popular

  return (
    <div className="pt-14 px-20">
      <div>
        <p className="text-2xl font-bold mb-4">Products</p>
      </div>
      <div>
        <p>Sort by:</p>
      </div>

      <div className="flex items-center gap-4 mb-4 justify-around pb-28">
        {/* First Dropdown (Category) */}
        <div className="relative" ref={dropdownRefs.dropdown1}>
          <button
            onClick={() => toggleDropdown("dropdown1")}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none flex items-center"
          >
            {selectedItems.dropdown1}
            <IoIosArrowDown className="ml-2" />
          </button>

          {dropdowns.dropdown1 && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md">
              <ul className="py-1">
                {items1.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick("dropdown1", item)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Second Dropdown (Type) */}
        <div className="relative" ref={dropdownRefs.dropdown2}>
          <button
            onClick={() => toggleDropdown("dropdown2")}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none flex items-center"
          >
            {selectedItems.dropdown2}
            <IoIosArrowDown className="ml-2" />
          </button>

          {dropdowns.dropdown2 && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md">
              <ul className="py-1">
                {items2.map((item, index) => (
                  <li
                    key={index}
                    className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                    <div className="absolute left-full top-0 ml-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                      <ul className="py-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            onClick={() => handleItemClick("dropdown2", subItem)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Third Dropdown (Most Popular) */}
        <div className="relative" ref={dropdownRefs.dropdown3}>
          <button
            onClick={() => toggleDropdown("dropdown3")}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none flex items-center"
          >
            {selectedItems.dropdown3}
            <IoIosArrowDown className="ml-2" />
          </button>

          {dropdowns.dropdown3 && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md">
              <ul className="py-1">
                {items3.map((item, index) => (
                  <li
                    key={index}
                    className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                    <div className="absolute left-full top-0 ml-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                      <ul className="py-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            onClick={() => handleItemClick("dropdown3", subItem)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-24">
        <div className="flex gap-5">
        <div className='w-1/3 bg-[#FBF5DF] rounded-xl shadow-lg h-[340px]'>
            <div>
            <img src={FeaturedPic1} alt="" className='mt-[-125px] size-96 w-72 ml-16'/>
            </div>
            <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Kente Accessories</p>
                <p>Price:$88</p>
                <div className="">
                <p
                  className="flex gap-44 text-2xl"
                >
                  <MdFavoriteBorder className=" text-[#FF9900]" />
                  <span className="">
                    {" "}
                    <MdAddBox />
                  </span>
                </p>
              </div>
            </div>
        </div>
        <div className='w-1/3 bg-[#FBF5DF] rounded-xl shadow-lg h-[340px]'>
            <div>
            <img src={FeaturedPic1} alt="" className='mt-[-125px] size-96 w-72 ml-16'/>
            </div>
            <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Kente Accessories</p>
                <p>Price:$88</p>
                <div className="">
                <p
                  className="flex gap-44 text-2xl"
                >
                  <MdFavoriteBorder className=" text-[#FF9900]" />
                  <span className="">
                    {" "}
                    <MdAddBox />
                  </span>
                </p>
              </div>
            </div>
        </div>
        <div className='w-1/3 bg-[#FBF5DF] rounded-xl shadow-lg h-[340px]'>
            <div>
            <img src={FeaturedPic1} alt="" className='mt-[-125px] size-96 w-72 ml-16'/>
            </div>
            <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Kente Accessories</p>
                <p>Price:$88</p>
                <div className="">
                <p
                  className="flex gap-44 text-2xl"
                >
                  <MdFavoriteBorder className=" text-[#FF9900]" />
                  <span className="">
                    {" "}
                    <MdAddBox />
                  </span>
                </p>
              </div>
            </div>
        </div>
        </div>
        <div className="flex gap-5">
        <div className='w-1/3 bg-[#FBF5DF] rounded-xl shadow-lg h-[340px]'>
            <div>
            <img src={FeaturedPic1} alt="" className='mt-[-125px] size-96 w-72 ml-16'/>
            </div>
            <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Kente Accessories</p>
                <p>Price:$88</p>
                <div className="">
                <p
                  className="flex gap-44 text-2xl"
                >
                  <MdFavoriteBorder className=" text-[#FF9900]" />
                  <span className="">
                    {" "}
                    <MdAddBox />
                  </span>
                </p>
              </div>
            </div>
        </div>
        <div className='w-1/3 bg-[#FBF5DF] rounded-xl shadow-lg h-[340px]'>
            <div>
            <img src={FeaturedPic1} alt="" className='mt-[-125px] size-96 w-72 ml-16'/>
            </div>
            <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Kente Accessories</p>
                <p>Price:$88</p>
                <div className="">
                <p
                  className="flex gap-44 text-2xl"
                >
                  <MdFavoriteBorder className=" text-[#FF9900]" />
                  <span className="">
                    {" "}
                    <MdAddBox />
                  </span>
                </p>
              </div>
            </div>
        </div>
        <div className='w-1/3 bg-[#FBF5DF] rounded-xl shadow-lg h-[340px]'>
            <div>
            <img src={FeaturedPic1} alt="" className='mt-[-125px] size-96 w-72 ml-16'/>
            </div>
            <div className='flex flex-col justify-center items-center text-base font-medium'>
                <p className='text-[#FF9900]'>Kente Accessories</p>
                <p>Price:$88</p>
                <div className="">
                <p
                  className="flex gap-44 text-2xl"
                >
                  <MdFavoriteBorder className=" text-[#FF9900]" />
                  <span className="">
                    {" "}
                    <MdAddBox />
                  </span>
                </p>
              </div>
            </div>
        </div>
        </div>
        <div className="flex">
        <button className="border-2 border-black  h-6 w-6 rounded-full">
            <PiArrowArcLeftFill />
            </button>
            <div>
                <p>Carousel</p>
            </div>
            <button className="border-2 border-black  h-6 w-6 rounded-full">
                <PiArrowArcRightFill />
                </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
