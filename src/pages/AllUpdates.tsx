
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const AllUpdates = () => {
  const updates = [
    {
      date: "Dec 25, 2024",
      title: "New GST Return Filing Deadline Extended",
      description: "Government extends GSTR-1 filing deadline to provide businesses more time for compliance. This extension affects all registered taxpayers and provides additional flexibility for meeting compliance requirements.",
      category: "GST Updates",
      color: "from-blue-500 to-blue-600",
      readTime: "3 min read"
    },
    {
      date: "Dec 20, 2024", 
      title: "Simplified Company Registration Process",
      description: "MCA introduces new digital initiatives to streamline the company incorporation process. The new system reduces paperwork and processing time significantly.",
      category: "MCA Updates",
      color: "from-green-500 to-green-600",
      readTime: "5 min read"
    },
    {
      date: "Dec 18, 2024",
      title: "Income Tax Return Filing Made Easier",
      description: "New features added to income tax portal for faster and more accurate ITR filing. Enhanced user interface and automated validations improve filing experience.",
      category: "Income Tax",
      color: "from-purple-500 to-purple-600",
      readTime: "4 min read"
    },
    {
      date: "Dec 15, 2024",
      title: "FSSAI License Renewal Process Updated",
      description: "Food Safety and Standards Authority of India updates renewal process with new online features and reduced documentation requirements.",
      category: "FSSAI Updates",
      color: "from-orange-500 to-orange-600",
      readTime: "3 min read"
    },
    {
      date: "Dec 12, 2024",
      title: "Trademark Registration Fee Structure Revised",
      description: "Government announces new fee structure for trademark registration with reduced costs for startups and MSMEs.",
      category: "Trademark",
      color: "from-teal-500 to-teal-600",
      readTime: "2 min read"
    },
    {
      date: "Dec 10, 2024",
      title: "Digital Signature Certificate Validity Extended",
      description: "Class 3 DSC validity period extended to 3 years, providing longer validity and better value for businesses.",
      category: "Digital Services",
      color: "from-indigo-500 to-indigo-600",
      readTime: "3 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Latest Updates & News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest regulatory changes, compliance updates, and business news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${update.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${update.color} text-white`}>
                      {update.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {update.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {update.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {update.readTime}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllUpdates;
