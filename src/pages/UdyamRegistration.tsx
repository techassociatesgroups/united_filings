
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UdyamRegistration = () => {
  const [companyRegQuantity, setCompanyRegQuantity] = useState(1);
  const [proprietorshipQuantity, setProprietorshipQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-700">IndiaFilings</Link>
          <span className="mx-2">/</span>
          <Link to="/registrations" className="hover:text-gray-700">Registrations</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-700">UDYAM Registration</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">UDYAM Registration</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-600">PAN Card</span>
                <span className="text-gray-600">Aadhaar Card</span>
                <Button variant="link" className="text-blue-600 p-0">Load More</Button>
              </div>
              <p className="text-gray-600 mb-4">
                Get UDYAM registration for your business with the LEDGERS platform to track compliance.
              </p>
              <Badge variant="secondary" className="mb-4">⭐ (9027)</Badge>
            </div>

            {/* Offers Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2">2 Exclusive Offers</Badge>
                      <CardTitle className="text-lg">UDYAM + LEDGERS</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Application Preparation</li>
                    <li>• Application Submission</li>
                    <li>• UDYAM Number</li>
                    <li>• UDYAM Certificate</li>
                  </ul>
                  <Button className="w-full">ADD</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2">2 Exclusive Offers</Badge>
                      <CardTitle className="text-lg">UDYAM + Trademark</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Government Fee</li>
                    <li>• Trademark Filing</li>
                    <li>• 1 Trademark Class</li>
                    <li>• Individuals & MSMEs</li>
                    <li>• UDYAM Registration</li>
                  </ul>
                  <Button className="w-full">ADD</Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Article */}
            <div className="prose max-w-none">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold">RAJESH KUMAR PATRA</p>
                    <p className="text-sm text-gray-600">Business Advisor</p>
                    <p className="text-xs text-gray-500">Updated on: Apr 15, 2025</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Udyam Registration</h2>
              <p className="mb-4">
                In today's competitive business landscape, it is crucial for small and medium-sized enterprises (SMEs) to leverage government initiatives that streamline operations, offer benefits, and provide formal recognition. One such initiative by the Government of India is Udyog Aadhar registration, now known as Udyam registration.
              </p>
              <p className="mb-6">
                IndiaFilings is your trusted partner when it comes to simplifying the Udyam Aadhaar registration process. Our dedicated team of experts is well-versed in the intricacies of the Udyam Aadhar registration online process and can help your business secure its Udyam Certificate and Registration Number swiftly and seamlessly.
              </p>

              <h3 className="text-xl font-bold mb-3">What is Udyam Registration?</h3>
              <p className="mb-6">
                Udyam Registration is an official process initiated by the Ministry of Micro, Small, and Medium Enterprises (MSMEs), Government of India, for the formal registration of micro, small, and medium enterprises (MSMEs). Introduced on July 1, 2020, it replaced the earlier Udyog Aadhar Memorandum (UAM) system.
              </p>

              <h3 className="text-xl font-bold mb-3">MSME Registration Online Benefits</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Special Preference in Government Tenders:</strong> Registered Udyam enterprises receive preferential treatment in government procurement processes.</li>
                <li><strong>Access to Collateral-Free Bank Loans:</strong> Udyam Registration facilitates access to bank loans without the need for collateral.</li>
                <li><strong>Interest Rate Exemption:</strong> Eligible for a 1% interest rate exemption on bank overdrafts.</li>
                <li><strong>Eligibility for Tax Rebates:</strong> Registered enterprises can benefit from various tax rebates.</li>
                <li><strong>Priority in Licensing:</strong> Priority consideration for obtaining government licenses and certifications.</li>
                <li><strong>Tariff and Capital Subsidies:</strong> Eligible for tariff subsidies as well as tax and capital subsidies.</li>
                <li><strong>Electricity Bill Discounts:</strong> Receive discounts on electricity bills.</li>
                <li><strong>Protection Against Delayed Payments:</strong> Protection against delayed payments from buyers.</li>
                <li><strong>Trademark and Patent Discounts:</strong> 50% discount on government fees for filing trademarks and patents.</li>
                <li><strong>Expedited Dispute Resolution:</strong> Faster resolution of disputes.</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Who can Apply for Udyam Registration?</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Proprietorships</li>
                <li>Hindu Undivided Family (HUF)</li>
                <li>Partnership Firm</li>
                <li>One Person Company (OPC)</li>
                <li>Private Limited Company</li>
                <li>Public Limited Company</li>
                <li>Producer Company</li>
                <li>Limited Liability Partnership (LLP)</li>
                <li>Any Association of Persons</li>
                <li>Co-operative Societies</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Eligibility Criteria for Udyam Registration</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Enterprise Type</th>
                      <th className="border border-gray-300 p-3 text-left">Investment Criteria</th>
                      <th className="border border-gray-300 p-3 text-left">Annual Turnover Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Micro Enterprise</td>
                      <td className="border border-gray-300 p-3">Up to Rs. 1 crore</td>
                      <td className="border border-gray-300 p-3">Not exceeding Rs. 5 crore</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Small Enterprise</td>
                      <td className="border border-gray-300 p-3">Up to Rs. 10 crore</td>
                      <td className="border border-gray-300 p-3">Not exceeding Rs. 50 crore</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Medium Enterprise</td>
                      <td className="border border-gray-300 p-3">Up to Rs. 50 crore</td>
                      <td className="border border-gray-300 p-3">Not exceeding Rs. 250 crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-3">Revised Classification Criteria for MSMEs</h3>
              <p className="mb-4">
                In the Union Budget 2025, the government announced a significant revision in the classification criteria for MSMEs. The investment limit has been increased by 2.5 times, while turnover limits have been doubled.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Enterprise Category</th>
                      <th className="border border-gray-300 p-3 text-left">Revised Investment Limit</th>
                      <th className="border border-gray-300 p-3 text-left">Revised Turnover Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Micro Enterprise</td>
                      <td className="border border-gray-300 p-3">Rs. 2.5 crore</td>
                      <td className="border border-gray-300 p-3">Rs. 10 crore</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Small Enterprise</td>
                      <td className="border border-gray-300 p-3">Rs. 25 crore</td>
                      <td className="border border-gray-300 p-3">Rs. 100 crore</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Medium Enterprise</td>
                      <td className="border border-gray-300 p-3">Rs. 125 crore</td>
                      <td className="border border-gray-300 p-3">Rs. 500 crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-3">Documents Required for Udyam Registration</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>PAN Card Number:</strong> The Permanent Account Number of the business or proprietor</li>
                <li><strong>Aadhaar Number:</strong> Required based on business type (proprietor, managing partner, or authorized signatory)</li>
                <li><strong>GST Number (if applicable):</strong> Mandatory only for enterprises that require GST registration</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">How to Get Udyam Registration Online?</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Visit the official Udyam Registration Portal</li>
                <li>Click on "For New Entrepreneurs who are not registered yet as MSME"</li>
                <li>Enter Aadhaar Number and Name, then validate with OTP</li>
                <li>Complete PAN verification with organization type and PAN number</li>
                <li>Fill the registration form with enterprise details</li>
                <li>Provide investment and turnover details</li>
                <li>Submit the application and receive the final OTP</li>
                <li>Complete registration and receive the e-certificate via email</li>
              </ol>

              <h3 className="text-xl font-bold mb-3">Validity of Udyam Certificate</h3>
              <p className="mb-6">
                The Udyam Registration Certificate is valid for a lifetime and does not require renewal, provided the enterprise continues to meet the classification criteria for MSMEs.
              </p>

              <h3 className="text-xl font-bold mb-3">Simplify Udyam Registration with IndiaFilings!</h3>
              <p className="mb-6">
                To obtain Udyam Registration through IndiaFilings, simply follow our streamlined process designed to make MSME registration quick and hassle-free. Our experts will handle the complexities, ensuring accurate registration without confusion.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Cart Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Cart</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex-1">
                      <p className="font-medium">Company Registration</p>
                      <p className="text-sm text-gray-600">Name Approval</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setCompanyRegQuantity(Math.max(1, companyRegQuantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{companyRegQuantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setCompanyRegQuantity(companyRegQuantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex-1">
                      <p className="font-medium">Proprietorship</p>
                      <p className="text-sm text-gray-600">GST Software & Registration</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setProprietorshipQuantity(Math.max(1, proprietorshipQuantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{proprietorshipQuantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setProprietorshipQuantity(proprietorshipQuantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Get Started</CardTitle>
                  <p className="text-sm text-gray-600">Existing User? Login</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex">
                      <select className="p-3 border border-gray-300 rounded-l-md border-r-0">
                        <option>+91</option>
                      </select>
                      <input 
                        type="tel" 
                        placeholder="Phone" 
                        className="flex-1 p-3 border border-gray-300 rounded-r-md"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Enter GSTIN to get 18% GST Credit" 
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Get Started
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/digital-signature" className="block text-blue-600 hover:underline">
                      Digital Signature
                    </Link>
                    <Link to="/fssai-registration" className="block text-blue-600 hover:underline">
                      FSSAI Registration
                    </Link>
                    <Link to="/trademark-registration" className="block text-blue-600 hover:underline">
                      Trademark Registration
                    </Link>
                    <Link to="/gst-registration" className="block text-blue-600 hover:underline">
                      GST Registration
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UdyamRegistration;
