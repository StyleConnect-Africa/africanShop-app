import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderSummary = ({ subtotal, tax, total }) => {
  const handleCheckout = () => {
    try {
      // Implement checkout functionality
      console.log("Proceeding to checkout");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
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
      <Button className="w-full" size="lg" onClick={handleCheckout}>
        <ShoppingBag className="mr-2 h-5 w-5" /> Proceed to Checkout
      </Button>
      <a
        href="#"
        className="block text-center text-blue-500 hover:underline mt-4"
      >
        Continue Shopping
      </a>
    </div>
  );
};

export default OrderSummary;
