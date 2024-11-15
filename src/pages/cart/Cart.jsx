import React, { useState } from 'react';
import Navbar from '../landingPage/components/Navbar';
import { Plus, Minus, X, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductItem = ({ product, updateQuantity, removeProduct }) => (
  <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-md">
    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
    <div className="flex-grow">
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">Product ID: {product.id}</p>
      <p className="font-medium">${product.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, -1)} className="h-8 w-8 rounded-full">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center">{product.quantity}</span>
      <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, 1)} className="h-8 w-8 rounded-full">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
    <Button variant="ghost" size="icon" onClick={() => removeProduct(product.id)} className="text-red-500 hover:text-red-700">
      <X className="h-5 w-5" />
    </Button>
  </div>
);

const OrderSummary = ({ subtotal, tax, total }) => (
  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Tax</span>
      <span>${tax.toFixed(2)}</span>
    </div>
    <div className="flex justify-between font-semibold text-lg">
      <span>Total</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <Button className="w-full" size="lg">
      <ShoppingBag className="mr-2 h-5 w-5" /> Proceed to Checkout
    </Button>
    <a href="#" className="block text-center text-blue-500 hover:underline mt-4">
      Continue Shopping
    </a>
  </div>
);

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 'P001', name: 'Wireless Earbuds', image: '/placeholder.svg?height=80&width=80', price: 79.99, quantity: 1 },
    { id: 'P002', name: 'Smart Watch', image: '/placeholder.svg?height=80&width=80', price: 199.99, quantity: 1 },
    { id: 'P003', name: 'Portable Charger', image: '/placeholder.svg?height=80&width=80', price: 49.99, quantity: 2 },
  ]);

  const updateQuantity = (id, change) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: Math.max(0, product.quantity + change) } : product
    ));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {products.map(product => (
              <ProductItem key={product.id} product={product} updateQuantity={updateQuantity} removeProduct={removeProduct} />
            ))}
          </div>
          <OrderSummary subtotal={subtotal} tax={tax} total={total} />
        </div>
      </div>
    </div>
  );
};

export default Cart;