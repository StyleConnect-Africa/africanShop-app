import React, { useRef, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react"; 
import { useAddProduct, useProducts } from "@/hooks/useProduct";
import AddItemModal from "@/components/modal/AddItemModal";

const AddItemForm = () => {
  const formRef = useRef(null);
  const [imageFiles, setImageFiles] = useState([]); // Store the actual files
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [vendor, setVendor] = useState(null); // State to hold vendor information
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const addProductMutation = useAddProduct(); // Use the add product hook
  const { categories, subcategories } = useProducts(); // Get data, categories, and subcategories

  // Retrieve vendor information from local storage
  useEffect(() => {
    const vendorData = JSON.parse(localStorage.getItem('vendor')); // Adjust the key based on how you store it
    if (vendorData) {
      setVendor(vendorData);
    }
  }, []);

  // Create a mapping of subcategories to categories
  const subcategoryMapping = {
    'Crafts & Gifts': ['Cultural Souvenirs', 'Handmade Crafts'],
    'Fabric & Materials': ['Ankara Prints', 'Kente Cloth'],
    'Clothing': ['Women’s Wear', 'Men’s Wear', 'Kids’ Wear'],
    'Accessories': ['Jewelry', 'Bags & Purses', 'Footwear', 'Headwear', 'Mud Cloth'],
  };

  // Filter subcategories based on the selected category
  const filteredSubcategories = selectedCategory ? subcategoryMapping[selectedCategory] || [] : [];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onDrop = (acceptedFiles) => {
    const previews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
    setImageFiles(acceptedFiles); // Store the actual files for submission
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gather form data
    const formData = new FormData(formRef.current);
    
    // Add vendor information to formData
    if (vendor) {
      formData.append('vendorId', vendor.id);
      formData.append('vendorName', vendor.name);
      formData.append('vendorEmail', vendor.email);
      formData.append('vendorStoreName', vendor.storeName);
    }

    // Append image files to formData
    imageFiles.forEach((file) => {
      formData.append('images', file); // Append each image file
    });

    addProductMutation.mutate(formData, {
      onSuccess: () => {
        // Show modal on success
        setIsModalOpen(true);
        // Clear form data
        formRef.current.reset();
        setImagePreviews([]);
        setImageFiles([]);
        setSelectedCategory('');
      },
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow-md border-l-4 border-primary-color p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
      <p className="text-sm text-gray-500 mb-6">
        Fill in the details to add a new item to your inventory.
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="col-span-1">
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Item Name
          </Label>
          <Input id="name" name="name" required className="mt-1 block w-full" />
        </div>
        <div className="col-span-1">
          <Label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </Label>
          <Input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            required
            className="mt-1 block w-full"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            required
            className="mt-1 block w-full"
          />
        </div>
        <div className="col-span-1">
          <Label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </Label>
          <Select
            id="category"
            name="category"
            required
            className="mt-1 block w-full"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </div>
        <div className="col-span-1">
          <Label
            htmlFor="subcategory"
            className="block text-sm font-medium text-gray-700"
          >
            Subcategory
          </Label>
          <Select
            id="subcategory"
            name="subcategory"
            required
            className="mt-1 block w-full"
          >
            <option value="">Select a subcategory</option>
            {filteredSubcategories.map((subcategory, index) => (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </Select>
        </div>
        <div className="col-span-1">
          <Label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            min="0"
            required
            className="mt-1 block w-full"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Images
          </Label>
          <div
            {...getRootProps()}
            className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-gray-500">Upload image of clothing</p>
            <Upload className="mx-auto h-6 w-6 text-gray-500" />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {imagePreviews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Preview ${index}`}
                className="h-20 w-20 object-cover rounded"
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 mt-4"
            disabled={addProductMutation.isLoading} // Disable button while loading
          >
            {addProductMutation.isLoading ? "Adding..." : "Add Item"}
          </Button>
        </div>
      </form>

      {/* Modal for success message */}
      <AddItemModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Item successfully added to your store!"
      />
    </div>
  );
};

export default AddItemForm;
