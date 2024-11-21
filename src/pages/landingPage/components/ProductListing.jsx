import React from "react";
import Slider from "react-slick";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "@/hooks/useProduct";

const ProductListing = () => {
  const { data, isLoading, error } = useProducts();

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
        <div className="mb-12">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
    );
  }

  if (error) return <p>Error loading products: {error.message}</p>;

  const products = data?.data || [];

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <p className="text-4xl font-bold font-sans">
          Product Listing And Browsing
        </p>
        <p className="font-serif">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Perspiciatis, temporibus impedit! Iste nulla quam quisquam?
        </p>
      </div>
      <div className="mb-12">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <div className="bg-[#F2FBFC] rounded-2xl shadow-xl relative">
                <div className="absolute top-2 left-2 flex items-center z-10">
                  <FaTag className="text-primary mr-1" />
                  <span className="text-sm text-white">
                    {product.category}
                  </span>
                </div>
                <div className="mb-3 relative">
                  <img
                    src={`https://savefiles.org/${product.images[0]}?shareable_link=553`}
                    alt={product.name}
                    className="rounded-2xl h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-70 rounded-2xl"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-normal text-xl">{product.name}</p>
                    <span className="text-xl">${product.price}</span>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <MdFavoriteBorder
                      className="text-2xl text-primary cursor-pointer"
                      onClick={() => addToFavorites(product)}
                    />
                    <FaCartPlus
                      className="text-2xl text-primary cursor-pointer"
                      onClick={() => addToCart(product)}
                    />
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

const addToCart = (product) => {
  // Implement add to cart functionality
  console.log("Added to cart:", product);
};

const addToFavorites = (product) => {
  // Implement add to favorites functionality
  console.log("Added to favorites:", product);
};

export default ProductListing;
