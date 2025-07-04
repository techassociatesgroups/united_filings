
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About Director Removal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Director removal is a legal process that involves the resignation or termination of a director from the company's board, requiring proper documentation and MCA filing.
              </p>
              <p className="text-gray-600">
                This process ensures compliance with corporate governance requirements and maintains the company's legal standing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Legal Compliance</li>
                <li>• Proper Documentation</li>
                <li>• MCA Filing Support</li>
                <li>• Expert Assistance</li>
                <li>• Quick Processing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
