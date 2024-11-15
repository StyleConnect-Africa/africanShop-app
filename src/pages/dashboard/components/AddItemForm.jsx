import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react"; // Assuming you're using lucide-react for icons

const AddItemForm = ({
  handleAddItem,
  categories = [],
  subcategories = [],
}) => {
  const formRef = useRef(null);
  const [imagePreviews, setImagePreviews] = React.useState([]);

  const defaultCategories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Clothing" },
    { id: "3", name: "Home Appliances" },
  ];

  const defaultSubcategories = [
    { id: "1", name: "Mobile Phones" },
    { id: "2", name: "Laptops" },
    { id: "3", name: "Televisions" },
  ];

  const categoryOptions = categories.length ? categories : defaultCategories;
  const subcategoryOptions = subcategories.length
    ? subcategories
    : defaultSubcategories;

  const onDrop = (acceptedFiles) => {
    const previews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    handleAddItem(formData);
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
          >
            <option value="">Select a category</option>
            {categoryOptions.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
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
            {subcategoryOptions.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="col-span-1">
          <Label
            htmlFor="storeName"
            className="block text-sm font-medium text-gray-700"
          >
            Store Name
          </Label>
          <Input
            id="storeName"
            name="storeName"
            required
            className="mt-1 block w-full"
          />
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
          >
            Add Item
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
