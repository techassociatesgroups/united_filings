
import AddToCartButton from "@/components/AddToCartButton";

const OffersSection = () => {
  return (
    <section>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Our GST Registration Services for Foreigners</h2>
        <div className="border rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">GST Registration for Foreigners</h3>
            <span className="text-lg font-bold text-green-600">₹5,999</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-4">
            <li>• Complete documentation assistance</li>
            <li>• Foreign entity compliance</li>
            <li>• Application filing and follow-up</li>
            <li>• Expert consultation</li>
          </ul>
          <AddToCartButton 
            serviceName="GST Registration for Foreigners" 
            price={5999}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-6 text-sm">
        <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
        <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Offers and discounts</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 flex items-center">
            <img src="/lovable-uploads/b86200c6-26c2-476e-a3ac-94747ba673dd.png" alt="Ledgers Logo" className="h-10 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">LEDGERS - Compliance Platform</h3>
              <p className="text-sm text-gray-600">Invoicing, GST Filing, Banking and Payroll</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
