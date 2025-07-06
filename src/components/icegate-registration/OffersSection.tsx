import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const OffersSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'icegate-registration',
      name: 'ICEGATE Registration',
      price: 1499
    });
    toast.success('ICEGATE Registration added to cart!');
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Offers and discounts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">ICEGATE Registration</h3>
            <span className="text-lg font-bold text-green-600">₹1,499</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-4">
            <li>• Complete ICEGATE registration process</li>
            <li>• Document preparation and submission</li>
            <li>• User ID and password setup</li>
            <li>• Training on platform usage</li>
          </ul>
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium"
          >
            Add to Cart
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img
              src="assets/ledger.png"
              alt="LEDGERS Logo"
              className="h-10 w-10 mr-4"
            />
            <div>
              <p className="font-bold">LEDGERS - Compliance Platform</p>
              <p className="text-sm text-gray-600">
                Invoicing, GST Filing, Banking and Payroll
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OffersSection;
