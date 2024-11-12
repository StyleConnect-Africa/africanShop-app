import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdFavoriteBorder, MdAddBox } from "react-icons/md";
import { PiArrowArcLeftFill, PiArrowArcRightFill } from "react-icons/pi";
import FeaturedPic1 from "../../../assets/img/FeaturedPic1.png";

const Products = ({ loading }) => {
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

  const items1 = ["Traditional Clothing", "Modern African Fashion", "Regional Styles", "Cultural & Tribal Styles", "Fashion Accessories", "Textile & Prints", "Seasonal & Occasional Wear"];
  const items2 = [
    { label: "Traditional Clothing", subItems: ["Kaftan", "Kente", "Zulu Traditional Wear", "BouBou", "Agbada", "Maasai Attire"] },
    { label: "Modern African Fashion", subItems: ["AfroChic", "Ankara Style", "Adire", "Kitenge", "AfroPop"] },
    { label: "Regional Styles", subItems: ["North African Fashion", "West African Fashion", "East African Fashion", "North African Fashion"] },
    { label: "Cultural & Tribal Styles", subItems: ["Maasai", "Igbo", "Yoruba", "Zulu", "Hausa"] },
    { label: "Textile & Prints", subItems: ["Adinkra", "Batix", "Tie-Dye", "Kente", "Ankara"] },
    { label: "Fashion Accessories", subItems: ["HeadWraps", "Scarfs", "Hats", "Jewelry", "Bags"] },
    { label: "Seasonal & Occasional Wear", subItems: ["Wedding Attire", "Formal Attire", "Attire for Festivals & Celebration", "Beach Wear"] },
  ];
  const items3 = [
    { label: "Traditional Clothing", subItems: ["Jeans", "T-Shirts", "Hoodies"] },
    { label: "Modern African Fashion", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Regional Styles", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Fashion Accessories", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Textile & Prints", subItems: ["Suits", "Shirts", "Pants"] },
    { label: "Seasonal & Occasional Wear", subItems: ["Suits", "Shirts", "Pants"] },
  ];

  return (
    <div className="pt-14 px-4 md:px-20">
      <div>
        <p className="text-2xl font-bold mb-4">Products</p>
      </div>
      <div>
        <p>Sort by:</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4 justify-around pb-8">
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
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10">
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
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10">
              <ul className="py-1">
                {items2.map((item, index) => (
                  <li
                    key={index}
                    className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                    <div className="absolute left-full top-0 ml-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40 z-10">
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
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10">
              <ul className="py-1">
                {items3.map((item, index) => (
                  <li
                    key={index}
                    className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                    <div className="absolute left-full top-0 ml-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40 z-10">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={`bg-[#FBF5DF] rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 ${loading ? 'animate-pulse' : ''}`}>
            <div className="flex justify-center">
              <div className={`w-32 h-32 rounded-full ${loading ? 'bg-gray-300' : ''}`}>
                {!loading && <img src={FeaturedPic1} alt="" className="w-full h-full object-cover rounded-full" />}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-base font-medium mt-4">
              <p className="text-[#FF9900]">{loading ? <span className="bg-gray-300 h-4 w-24 block rounded"></span> : 'Kente Accessories'}</p>
              <p>{loading ? <span className="bg-gray-300 h-4 w-16 block rounded mt-2"></span> : 'Price: $88'}</p>
              <div className="flex gap-4 mt-2">
                {loading ? (
                  <>
                    <span className="bg-gray-300 h-8 w-20 block rounded"></span>
                    <span className="bg-gray-300 h-8 w-20 block rounded"></span>
                  </>
                ) : (
                  <>
                    <button className="bg-accent1 text-white px-4 py-2 rounded-lg">View Details</button>
                    <button className="bg-secondary text-white px-4 py-2 rounded-lg">Buy</button>
                  </>
                )}
              </div>
              <div className="flex gap-4 mt-2">
                <MdFavoriteBorder className="text-[#FF9900] text-2xl cursor-pointer" />
                <MdAddBox className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="border-2 border-black h-10 w-10 rounded-full flex items-center justify-center mr-4">
          <PiArrowArcLeftFill />
        </button>
        <p className="flex items-center">Carousel</p>
        <button className="border-2 border-black h-10 w-10 rounded-full flex items-center justify-center ml-4">
          <PiArrowArcRightFill />
        </button>
      </div>
    </div>
  );
};

export default Products;
