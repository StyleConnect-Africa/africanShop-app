import { useQuery } from "react-query";
import { apiGetProduct } from "@/services/product";
import { toast } from "react-toastify";
import { getUserData } from "@/utils/token"; // Import to get user data

export const useVendorProducts = () => {
  const user = getUserData(); // Get the logged-in user data
  const vendorId = user?.id; // Extract the vendor ID
  console.log("Vendor ID:", vendorId); // Log the vendor ID

  const { data, ...query } = useQuery("products", apiGetProduct, {
    onError: (error) => {
      toast.error(
        `Error fetching products: ${error.message || "Unknown error"}`
      );
    },
    onSuccess: (data) => {
      console.log("Fetched Products:", data); // Log the fetched data
      data.data.forEach(product => {
        console.log("Product Vendor ID:", product.vendor?.id); // Log each product's vendor ID
      });
    },
  });

  // Filter products by vendor ID
  const vendorProducts = Array.isArray(data?.data)
    ? data.data.filter((product) => String(product.vendor?.id) === String(vendorId))
    : [];
  console.log("Filtered Vendor Products:", vendorProducts); // Log the filtered products

  // Calculate totals and categories for the specific vendor
  const totalItems = vendorProducts.length;
  const totalStock = vendorProducts.reduce(
    (acc, product) => acc + product.stock,
    0
  );
  const categories = [...new Set(vendorProducts.map((item) => item.category))];
  const subcategories = [
    ...new Set(vendorProducts.map((item) => item.subcategory)),
  ];

  return {
    vendorProducts,
    totalItems,
    totalStock,
    categories,
    subcategories,
    ...query,
  };
};
