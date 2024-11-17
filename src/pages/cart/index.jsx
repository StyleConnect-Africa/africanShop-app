
import React, { useState } from 'react';
import Navbar from '../landingPage/components/Navbar';
import ProductItem from './components/ProductItem';
import OrderSummary from './components/OrderSummary';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "P001",
      name: "Wireless Earbuds",
      image: "https://placehold.co/400",
      price: 79.99,
      quantity: 1,
    },
    {
      id: "P002",
      name: "Smart Watch",
      image: "https://placehold.co/400",
      price: 199.99,
      quantity: 1,
    },
    {
      id: "P003",
      name: "Portable Charger",
      image: "https://placehold.co/400",
      price: 49.99,
      quantity: 2,
    },
  ]);

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "P004",
      name: "Bluetooth Speaker",
      image: "https://placehold.co/400",
      price: 89.99,
      quantity: 1,
    },
  ]);

  const [currentPage, setCurrentPage] = useState('cart');

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToWishlist = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
    setWishlistItems([...wishlistItems, { ...product, quantity: 1 }]);
  };

  const moveToCart = (product) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            {currentPage === "cart" ? "Your Shopping Cart" : "Your Wishlist"}
          </h1>
          <div className="flex space-x-4">
            <Button
              variant={currentPage === "cart" ? "default" : "outline"}
              onClick={() => setCurrentPage("cart")}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              <Badge variant="seco">{cartItems.length}</Badge>
            </Button>
            <Button
              variant={currentPage === "wishlist" ? "default" : "outline"}
              onClick={() => setCurrentPage("wishlist")}
            >
              <Heart className="h-5 w-5 mr-2" />
              <Badge variant="secondary">{wishlistItems.length}</Badge>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {currentPage === "cart" && (
              <>
                {cartItems.map((item) => (
                  <ProductItem
                    key={item.id}
                    product={item}
                    updateQuantity={updateQuantity}
                    removeProduct={removeFromCart}
                    moveToWishlist={moveToWishlist}
                    isWishlist={false}
                  />
                ))}
                {cartItems.length === 0 && (
                  <p className="text-center text-gray-500">
                    Your cart is empty.
                  </p>
                )}
              </>
            )}
            {currentPage === "wishlist" && (
              <>
                {wishlistItems.map((item) => (
                  <ProductItem
                    key={item.id}
                    product={item}
                    updateQuantity={() => {}}
                    removeProduct={removeFromWishlist}
                    moveToWishlist={moveToCart}
                    isWishlist={true}
                  />
                ))}
                {wishlistItems.length === 0 && (
                  <p className="text-center text-gray-500">
                    Your wishlist is empty.
                  </p>
                )}
              </>
            )}
          </div>
          <div>
            {currentPage === "cart" && (
              <OrderSummary subtotal={subtotal} tax={tax} total={total} />
            )}
            {currentPage === "wishlist" && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Wishlist Summary</h2>
                <p className="text-gray-500 mb-4">
                  You have {wishlistItems.length} item(s) in your wishlist.
                </p>
                <Button
                  className="w-full"
                  onClick={() => setCurrentPage("cart")}
                >
                  Return to Cart
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

