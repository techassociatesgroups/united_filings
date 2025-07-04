
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About ADT-1 Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                ADT-1 is a mandatory form filed with MCA for the appointment of auditors in companies. It ensures compliance with statutory audit requirements under the Companies Act.
              </p>
              <p className="text-gray-600">
                This filing is crucial for maintaining corporate governance and ensuring proper financial oversight of your company operations.
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
                <li>• Auditor Appointment</li>
                <li>• Legal Documentation</li>
                <li>• MCA Compliance</li>
                <li>• Expert Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
