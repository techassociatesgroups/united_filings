
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, FileText, ArrowRightLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ShareTransfer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">IndiaFilings</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/company-compliance" className="hover:text-green-600">MCA Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Share Transfer</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-green-600">Share Transfer</CardTitle>
                <p className="text-gray-600">Transfer shares of your company with proper legal documentation and compliance.</p>
              </CardHeader>
              <CardContent>
                <img 
                  src="/assets/5297086e-acf0-4b80-ad21-5c2e95a411d8.png" 
                  alt="Share Transfer" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About Share Transfer</h3>
                    <p className="text-gray-600">
                      Share transfer involves the legal transfer of ownership of shares from one person to another. 
                      This process requires proper documentation and compliance with company law.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Our Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <ArrowRightLeft className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">Share transfer documentation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">Legal compliance support</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">MCA filing assistance</span>
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
                    <span className="text-sm">Processing Time: 10-15 days</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Start Share Transfer
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

export default ShareTransfer;
