
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About Dormant Status Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Dormant company status allows inactive companies to reduce their compliance burden by filing minimal statutory returns and avoiding certain regulatory requirements.
              </p>
              <p className="text-gray-600">
                This status is ideal for companies that are not carrying on business operations but want to maintain their corporate existence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Reduced Compliance Burden</li>
                <li>• Lower Filing Requirements</li>
                <li>• Cost Savings</li>
                <li>• Legal Protection</li>
                <li>• Easy Reactivation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
