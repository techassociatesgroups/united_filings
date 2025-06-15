
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingBag } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      <Card>
        <CardContent className="p-6 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-xl font-semibold">Your cart is empty</h3>
          <p className="mt-1 text-sm text-gray-500">
            Browse our services and add some services in cart!
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-gray-600">
            Existing User? <a href="#" className="text-green-600 font-semibold">Login</a>
          </p>
          <form className="mt-4 space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <div className="flex">
                <div className="flex items-center border rounded-l-md bg-gray-100 px-3 text-sm">+91</div>
                <Input type="tel" placeholder="Phone" className="rounded-l-none"/>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="gst-credit" />
                <label
                    htmlFor="gst-credit"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Enter GSTIN to get 18% GST Credit
                </label>
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
              Get Started
            </Button>
          </form>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
