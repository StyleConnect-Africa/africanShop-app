import React from "react";
import { useProducts } from "@/hooks/useProduct";

const TopCategory = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="px-4 md:px-20 py-8">
        <div className="mb-8">
          <p className="text-2xl font-semibold text-center">Top Categories</p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-[#F4F4F2] w-full sm:w-1/2 md:w-1/3 h-40 rounded-xl shadow-lg overflow-hidden relative animate-pulse"
            >
              <p className="text-xl font-medium text-center pt-4">
                <span className="bg-gray-300 h-6 w-32 block mx-auto rounded"></span>
              </p>
              <div className="flex justify-center items-center h-full">
                <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error loading categories: {error.message}</p>;
  }

  const products = data?.data || [];

  // Create a map of categories to a representative product image
  const categoryImages = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = product.images[0]; // Assuming the first image is representative
    }
    return acc;
  }, {});

  const uniqueCategories = Object.keys(categoryImages);

  return (
    <div className="px-4 md:px-20 py-32">
      <div className="mb-8">
        <p className="text-2xl font-semibold text-center">Top Categories</p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {uniqueCategories.map((category, index) => (
          <div
            key={index}
            className="bg-[#F4F4F2] w-full sm:w-1/2 md:w-1/3 h-40 rounded-xl shadow-lg overflow-hidden relative group"
          >
            <img
              src={`https://savefiles.org/${categoryImages[category]}?shareable_link=553`}
              alt={category}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">{category}</p>
            </div>
            <button className="absolute bottom-4 left-4 bg-accent1 text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary transition">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
