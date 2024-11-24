// src/pages/dashboard/components/Overview.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, List, User, Tag, Store, Layers } from "lucide-react";
import { getUserData } from "@/utils/token";
import { useVendorProducts } from "@/hooks/useVendorProducts";

const Overview = () => {
  const user = getUserData();
  const { totalItems, totalStock, categories, subcategories } = useVendorProducts();

  const firstName = user?.name.split(" ")[0];
  const shortVendorId = user?.id.slice(0, 5);
  const storeName = user?.storeName;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {firstName}!</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white shadow-lg border-l-4 border-primary-color">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendor ID</CardTitle>
            <User className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{shortVendorId}</div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border-l-4 border-primary-color">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Store Name</CardTitle>
            <Store className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{storeName}</div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border-l-4 border-primary-color">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalItems}</div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border-l-4 border-primary-color">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Stock</CardTitle>
            <List className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalStock}</div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border-l-4 border-primary-color">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Tag className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{categories.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border-l-4 border-primary-color">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subcategories</CardTitle>
            <Layers className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{subcategories.length}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
