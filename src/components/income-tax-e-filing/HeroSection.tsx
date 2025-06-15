
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="/lovable-uploads/da7055c7-cd54-439f-b18f-5e0ab62166f6.png" 
            alt="Income Tax E-Filing" 
            className="rounded-lg shadow-md w-full" 
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Income Tax E-Filing</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(7654)</span>
          </div>
          <p className="mt-4 text-gray-600">
            E-file your income tax return (ITR) online through IndiaFilings quickly at lowest price. Get support from income tax experts for ITR filing.
          </p>

          <div className="mt-6">
            <Select defaultValue="salaried">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salaried">Salaried person</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border-green-500 border-2">
          <CardContent className="p-4">
            <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">2 Exclusive Offers</div>
            <h3 className="font-bold text-gray-800">Salaried person</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Income Tax computation</span></li>
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Income Tax Saral copy</span></li>
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Tax Consultation</span></li>
              <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>E Filing</span></li>
            </ul>
            <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
          </CardContent>
        </Card>
        <Card>
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
      </div>
    </section>
  );
};

export default HeroSection;
