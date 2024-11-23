import { useQuery, useMutation } from "react-query";
import {
  apiGetProduct,
  apiAddProduct,
  apiGetOneProduct,
  apiDeleteProduct,
  apiEditProduct,
} from "@/services/product";
import { toast } from "react-toastify";

export const useProducts = () => {
  const { data, ...query } = useQuery("products", apiGetProduct, {
    onError: (error) => {
      toast.error(`Error fetching products: ${error.message || "Unknown error"}`);
    },
  });

  // Ensure data is an array before mapping
  const categories = Array.isArray(data?.data) 
    ? [...new Set(data.data.map(item => item.category))] 
    : [];
  
  const subcategories = Array.isArray(data?.data) 
    ? [...new Set(data.data.map(item => item.subcategory))] 
    : [];

  // console.log('Fetched Categories:', categories); // Debugging log
  // console.log('Fetched Subcategories:', subcategories); // Debugging log

  return { data, categories, subcategories, ...query }; 
  // Return data, categories, and subcategories
};

// New hook for adding products
export const useAddProduct = () => {
  const mutation = useMutation(apiAddProduct, {
    onError: (error) => {
      toast.error(`Error adding product: ${error.message || "Unknown error"}`);
    },
  });

  return mutation;
};

export const useProduct = (id) => {
  return useQuery(["product", id], () => apiGetOneProduct(id), {
    enabled: !!id, // only run the query if id is defined
    onError: (error) => {
      toast.error(`Error fetching product: ${error.message || "Unknown error"}`);
    },
  });
};

// Hook for editing a product
export const useEditProduct = (id) => {
  return useMutation((payload) => apiEditProduct(id, payload), {
    onError: (error) => {
      toast.error(`Error editing product: ${error.message || "Unknown error"}`);
    },
  });
};

// Hook for deleting a product
export const useDeleteProduct = (id) => {
  return useMutation(() => apiDeleteProduct(id), {
    onError: (error) => {
      toast.error(`Error deleting product: ${error.message || "Unknown error"}`);
    },
  });
};
