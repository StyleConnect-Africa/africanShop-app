import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus, FaTag } from "react-icons/fa";
import { useProducts } from "@/hooks/useProduct";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductListing = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold font-sans">Product Listing And Browsing</p>
          <p className="font-serif">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Perspiciatis, temporibus impedit! Iste nulla quam quisquam?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#F2FBFC] rounded-2xl shadow-xl relative">
                <div className="mb-3 h-48 w-full bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p>Error loading products: {error.message}</p>;

  const products = data?.data || [];

  // Extract the latest product from each category
  const latestProducts = Object.values(
    products.reduce((acc, product) => {
      if (!acc[product.category] || new Date(product.date) > new Date(acc[product.category].date)) {
        acc[product.category] = product;
      }
      return acc;
    }, {})
  );

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <p className="text-4xl font-bold font-sans">
          Product Listing And Browsing
        </p>
        <p className="font-serif mt-8">
          Discover the latest and greatest products from each category. <br />
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  gap-4">
        {latestProducts.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-[#F2FBFC] rounded-2xl shadow-xl relative">
              <div className="absolute top-2 left-2 flex items-center z-10">
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
                  <p className="text-md font-bold capitalize text-accent1 text-md">
                    {product.name}
                  </p>
                  <span className="text-lg font-medium text-gray-500">
                    GH₵{product.price}
                  </span>
                </div>
                <p className="text-sm lg:text-lg font-sans">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="flex items-center bg-accent2 text-white p-2 rounded-md shadow hover:bg-secondary"
                    onClick={() => addToFavorites(product)}
                  >
                    <MdFavoriteBorder className="text-xlg" />
                  </button>
                  <button
                    className="flex items-center bg-secondary text-white p-2 rounded-md shadow hover:bg-accent1"
                    onClick={() => addToCart(product)}
                  >
                    <FaCartPlus className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/shoppage">
          <button className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-accent2">
            View All Products
          </button>
        </Link>
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

export default ProductListing;
