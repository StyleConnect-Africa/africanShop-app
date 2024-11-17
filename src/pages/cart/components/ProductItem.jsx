
import { Plus, Minus, X, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductItem = ({
  product,
  updateQuantity,
  removeProduct,
  moveToWishlist,
  isWishlist,
}) => (
  <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-md">
    <img
      src={product.image}
      alt={product.name}
      className="w-20 h-20 object-cover rounded"
    />
    <div className="flex-grow">
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">Product ID: {product.id}</p>
      <p className="font-medium">${product.price.toFixed(2)}</p>
    </div>
    {!isWishlist && (
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(product.id, -1)}
          className="h-8 w-8 rounded-full"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{product.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(product.id, 1)}
          className="h-8 w-8 rounded-full"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    )}
    <Button
      variant="ghost"
      size="icon"
      onClick={() => removeProduct(product.id)}
      className="text-red-500 hover:text-red-700"
    >
      <X className="h-5 w-5" />
    </Button>
    <Button
      variant="ghost"
      size="icon"
      onClick={() => moveToWishlist(product)}
      className="text-primary hover:text-primary-foreground"
    >
      {isWishlist ? (
        <ShoppingBag className="h-5 w-5" />
      ) : (
        <Heart className="h-5 w-5" />
      )}
    </Button>
  </div>
);

export default ProductItem;
