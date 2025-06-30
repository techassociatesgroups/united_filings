
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, FileText, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const StartYourBusiness = () => {
  const businessTypes = [
    {
      icon: Building2,
      title: "Private Limited Company",
      description: "Most popular choice for startups and growing businesses",
      features: ["Limited Liability", "Easy Fund Raising", "Separate Legal Entity"],
      price: "₹6,999",
      link: "/private-limited-company"
    },
    {
      icon: Users,
      title: "Limited Liability Partnership",
      description: "Perfect for professional services and partnerships",
      features: ["Professional Management", "Limited Liability", "Tax Benefits"],
      price: "₹4,999",
      link: "/limited-liability-partnership"
    },
    {
      icon: FileText,
      title: "One Person Company",
      description: "Ideal for solo entrepreneurs and small businesses",
      features: ["Single Owner", "Limited Liability", "Easy Compliance"],
      price: "₹4,999",
      link: "/one-person-company"
    },
    {
      icon: Award,
      title: "Proprietorship",
      description: "Simplest form of business for individual entrepreneurs",
      features: ["Easy Setup", "Full Control", "Minimal Compliance"],
      price: "₹2,999",
      link: "/proprietorship"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Choose Business Type",
      description: "Select the most suitable business structure for your needs"
    },
    {
      step: "02",
      title: "Name Approval",
      description: "Get your business name approved by the authorities"
    },
    {
      step: "03",
      title: "Document Preparation",
      description: "We prepare and file all required documents"
    },
    {
      step: "04",
      title: "Registration Complete",
      description: "Receive your incorporation certificate and start business"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Start Your Business Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn your business idea into reality with our comprehensive business registration services. 
            Get started in just a few clicks and launch your business with complete legal compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg">
              Get Free Consultation
            </button>
            <Link to="/consultation" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Business Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the business structure that best fits your needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{type.price}</div>
                  <Link 
                    to={type.link} 
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get your business registered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartYourBusiness;
