import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus, FaTag } from "react-icons/fa";
import { useProducts } from "@/hooks/useProduct";

const Products = () => {
  const { data, isLoading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Subcategory");
  const [dropdowns, setDropdowns] = useState({ category: false, subCategory: false });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  const dropdownRefs = {
    category: useRef(null),
    subCategory: useRef(null),
  };

  useEffect(() => {
    if (data) {
      setFilteredProducts(data.data);
    }
  }, [data]);

  const uniqueCategories = [...new Set(data?.data.map(product => product.category))];
  const uniqueSubCategories = [...new Set(data?.data.map(product => product.subcategory))];

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory("Subcategory");
    const filtered = data.data.filter((product) => product.category === category);
    setFilteredProducts(filtered);
    setDropdowns({ category: false, subCategory: false });
    setCurrentPage(1);
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
    const filtered = data.data.filter(
      (product) => product.subcategory === subCategory
    );
    setFilteredProducts(filtered);
    setDropdowns({ category: false, subCategory: false });
    setCurrentPage(1);
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

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>;
  }

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4 md:px-20">
      <div className="text-center mb-8">
        <p className="text-4xl font-bold font-sans">Products</p>
        <div className="flex flex-wrap items-center gap-4 mb-4 justify-center mt-4">
          {/* Category Dropdown */}
          <div className="relative" ref={dropdownRefs.category}>
            <button
              onClick={() => toggleDropdown("category")}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none flex items-center"
            >
              {selectedCategory}
              <IoIosArrowDown className="ml-2" />
            </button>
            {dropdowns.category && (
              <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                <ul className="py-1">
                  {uniqueCategories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => handleCategoryChange(category)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Subcategory Dropdown */}
          <div className="relative" ref={dropdownRefs.subCategory}>
            <button
              onClick={() => toggleDropdown("subCategory")}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 focus:outline-none flex items-center"
            >
              {selectedSubCategory}
              <IoIosArrowDown className="ml-2" />
            </button>
            {dropdowns.subCategory && (
              <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                <ul className="py-1">
                  {uniqueSubCategories.map((subCategory, index) => (
                    <li
                      key={index}
                      onClick={() => handleSubCategoryChange(subCategory)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {subCategory}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
        {currentProducts.map((product) => (
          <div key={product.id} className="p-4 bg-[#F2FBFC] rounded-2xl shadow-xl relative">
            <div className="absolute top-6 left-8 flex items-center z-10">
              <FaTag className="text-primary mr-1" />
              <span className="text-sm text-white">{product.category}</span>
            </div>
            <div className="mb-3 relative">
              <img
                src={`https://savefiles.org/${product.images[0]}?shareable_link=553`}
                alt={product.name}
                className="rounded-2xl h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-xl text-accent1 text-md">{product.name}</p>
                <span className="text-md font-bold text-accent1">
                  GH₵{product.price}
                </span>
              </div>
              <p className="text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="flex items-center bg-accent1 text-white p-2 rounded-full shadow hover:bg-secondary"
                  onClick={() => addToFavorites(product)}
                >
                  <MdFavoriteBorder className="text-xl" />
                </button>
                <button
                  className="flex items-center bg-secondary text-white p-2 rounded-full shadow hover:bg-accent1"
                  onClick={() => addToCart(product)}
                >
                  <FaCartPlus className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 mx-1 rounded-full ${
              currentPage === number ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

const addToCart = (product) => {
  // Implement add to cart functionality
  console.log("Added to cart:", product);
};

const addToFavorites = (product) => {
  // Implement add to favorites functionality
  console.log("Added to favorites:", product);
};

export default Products;
