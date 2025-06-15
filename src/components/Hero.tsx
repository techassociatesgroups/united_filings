
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "TDS Filing & Form 16 Issuance",
      subtitle: "Simplify with IndiaFilings",
      image: "/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png"
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Carousel */}
        <div className="relative bg-gradient-to-r from-green-100 to-green-50 rounded-lg mx-4 my-6 overflow-hidden">
          <div className="flex items-center justify-between p-8 lg:p-12">
            {/* Left Arrow */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors z-10">
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="flex-1 z-10">
              <div className="bg-black/70 text-white p-6 rounded-lg max-w-md">
                <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg text-gray-200">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>

            {/* Right side image area */}
            <div className="flex-1 flex justify-end items-center">
              <div className="relative">
                <img 
                  src={slides[currentSlide].image}
                  alt="Professional services"
                  className="w-full max-w-md h-64 object-cover rounded-lg"
                />
                {/* App download badges */}
                <div className="absolute bottom-4 right-4 bg-black/70 p-3 rounded-lg">
                  <p className="text-white text-sm mb-2">Download our App</p>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 bg-black text-white px-3 py-1 rounded text-xs">
                      <Download className="h-4 w-4" />
                      <span>Google Play</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-black text-white px-3 py-1 rounded text-xs">
                      <Download className="h-4 w-4" />
                      <span>App Store</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors z-10">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Service Categories */}
        <div className="px-4 pb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Explore our digital services stack
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Grow your business and remain compliant by partnering with IndiaFilings for a range of high quality, business services from incorporation to payroll delivered through a seamless online platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Incorporation</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Trademark</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Accounting</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">Income Tax</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-red-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">GST Services</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
