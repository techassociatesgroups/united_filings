
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="/lovable-uploads/9c0f84ca-c185-424c-80c4-a8c6bfe6c96b.png" 
            alt="Business Tax Filing" 
            className="rounded-lg shadow-md w-full" 
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Business Tax Filing</h1>
          <p className="mt-4 text-gray-600">
            Consult experienced professionals on accounting, tax, legal and business matters.
          </p>
          <div className="mt-6">
            <Select defaultValue="consultation">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consultation">30 Minutes - Tax Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border-green-500 border-2">
          <CardContent className="p-4">
            <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">2 Exclusive Offers</div>
            <h3 className="font-bold text-gray-800">30 Minutes - Tax Consultation</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Tax Consultation</span></li>
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Business Consultation</span></li>
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Legal Consultation</span></li>
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Experienced Professionals</span></li>
            </ul>
            <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">2 Exclusive Offers</div>
            <h3 className="font-bold text-gray-800">Tax Notice Response</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Professional Consultation</span></li>
                <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Reply Drafting</span></li>
                <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Reply Submission</span></li>
            </ul>
            <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
