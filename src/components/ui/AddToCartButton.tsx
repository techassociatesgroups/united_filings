import { Button } from "@/components/ui/button";
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface AddToCartButtonProps {
  service: {
    id: string;
    name: string;
    price: number;
  };
  variant?: "default" | "outline";
  className?: string;
  children?: React.ReactNode;
}

const AddToCartButton = ({ 
  service, 
  variant = "default", 
  className = "", 
  children = "ADD TO CART" 
}: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(service);
    toast.success(`${service.name} added to cart!`);
  };

  return (
    <Button 
      onClick={handleAddToCart}
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
};

export default AddToCartButton;