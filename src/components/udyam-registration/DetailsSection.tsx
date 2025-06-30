
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const DetailsSection = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-green-600">About Udyam Registration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Udyam Registration is a government registration for Micro, Small and Medium Enterprises (MSMEs) in India. 
            It replaced the earlier system of MSME registration and provides a single registration process for all MSME-related registrations.
          </p>
          <p className="text-gray-600">
            This registration enables businesses to avail various government schemes, subsidies, and benefits specifically designed for MSMEs.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-green-600">Benefits of Udyam Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">Easy access to government schemes and subsidies</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">Priority lending from banks and financial institutions</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">Protection against delayed payment from buyers</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">Lower interest rates on loans</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">Tax benefits and exemptions</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">Preference in government tenders</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-green-600">Eligibility Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Micro Enterprise</h4>
              <p className="text-gray-600">Investment in plant & machinery: Up to ₹1 crore, Annual turnover: Up to ₹5 crore</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Small Enterprise</h4>
              <p className="text-gray-600">Investment in plant & machinery: Up to ₹10 crore, Annual turnover: Up to ₹50 crore</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Medium Enterprise</h4>
              <p className="text-gray-600">Investment in plant & machinery: Up to ₹50 crore, Annual turnover: Up to ₹250 crore</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsSection;
