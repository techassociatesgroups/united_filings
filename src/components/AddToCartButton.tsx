
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

interface AddToCartButtonProps {
  serviceName: string;
  price: number;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const AddToCartButton = ({ serviceName, price, className, variant = "default" }: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: `service-${serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
      name: serviceName,
      price: price
    });
    
    toast({
      title: "Added to Cart",
      description: `${serviceName} has been added to your cart.`,
    });
  };

  return (
    <Button 
      className={className}
      variant={variant}
      onClick={handleAddToCart}
    >
      ADD
    </Button>
  );
};

export default AddToCartButton;
