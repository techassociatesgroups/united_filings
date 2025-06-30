import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const DormantStatusFiling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">CA PI</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/company-compliance" className="hover:text-blue-600">MCA Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Dormant Status Filing</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-blue-600">Dormant Status Filing</CardTitle>
                <p className="text-gray-600">File for dormant company status to comply with MCA requirements for inactive companies.</p>
              </CardHeader>
              <CardContent>
                <img 
                  src="/assets/5297086e-acf0-4b80-ad21-5c2e95a411d8.png" 
                  alt="Dormant Status Filing" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About Dormant Status Filing</h3>
                    <p className="text-gray-600">
                      A company can apply for dormant status if it has been formed for a future project or 
                      to hold an asset but is not actively carrying on business operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                        <span className="text-gray-600">Reduced compliance requirements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
                        <span className="text-gray-600">MCA compliance for inactive companies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                        <span className="text-gray-600">Legal protection during inactivity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">Get Started</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Processing Time: 10-15 days</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Apply for Dormant Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DormantStatusFiling;
