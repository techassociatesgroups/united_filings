import React from 'react';
import Image from 'next/image';
import { RocketLaunch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.svg')] bg-center bg-repeat-y"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900">
              Your Partner in <span className="text-blue-600">Business</span> Success
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We provide expert guidance and support to help you navigate the complexities of business registration, compliance, and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/start-your-business"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Start Your Business Today
              </Link>
              <Link 
                to="/consultation"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Book a Free Consultation
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <RocketLaunch className="h-6 w-6 text-blue-500" />
              <span className="text-gray-600 font-semibold">
                Launch your business with confidence
              </span>
            </div>
          </div>
          
          <div>
            <Image 
              src="/assets/apeda-hero.png"
              alt="Business Growth"
              width={700}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
