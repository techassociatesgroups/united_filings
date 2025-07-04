
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "dpt-3-filing",
      name: "DPT-3 Filing",
      price: 4499,
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DPT-3 Filing Service
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Professional DPT-3 form filing service for deposit acceptance by companies. Ensure compliance with deposit regulations and avoid penalties.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹4,499</span>
              <span className="text-gray-500 line-through">₹6,999</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">36% OFF</span>
            </div>
            <Button onClick={handleAddToCart} className="mt-6 bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• DPT-3 Form Preparation</li>
                  <li>• Deposit Return Filing</li>
                  <li>• Compliance Verification</li>
                  <li>• Board Resolution Support</li>
                  <li>• MCA Filing Assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
