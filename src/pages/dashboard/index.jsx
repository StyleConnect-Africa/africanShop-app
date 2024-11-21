// src/pages/dashboard/index.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import OrderManagement from "./components/OrderManagement";
import ProductList from "./components/ProductList";
import AddItemForm from "./components/AddItemForm";
import UpdateItemForm from "./components/UpdateItemForm";
import DeleteItem from "./components/DeleteItem";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [totalItems, setTotalItems] = useState(150);
  const [totalStock, setTotalStock] = useState(1500);
  const vendorName = "Emmy"; // Replace with actual vendor name
  const navigate = useNavigate();

  const handleAddItem = (formData) => {
    const quantity = parseInt(formData.get("stock"), 10);
    setTotalItems(totalItems + 1);
    setTotalStock(totalStock + quantity);
  };

  const handleUpdateItem = (formData) => {
    // Logic to update item
  };

  const handleDeleteItem = () => {
    // Logic to delete item
  };

  const handleLogout = () => {
    // Logic to handle logout
    console.log("Logged out");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-background-color">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        vendorName={vendorName}
        onLogout={handleLogout}
      />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {activeTab === "overview" && (
          <Overview totalItems={totalItems} totalStock={totalStock} />
        )}
        {activeTab === "orders" && <OrderManagement />}
        {activeTab === "products" && <ProductList />}
        {activeTab === "addProduct" && (
          <AddItemForm handleAddItem={handleAddItem} />
        )}
        {activeTab === "updateProduct" && (
          <UpdateItemForm
            handleUpdateItem={handleUpdateItem}
            itemData={
              {
                /* pass item data here */
              }
            }
          />
        )}
        {activeTab === "deleteProduct" && (
          <DeleteItem
            handleDeleteItem={handleDeleteItem}
            itemName="Sample Item"
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
