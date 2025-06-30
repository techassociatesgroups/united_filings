
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddToCartButton from "@/components/AddToCartButton";

const OffersSection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Our Halal Certification Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Halal Certification</h3>
            <span className="text-lg font-bold text-green-600">₹7,999</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-4">
            <li>• Complete documentation preparation</li>
            <li>• Expert consultation</li>
            <li>• Application filing</li>
            <li>• Follow-up until certification</li>
          </ul>
          <AddToCartButton 
            serviceName="Halal Certification" 
            price={7999}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          />
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img src="https://indiafilings.com/images/ledgers-compliance-platform.svg" alt="LEDGERS Logo" className="h-10 w-10 mr-4" />
            <div>
              <p className="font-bold">LEDGERS - Compliance Platform</p>
              <p className="text-sm text-gray-600">Invoicing, GST Filing, Banking and Payroll</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img src="https://indiafilings.com/images/gst-input-tax-credit.svg" alt="GST Logo" className="h-10 w-10 mr-4" />
            <div>
              <p className="font-bold">Save 18% with GST Registration</p>
              <p className="text-sm text-gray-600">Get GST eInvoice with Input Tax Credit</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OffersSection;
