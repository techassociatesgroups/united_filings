import { Card, CardContent } from "@/components/ui/card";

const OffersSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Offers and discounts
      </h2>
      <div className="space-y-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center">
            <img
              src="assets/ledger.png"
              alt="Ledgers Logo"
              className="h-10 w-auto mr-4"
            />
            <div>
              <p className="font-semibold text-gray-800">
                LEDGERS - Compliance Platform
              </p>
              <p className="text-sm text-gray-600">
                Invoicing, GST Filing, Banking and Payroll
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex items-center">
            <img src="assets/gst.jpg" alt="GIN" className="w-10 h-10 mr-4" />
            {/* <div className="h-10 w-10 mr-4 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              GIN
            </div> */}
            <div>
              {/* <img src="assets/gst.jpg" alt="GIN" className="w-10 h-10 mr-4" /> */}
              <p className="font-semibold text-gray-800">
                Save 18% with GST Registration
              </p>
              <p className="text-sm text-gray-600">
                Get GST elnvoice with Input Tax Credit
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OffersSection;
