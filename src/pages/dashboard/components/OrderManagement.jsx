// src/pages/dashboard/components/OrderManagement.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const OrderManagement = () => (
  <Card className="bg-white shadow-md border-l-4 border-primary-color">
    <CardHeader>
      <CardTitle>Order Management</CardTitle>
      <CardDescription>Manage your orders here</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Order management functionality coming soon...</p>
    </CardContent>
  </Card>
);

export default OrderManagement;
