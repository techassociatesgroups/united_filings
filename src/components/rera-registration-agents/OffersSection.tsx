import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OffersSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Offers and discounts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img
              src="assets/Ledger.png"
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
