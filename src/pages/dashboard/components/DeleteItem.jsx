import React from "react";
import { Button } from "@/components/ui/button";

const DeleteItem = ({ handleDeleteItem, itemName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleDeleteItem();
  };

  return (
    <div className="bg-white shadow-md border-l-4 border-red-500 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Delete Item</h2>
      <p className="text-sm text-gray-500 mb-6">
        Are you sure you want to delete the item <strong>{itemName}</strong>?
      </p>
      <form onSubmit={handleSubmit}>
        <Button type="submit" className="w-full bg-red-500 text-white py-2 mt-4">
          Confirm Delete
        </Button>
      </form>
    </div>
  );
};

export default DeleteItem; 