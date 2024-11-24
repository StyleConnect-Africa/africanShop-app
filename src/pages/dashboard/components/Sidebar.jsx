// src/pages/dashboard/components/Sidebar.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart2, ShoppingCart, Package, PlusCircle, Menu, X, Trash2, Edit } from "lucide-react";
import ProfileSection from "./ProfileSection";

const Sidebar = ({ activeTab, setActiveTab, vendorName, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(false); // Close the sidebar after clicking a menu item
  };

  return (
    <div className="flex h-screen">
      {/* Toggle button */}
      {!isSidebarOpen && (
        <Button
          className="md:hidden p-2 fixed top-4 left-4 z-50 bg-black text-white"
          onClick={toggleSidebar}
          style={{ margin: '-10px' }}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col w-64 bg-white text-black p-4 shadow-lg z-40`}
      >
        {/* Sidebar header with close button */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold">Vendor's Dashboard</p>
          <Button
            className="md:hidden p-2"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col gap-2">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => handleMenuItemClick("overview")}
          >
            <BarChart2 className="mr-2 h-4 w-4" /> Overview
          </Button>
          <Button
            variant={activeTab === "orders" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => handleMenuItemClick("orders")}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Orders
          </Button>
          <Button
            variant={activeTab === "products" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => handleMenuItemClick("products")}
          >
            <Package className="mr-2 h-4 w-4" /> Products
          </Button>
          <Button
            variant={activeTab === "addProduct" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => handleMenuItemClick("addProduct")}
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Product
          </Button>
         
        </nav>
        <ProfileSection vendorName={vendorName} onLogout={onLogout} />
      </aside>
    </div>
  );
};

export default Sidebar;
