// src/pages/dashboard/index.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import OrderManagement from "./components/OrderManagement";
import ProductList from "./components/ProductList";
import AddItemForm from "./components/AddItemForm";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const navigate = useNavigate();

  

  
  const handleLogout = () => {
    // Logic to handle logout
    // toast.success("Logged out");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-background-color">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      
        onLogout={handleLogout}
      />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {activeTab === "overview" && (
          <Overview  />
        )}
        {activeTab === "orders" && <OrderManagement />}
        {activeTab === "products" && <ProductList />}
        {activeTab === "addProduct" && (
          <AddItemForm />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
