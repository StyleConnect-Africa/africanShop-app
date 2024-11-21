import { useQuery } from "react-query";
import { apiGetProduct } from "@/services/product";

export const useProducts = () => {
  return useQuery("products", apiGetProduct, {
    onError: (error) => {
      console.error("An error occurred while fetching products: ", error);
    },
  });
};
