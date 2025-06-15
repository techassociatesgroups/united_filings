
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="/lovable-uploads/7d82b2a6-6f23-4acf-b266-3eb624fd2d46.png" 
            alt="ITR-1 Return Filing" 
            className="rounded-lg shadow-md w-full" 
          />
           <div className="mt-4 text-gray-600 space-y-2 text-sm">
                <p>Form 16</p>
                <p>Bank Statement</p>
                <p>Details of Other Income</p>
                <a href="#" className="text-blue-600 hover:underline">Load More</a>
            </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">ITR-1 Return Filing</h1>
           <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="ml-2 text-gray-600">(199)</span>
          </div>
          <p className="mt-4 text-gray-600">
            Income tax return filing for an individual with salary income of less than Rs.5 lakhs.
          </p>
          <Card className="mt-6 border-dashed border-orange-400">
              <CardContent className="p-4">
                 <div className="text-center bg-green-100 text-green-700 text-xs font-bold py-1 px-2 rounded-full mb-3 inline-block">2 Exclusive Offers</div>
                <h3 className="font-bold text-gray-800">Basic</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Tax Computation Sheet</span></li>
                  <li className="flex items-start"><ChevronRight className="h-4 w-4 mr-1 text-green-500 mt-1 flex-shrink-0" /> <span>Acknowledgement Copy</span></li>
                </ul>
                <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
              </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
