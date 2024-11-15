import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const UpdateItemForm = ({ handleUpdateItem, categories = [], subcategories = [], itemData }) => {
  const formRef = useRef(null);

  const defaultCategories = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Clothing' },
    { id: '3', name: 'Home Appliances' },
  ];

  const defaultSubcategories = [
    { id: '1', name: 'Mobile Phones' },
    { id: '2', name: 'Laptops' },
    { id: '3', name: 'Televisions' },
  ];

  const categoryOptions = categories.length ? categories : defaultCategories;
  const subcategoryOptions = subcategories.length ? subcategories : defaultSubcategories;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    handleUpdateItem(formData);
  };

  return (
    <div className="bg-white shadow-md border-l-4 border-primary-color p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Update Item</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Item Name</Label>
          <Input id="name" name="name" defaultValue={itemData.name} required className="mt-1 block w-full" />
        </div>
        <div className="col-span-1">
          <Label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</Label>
          <Input id="price" name="price" type="number" min="0" step="0.01" defaultValue={itemData.price} required className="mt-1 block w-full" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
          <Textarea id="description" name="description" defaultValue={itemData.description} required className="mt-1 block w-full" />
        </div>
        <div className="col-span-1">
          <Label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</Label>
          <Select id="category" name="category" defaultValue={itemData.category} required className="mt-1 block w-full">
            <option value="">Select a category</option>
            {categoryOptions.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="col-span-1">
          <Label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</Label>
          <Select id="subcategory" name="subcategory" defaultValue={itemData.subcategory} required className="mt-1 block w-full">
            <option value="">Select a subcategory</option>
            {subcategoryOptions.map(subcategory => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="col-span-1">
          <Label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</Label>
          <Input id="storeName" name="storeName" defaultValue={itemData.storeName} required className="mt-1 block w-full" />
        </div>
        <div className="col-span-1">
          <Label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</Label>
          <Input id="stock" name="stock" type="number" min="0" defaultValue={itemData.stock} required className="mt-1 block w-full" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Button type="submit" className="w-full bg-primary-color text-white py-2 mt-4">
            Update Item
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItemForm; 