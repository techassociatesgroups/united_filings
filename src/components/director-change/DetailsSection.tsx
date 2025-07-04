
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About Director Change</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Director change involves the appointment or resignation of directors in a company, requiring proper documentation and compliance with MCA regulations.
              </p>
              <p className="text-gray-600">
                This process ensures legal compliance and maintains good corporate governance standards for your business operations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Legal Compliance with MCA</li>
                <li>• Proper Documentation</li>
                <li>• Smooth Transition Process</li>
                <li>• Expert Guidance</li>
                <li>• Timely Filing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
