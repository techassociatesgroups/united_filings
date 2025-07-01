
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface AddToCartButtonProps {
  serviceName: string;
  price: number;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const AddToCartButton = ({ serviceName, price, className, variant = "default" }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const serviceId = `service-${serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
    
    addToCart({
      id: serviceId,
      name: serviceName,
      price: price
    });
    
    toast.success(`${serviceName} added to cart!`, {
      description: `Price: ₹${price.toLocaleString()}`,
    });
  };

  return (
    <Button 
      className={className}
      variant={variant}
      onClick={handleAddToCart}
    >
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;
