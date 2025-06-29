
import { Building2, FileText, Users, Award, TrendingUp, Shield, Briefcase, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Building2,
      title: "Company Registration",
      description: "Start your business with complete legal compliance",
      color: "from-blue-500 to-blue-600",
      link: "/private-limited-company"
    },
    {
      icon: FileText,
      title: "GST Registration",
      description: "Seamless GST registration and filing services",
      color: "from-green-500 to-green-600",
      link: "/gst-registration"
    },
    {
      icon: Shield,
      title: "Trademark Registration",
      description: "Protect your brand with trademark registration",
      color: "from-purple-500 to-purple-600",
      link: "/trademark-registration"
    },
    {
      icon: Calculator,
      title: "Tax Filing",
      description: "Professional tax filing and consultation",
      color: "from-orange-500 to-orange-600",
      link: "/income-tax-e-filing"
    },
    {
      icon: Briefcase,
      title: "Business Compliance",
      description: "Stay compliant with all business regulations",
      color: "from-teal-500 to-teal-600",
      link: "/consultation"
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Comprehensive payroll management solutions",
      color: "from-indigo-500 to-indigo-600",
      link: "/consultation"
    }
  ];

  const handleServiceClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business solutions to help you grow, stay compliant, and succeed in today's competitive market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => handleServiceClick(service.link)}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
