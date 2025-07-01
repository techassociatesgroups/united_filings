
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddToCartButton from '@/components/AddToCartButton';
import CartIcon from '@/components/CartIcon';

const Sidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      {/* Cart Icon */}
      <div className="flex justify-end mb-4">
        <CartIcon />
      </div>

      <div className="text-center mb-6">
        <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Add Services to Cart</h3>
        <p className="mt-1 text-sm text-gray-500">Browse our services and add them to your cart!</p>
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
        
        {/* Main LLP Registration Service */}
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-2">LLP Registration</h4>
          <p className="text-sm text-gray-600 mb-3">Complete LLP registration package</p>
          <AddToCartButton 
            serviceName="Limited Liability Partnership Registration" 
            price={4999}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base" 
          />
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
