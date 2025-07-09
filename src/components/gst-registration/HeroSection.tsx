
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              GST Registration Online
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Get your GST registration done hassle-free with expert guidance and complete documentation support.
            </p>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span className="text-gray-600 ml-2 text-sm">(4.8/5 based on 1200+ reviews)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Basic GST Registration</CardTitle>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-3">₹1,999</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      GST Registration Application
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Expert Consultation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Document Preparation
                    </li>
                  </ul>
                  <AddToCartButton
                    service={{
                      id: "gst-registration-basic",
                      name: "Basic GST Registration",
                      price: 1999
                    }}
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                  >
                    ADD TO CART
                  </AddToCartButton>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Premium GST Package</CardTitle>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-3">₹3,999</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Everything in Basic
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      GST Return Filing (3 months)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Compliance Support
                    </li>
                  </ul>
                  <AddToCartButton
                    service={{
                      id: "gst-registration-premium",
                      name: "Premium GST Package",
                      price: 3999
                    }}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    ADD TO CART
                  </AddToCartButton>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <img
              src="assets/gst.jpg"
              alt="GST Registration"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
