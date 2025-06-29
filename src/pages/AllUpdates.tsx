
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllUpdates = () => {
  const allUpdates = [
    {
      date: "Dec 25, 2024",
      title: "New GST Return Filing Deadline Extended",
      description: "Government extends GSTR-1 filing deadline to provide businesses more time for compliance. The new deadline is now January 11, 2025.",
      category: "GST Updates",
      link: "/gst-registration",
      color: "from-blue-500 to-blue-600"
    },
    {
      date: "Dec 20, 2024", 
      title: "Simplified Company Registration Process",
      description: "MCA introduces new digital initiatives to streamline the company incorporation process. New SPICe+ form now available.",
      category: "MCA Updates",
      link: "/private-limited-company",
      color: "from-green-500 to-green-600"
    },
    {
      date: "Dec 18, 2024",
      title: "Income Tax Return Filing Made Easier",
      description: "New features added to income tax portal for faster and more accurate ITR filing. Pre-filled forms now available.",
      category: "Income Tax",
      link: "/income-tax-e-filing",
      color: "from-purple-500 to-purple-600"
    },
    {
      date: "Dec 15, 2024",
      title: "FSSAI License Fee Reduction",
      description: "FSSAI reduces license fees for small food businesses to promote easier compliance and business growth.",
      category: "FSSAI Updates",
      link: "/fssai-license",
      color: "from-orange-500 to-orange-600"
    },
    {
      date: "Dec 12, 2024",
      title: "Trademark Registration Fee Waiver",
      description: "Government announces fee waiver for women entrepreneurs and startups for trademark registration applications.",
      category: "Trademark Updates",
      link: "/trademark-registration",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">All Updates & News</h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest regulatory changes, compliance updates, and business news from across India.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-8">
              {allUpdates.map((update, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${update.color} text-white`}>
                          {update.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {update.date}
                        </div>
                      </div>
                      <Link 
                        to={update.link}
                        className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {update.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {update.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AllUpdates;
