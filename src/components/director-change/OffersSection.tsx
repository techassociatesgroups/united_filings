
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OffersSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Special Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <img src="https://indiafilings.com/images/yes-bank-current-account.svg" alt="YES Bank Logo" className="h-10 w-10 mr-4" />
                  <div>
                    <p className="font-bold">YES Bank Current Account</p>
                    <p className="text-sm text-gray-600">Lifetime zero-balance account for IndiaFilings customers</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OffersSection;
