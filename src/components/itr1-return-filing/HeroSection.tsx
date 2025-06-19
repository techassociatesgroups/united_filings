
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">File Income Tax Return</h1>
          <p className="text-blue-100 mb-6">
            Save the year income tax assessment with IndiaFilings. Get expert help with Filing, tax planning, 
            and compliance - all in one place.
          </p>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm">Expert Assistance</span>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <h3 className="font-semibold mb-3">ITR-1 RETURN FILING</h3>
              <p className="text-sm text-blue-100 mb-3">
                Here are some to select from for an individual taxpayer having income of less than 
                Rs 50 lakhs.
              </p>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Complete Compliance with Tax Laws</li>
                <li>• Fast and Easy Filing</li>
                <li>• Professional Legal Assistance</li>
                <li>• User-Friendly Dashboard</li>
                <li>• Protected and Confidential</li>
              </ul>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
              File ITR
            </Button>
          </div>
        </div>
        <div className="relative p-8">
          <img 
            src="/lovable-uploads/b3d90403-a3c9-455a-89d1-f26b7b7c0a1b.png" 
            alt="ITR Filing" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
