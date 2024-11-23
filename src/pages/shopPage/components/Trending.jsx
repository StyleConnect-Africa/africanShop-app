import React, { useEffect } from "react";
import { useProducts } from "@/hooks/useProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStore } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Trending = () => {
  const { data, isLoading, error } = useProducts();

  useEffect(() => {
    if (error) {
      toast.error(`Error loading products: ${error.message}`);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="p-6 md:p-20">
        <div className="mb-6">
          <p className="font-semibold text-2xl">Trending</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between mx-auto animate-pulse"
              style={{ maxWidth: "600px", minHeight: "400px" }}
            >
              <div className="relative bg-gray-300 w-full h-48"></div>
              <div className="p-4 flex-grow">
                <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
                <div className="flex items-center mt-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const products = data?.data || [];
  console.log(products);

  // Group products by subcategory and select the latest item from each
  const latestBySubcategory = products.reduce((acc, product) => {
    if (
      !acc[product.subcategory] ||
      new Date(product.date) > new Date(acc[product.subcategory].date)
    ) {
      acc[product.subcategory] = product;
    }
    return acc;
  }, {});

  // Extract the latest product from each subcategory
  const trendingProducts = Object.values(latestBySubcategory);

  return (
    <div className="p-6 md:p-20">
      <div className="mb-6">
        <p className="font-semibold text-2xl text-center">Trending</p>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="relative"
      >
        {trendingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between mx-auto"
              style={{ maxWidth: "600px", minHeight: "400px" }} // Limit card width and ensure consistent height
            >
              <div className="relative">
                <img
                  src={`https://savefiles.org/${product.images[0]}?shareable_link=553`}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {product.subcategory}
                  </p>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="font-bold text-lg capitalize mb-2">{product.name}</h3>
                <p className="text-accent1 tracking-tight mb-4">{product.description}</p>
                <div className="flex items-center mt-4">
                  <FaStore className="w-8 h-8 mr-2 text-secondary text-accent1" />
                  <span className="text-accent1 text-sm font-medium">{product.vendor.storeName}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer />
      <style>{`
        .swiper-pagination-bullet {
          background: hsl(var(--secondary));
        }
        .swiper-pagination {
          bottom: -20px; /* Position the pagination below the card */
        }
      `}</style>
    </div>
  );
};

export default Trending;
