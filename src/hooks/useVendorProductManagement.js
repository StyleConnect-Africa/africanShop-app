import { useQuery, useMutation } from "react-query";
import {
  apiGetProduct,
  apiEditProduct,
  apiDeleteProduct,
} from "@/services/product";
import { toast } from "react-toastify";
import { getUserData } from "@/utils/token"; // Import to get user data

export const useVendorProductManagement = () => {
  const user = getUserData(); // Get the logged-in user data
  const vendorId = user?.id; // Extract the vendor ID

  // Fetch products and filter by vendor ID
  const { data, refetch, ...query } = useQuery("products", apiGetProduct, {
    onError: (error) => {
      toast.error(
        `Error fetching products: ${error.message || "Unknown error"}`
      );
    },
  });

  const vendorProducts = Array.isArray(data?.data)
    ? data.data.filter(
        (product) => String(product.vendor?.id) === String(vendorId)
      )
    : [];

  // Mutation hook for editing a product
  const editProduct = useMutation(
    (updatedProduct) => apiEditProduct(updatedProduct.id, updatedProduct),
    {
      onError: (error) => {
        toast.error(
          `Error editing product: ${error.message || "Unknown error"}`
        );
      },
      onSuccess: () => {
        toast.success("Product edited successfully!");
        refetch(); // Refetch products after editing
      },
    }
  );

  // Mutation hook for deleting a product
  const deleteProduct = useMutation((id) => apiDeleteProduct(id), {
    onError: (error) => {
      toast.error(
        `Error deleting product: ${error.message || "Unknown error"}`
      );
    },
    onSuccess: () => {
      toast.success("Product deleted successfully!");
      refetch(); // Refetch products after deleting
    },
  });

  return {
    vendorProducts,
    editProduct,
    deleteProduct,
    ...query,
  };
};
