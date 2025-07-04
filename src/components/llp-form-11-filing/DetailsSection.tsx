
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About LLP Form 11 Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                LLP Form 11 is the annual return that every Limited Liability Partnership must file with the Registrar of Companies within 60 days of closing of financial year.
              </p>
              <p className="text-gray-600">
                This mandatory filing ensures compliance with LLP regulations and maintains the legal standing of your Limited Liability Partnership.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Statutory Compliance</li>
                <li>• Annual Return Filing</li>
                <li>• Penalty Avoidance</li>
                <li>• Legal Standing</li>
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
