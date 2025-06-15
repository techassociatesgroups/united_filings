
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-5 flex items-center justify-center p-4 bg-black">
           <img src="/lovable-uploads/f62727c9-ecf9-47ea-9ce0-1436d690d7b5.png" alt="Barcode Registration" className="object-contain rounded-lg max-h-[450px]" />
        </div>
        <div className="md:col-span-7 p-8">
          <h1 className="text-2xl font-bold">Barcode Registration</h1>
          <div className="flex items-center my-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
            <Star className="h-5 w-5 text-gray-300" />
            <span className="ml-2 text-sm text-gray-600">(13)</span>
          </div>
          <p className="text-gray-600 mb-4">
            100 Barcodes with a validity of 1 year having a turnover of up to 5 crores.
          </p>

          <Select defaultValue="basic">
            <SelectTrigger className="w-[180px] mb-4">
              <SelectValue placeholder="Basic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-dashed border-green-500">
                <CardContent className="p-4">
                    <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">2 Exclusive Offers</div>
                    <h3 className="font-bold mb-2">Basic</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Preparation</li>
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Filing</li>
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Barcode Allotment Number</li>
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Barcode Login credentials</li>
                    </ul>
                    <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
                </CardContent>
            </Card>
            <Card className="border-dashed border-green-500">
                <CardContent className="p-4">
                    <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">2 Exclusive Offers</div>
                    <h3 className="font-bold mb-2">Standard</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Preparation</li>
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Application Filing</li>
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Barcode Allotment Number</li>
                        <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-1 text-green-500" />Barcode Login credentials</li>
                    </ul>
                    <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
                </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-between items-center mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;

