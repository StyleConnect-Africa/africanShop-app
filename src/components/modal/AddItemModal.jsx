import React from "react";
import { CheckCircle, Store } from "lucide-react"; // Import icons from lucide-react

const AddItemModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h2 className="text-lg font-semibold mb-2">Success!</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AddItemModal;
