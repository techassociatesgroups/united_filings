
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About DPT-3 Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                DPT-3 is a mandatory annual return filed by companies that have accepted deposits from the public or shareholders, ensuring compliance with deposit regulations.
              </p>
              <p className="text-gray-600">
                This filing helps maintain transparency in deposit acceptance and ensures adherence to the Companies Act provisions regarding deposits.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Regulatory Compliance</li>
                <li>• Deposit Transparency</li>
                <li>• Penalty Avoidance</li>
                <li>• Legal Documentation</li>
                <li>• Professional Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
