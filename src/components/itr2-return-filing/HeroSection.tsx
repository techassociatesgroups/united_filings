
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">ITR-2 Return Filing</h1>
          <p className="text-blue-100 mb-6">
            File ITR-2 for individuals with capital gains, multiple house properties, and foreign income.
          </p>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm">Expert Assistance</span>
          </div>

          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
            File ITR-2
          </Button>
        </div>
        <div className="relative p-8">
          <img 
            src="/lovable-uploads/b3d90403-a3c9-455a-89d1-f26b7b7c0a1b.png" 
            alt="ITR-2 Filing" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
