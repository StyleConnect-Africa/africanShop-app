// src/components/CartModal.jsx
import React from "react";
import { Link } from "react-router-dom";

const CartModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <div className="flex justify-between mt-6">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Close
          </button>
          <Link
            to="/cart"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
