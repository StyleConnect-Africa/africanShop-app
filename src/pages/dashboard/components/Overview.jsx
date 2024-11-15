// src/pages/dashboard/components/Overview.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, List, DollarSign, TrendingUp, User, Tag } from "lucide-react";

const Overview = ({ totalItems, totalStock, totalSales, growthRate, vendorId, productName, productCategory, productPrice }) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
        <DollarSign className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">${totalSales}</div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border-l-4 border-primary-color">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
        <TrendingUp className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{growthRate}%</div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border-l-4 border-primary-color">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Vendor ID</CardTitle>
        <User className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold">{vendorId}</div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border-l-4 border-primary-color">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Product Name</CardTitle>
        <Tag className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold">{productName}</div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border-l-4 border-primary-color">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Category</CardTitle>
        <Tag className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold">{productCategory}</div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border-l-4 border-primary-color">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Price</CardTitle>
        <DollarSign className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold">${productPrice}</div>
      </CardContent>
    </Card>
    {/* Add more overview cards here */}
  </div>
);

export default Overview;
