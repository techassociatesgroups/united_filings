
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <img
          src="/assets/b86200c6-26c2-476e-a3ac-94747ba673dd.png"
          alt="Udyam Registration"
          className="rounded-lg shadow-md w-full"
        />
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Required Documents</h2>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>• Aadhaar Card</li>
            <li>• PAN Card</li>
            <li>• Business Registration Certificate</li>
            <li>• Investment Proof</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Udyam Registration</h1>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <span className="text-gray-600 ml-2 text-sm">(1,247)</span>
        </div>
        <p className="mt-4 text-gray-600">
          Get your business registered under Udyam Registration (formerly MSME Registration) for availing government benefits, subsidies, and easier access to credit facilities.
        </p>
        <div className="mt-6">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Registration Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="udyam-basic">Udyam Basic</SelectItem>
              <SelectItem value="udyam-premium">Udyam Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card className="border-green-500 border-2">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full inline-block">1 Exclusive Offers</div>
              <h3 className="font-bold mt-2">Udyam Basic</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                <li>Udyam Registration Certificate</li>
                <li>Government Fee Included</li>
                <li>Online Application</li>
                <li>Expert Assistance</li>
              </ul>
              <Button variant="outline" className="w-full mt-4 border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600">ADD</Button>
            </CardContent>
          </Card>
          <Card className="border-green-500 border-2">
            <CardContent className="p-4">
              <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full inline-block">1 Exclusive Offers</div>
              <h3 className="font-bold mt-2">Udyam Premium</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                <li>Complete Documentation</li>
                <li>Priority Processing</li>
                <li>Digital Certificate</li>
                <li>Post Registration Support</li>
                <li>Compliance Guidance</li>
              </ul>
              <Button variant="outline" className="w-full mt-4 border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600">ADD</Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-between text-sm text-blue-600 mt-4">
          <a href="#" className="hover:underline">Terms and conditions</a>
          <a href="#" className="hover:underline">Refer a Friend</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
