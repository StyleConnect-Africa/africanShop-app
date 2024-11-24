// src/pages/dashboard/components/ProductList.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react"; 
import { useVendorProductManagement } from "@/hooks/useVendorProductManagement";
import DeleteModal from "@/components/modal/DeleteModal";
import { toast } from 'react-toastify';

const ProductList = () => {
  const {
    vendorProducts,
    deleteProduct,
    editProduct,
  } = useVendorProductManagement();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      deleteProduct.mutate(productToDelete.id, {
        onSuccess: () => {
          toast.success(`${productToDelete.name} has been deleted successfully!`);
          setIsModalOpen(false);
          setProductToDelete(null);
        },
        onError: (error) => {
          toast.error(`Failed to delete ${productToDelete.name}: ${error.message}`);
        }
      });
    }
  };

  const handleUpdateItem = (formData) => {
    const updatedProduct = {
      id: selectedProduct.id,
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
      storeName: formData.get("storeName"),
      stock: formData.get("stock"),
    };
    editProduct.mutate(updatedProduct);
    setSelectedProduct(null);
  };

  return (
    <div className="p-4">
      <Card className="bg-white shadow-md border-l-4 border-primary-color mb-4">
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>View and manage your products</CardDescription>
        </CardHeader>
        <CardContent>
          {vendorProducts.length === 0 ? (
            <p>No products available. Add new products to get started.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {vendorProducts.map((product) => {
                const imageUrl = product.images && product.images.length > 0
                  ? `https://savefiles.org/${product.images[0]}?shareable_link=553`
                  : null;


                return (
                  <div
                    key={product.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={product.name}
                          className="h-12 w-12 object-cover rounded-full"
                          onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = "path/to/placeholder/image.jpg"; // Fallback image
                          }}
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm text-gray-500">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price:GH₵ {product.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Stock: {product.stock}
                    </p>
                    <div className="flex justify-end mt-2">
                      <Button
                        className="mr-2 bg-accent1 hover:bg-accent2 text-white"
                        onClick={() => handleEditClick(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        className="bg-secondary hover:bg-primary text-white"
                        onClick={() => handleDeleteClick(product)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {selectedProduct && (
        <UpdateItemForm
          handleUpdateItem={handleUpdateItem}
          itemData={selectedProduct}
        />
      )}

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Confirm Deletion"
        message={`Are you sure you want to delete ${productToDelete?.name}?`}
      />
    </div>
  );
};

export default ProductList;
