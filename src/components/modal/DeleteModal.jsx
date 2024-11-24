// src/components/ui/Modal.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react"; // Import an icon for the modal

const DeleteModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            <XCircle className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end">
          <Button className="mr-2 bg-accent1 hover:bg-accent2" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-secondary hover:bg-primary text-white" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
