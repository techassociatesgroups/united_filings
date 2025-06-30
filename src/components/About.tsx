import { Users, Award, TrendingUp, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { handlePhoneCall, handleEmailContact, businessPhone, businessEmail } from '@/utils/contactUtils';

const About = () => {
  const stats = [
    { number: "10L+", label: "Happy Customers", icon: Users },
    { number: "15+", label: "Years of Experience", icon: Award },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Customer Support", icon: Shield }
  ];

  const achievements = [
    "Trusted by over 1 million businesses across India",
    "ISO 27001 certified for information security",
    "Recognized as India's leading business services platform",
    "Featured in major business publications and media",
    "Award-winning customer service and support",
    "Partnerships with leading banks and financial institutions"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About IndiaFilings
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              India's most trusted business services platform, helping entrepreneurs and businesses navigate the complex landscape of Indian business regulations with ease and confidence.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Since our inception, we have been committed to simplifying business processes through technology, expert guidance, and exceptional customer service. Our comprehensive suite of services covers everything from company registration to ongoing compliance management.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4">Ready to get started?</h4>
              <p className="mb-6 text-green-50">Join thousands of successful businesses who trust IndiaFilings for their growth journey.</p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Start Your Business Today
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => handlePhoneCall(businessPhone)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Call Us Now
          </button>
          <button 
            onClick={() => handleEmailContact(businessEmail, "Business Inquiry", "Hello, I would like to know more about your services.")}
            className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Email Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
