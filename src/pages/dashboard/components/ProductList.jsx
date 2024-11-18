// src/pages/dashboard/components/ProductList.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ProductItem from "@/pages/cart/components/ProductItem";

const ProductList = () => (
  <Card className="bg-white shadow-md border-l-4 border-primary-color">
    <CardHeader>
      <CardTitle>Product List</CardTitle>
      <CardDescription>View and manage your products</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Product listing functionality coming soon...</p>
    </CardContent>
  </Card>
);

export default ProductList;
