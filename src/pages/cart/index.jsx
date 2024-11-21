import React, { useState } from 'react';
import Navbar from '../landingPage/components/Navbar';
import ProductItem from './components/ProductItem';
import OrderSummary from './components/OrderSummary';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <ProductItem
                key={item.id}
                product={item}
                updateQuantity={updateQuantity}
                removeProduct={removeFromCart}
              />
            ))}
            {cartItems.length === 0 && (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>
          <OrderSummary subtotal={subtotal} tax={tax} total={total} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

