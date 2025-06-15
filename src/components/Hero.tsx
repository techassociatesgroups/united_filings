
import { CheckCircle, ArrowRight, Users, FileText, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Start Your Business in
              <span className="text-blue-200"> India</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Complete business registration and compliance services. Get your company incorporated in just 7 days with expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Start Registration
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Explore Services
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Expert CA Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>100% Online Process</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Quick Turnaround</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Users className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-2xl font-bold mb-2">10L+</h3>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <FileText className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Services Offered</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-2xl font-bold mb-2">99%</h3>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
