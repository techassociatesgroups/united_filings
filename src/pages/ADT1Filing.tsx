
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ADT1Filing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">IndiaFilings</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/company-compliance" className="hover:text-green-600">MCA Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">ADT-1 Filing</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-green-600">ADT-1 Filing</CardTitle>
                <p className="text-gray-600">File ADT-1 form for appointment of auditors in your company as per Companies Act requirements.</p>
              </CardHeader>
              <CardContent>
                <img 
                  src="/assets/5297086e-acf0-4b80-ad21-5c2e95a411d8.png" 
                  alt="ADT-1 Filing" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About ADT-1 Filing</h3>
                    <p className="text-gray-600">
                      ADT-1 is a mandatory form to be filed with the MCA for appointment of auditors. 
                      It must be filed within 15 days of the appointment of the auditor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">Mandatory compliance filing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">Auditor appointment documentation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">Timely submission to avoid penalties</span>
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
                <CardTitle className="text-lg text-green-600">Get Started</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Processing Time: 3-5 days</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    File ADT-1
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

export default ADT1Filing;
