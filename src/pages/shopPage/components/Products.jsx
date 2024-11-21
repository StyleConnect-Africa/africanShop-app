import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowDown } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus, FaTag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedPic1 from "../../../assets/img/FeaturedPic1.png";
import Boubou from "../../../assets/img/Boubou.jpg";
import Ankara from "../../../assets/img/Ankara.jpg";
import Massai from "../../../assets/img/Massai.jpg";
import Agbada from "../../../assets/img/Agbada.jpg";
import Zulu from "../../../assets/img/Zulu.jpg";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };

  const productData = [
    {
      name: "Boubou",
      price: 50,
      description: "Elegant West African traditional wear",
      category: "Afro-Pop",
      image: Boubou
    },
    {
      name: "Kente Accessories",
      price: 88,
      description: "Handcrafted Ghanaian accessories",
      category: "Accessories",
      image: FeaturedPic1
    },
    {
      name: "Ankara Dress",
      price: 75,
      description: "Modern African print dress",
      category: "Modern",
      image: Ankara
    },
    {
      name: "Maasai Shuka",
      price: 45,
      description: "Authentic Maasai tribal wear",
      category: "Cultural",
      image: Massai
    },
    {
      name: "Agbada Set",
      price: 120,
      description: "Premium Nigerian formal wear",
      category: "Occassional",
      image: Agbada
    },
    {
      name: "Zulu Attire",
      price: 65,
      description: "Hand-dyed Nigerian textile",
      category: "Cultural",
      image: Zulu
    }
  ];

  return (
    <div className="p-4 md:px-20">
      <div className="text-center mb-8">
        <p className="text-4xl font-bold font-sans">Products</p>
        <div className="flex flex-wrap items-center gap-4 mb-4 justify-center mt-4">
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
      </div>

      <div className="mb-12">
        <Slider {...settings}>
          {productData.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#F2FBFC] rounded-2xl shadow-xl relative">
                <div className="absolute top-2 left-2 flex items-center z-10">
                  <FaTag className="text-primary mr-1" />
                  <span className="text-sm text-white">{product.category}</span>
                </div>
                <div className="mb-3 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-2xl h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-70 rounded-2xl z-0"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold text-md">{product.name}</p>
                    <span className="text-xl font-bold">${product.price}</span>
                  </div>
                  <p className="text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <button className="flex items-center bg-accent1 text-white p-2 rounded-full shadow hover:bg-secondary">
                      <MdFavoriteBorder className="text-xl" />
                    </button>
                    <button className="flex items-center bg-secondary text-white p-2 rounded-full shadow hover:bg-accent1">
                      <FaCartPlus className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-8">
        <button className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-accent2">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
