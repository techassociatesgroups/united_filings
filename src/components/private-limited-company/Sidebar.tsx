
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const Sidebar = () => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: 'private-limited-company',
      name: 'Private Limited Company Registration',
      price: 6999,
      category: 'Business Registration'
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      <div className="text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Company Registration</h3>
        <p className="mt-1 text-sm text-gray-500">Complete private limited company setup</p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-green-600">₹6,999</span>
          <span className="text-sm text-gray-500 line-through ml-2">₹12,999</span>
        </div>
      </div>

      <div className="mt-6 text-sm text-center">
        <span className="text-gray-600">Existing User? </span>
        <Link to="/auth" className="font-medium text-green-600 hover:text-green-700">Login</Link>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <Input type="text" placeholder="Name" />
        </div>
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="flex">
            <Input type="text" value="+91" readOnly className="w-16 rounded-r-none bg-gray-100 text-center" />
            <Input type="tel" placeholder="Phone" className="rounded-l-none" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="gst-credit" />
          <Label htmlFor="gst-credit" className="text-sm font-normal text-gray-600 cursor-pointer">Enter GSTIN to get 18% GST Credit</Label>
        </div>
        <Button 
          type="button" 
          onClick={handleAddToCart}
          className={`w-full font-bold text-base ${
            isAdded 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
          size="lg"
        >
          {isAdded ? 'Added to Cart!' : 'Add to Cart'}
        </Button>
      </form>
    </div>
  );
};

export default Sidebar;
