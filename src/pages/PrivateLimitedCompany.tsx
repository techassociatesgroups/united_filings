
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, CheckCircle, Users, Shield } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const PrivateLimitedCompany = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'private-limited-company',
      name: 'Private Limited Company Registration',
      price: 6999
    });
    toast.success('Service added to cart!');
  };

  const benefits = [
    'Limited Liability Protection',
    'Separate Legal Entity',
    'Easy Transfer of Ownership',
    'Perpetual Succession',
    'Better Credibility',
    'Easy to Raise Funds'
  ];

  const documents = [
    'PAN Card of Directors',
    'Aadhaar Card of Directors',
    'Passport Size Photos',
    'Address Proof',
    'Bank Statement',
    'Utility Bills'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">
                  Private Limited Company Registration
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Start your business with complete legal protection and credibility. Register your Private Limited Company with us.
                </p>
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={handleAddToCart}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                    size="lg"
                  >
                    Add to Cart - ₹6,999
                  </Button>
                  <span className="text-blue-200">Starting from ₹6,999</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <Building2 className="h-16 w-16 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-4">Why Choose Private Limited?</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Limited liability protection</li>
                  <li>• Easy fundraising options</li>
                  <li>• Professional credibility</li>
                  <li>• Tax benefits available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Private Limited Company</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                    <h3 className="font-semibold text-lg">{benefit}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Required Documents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Shield className="h-6 w-6 text-blue-500 mb-2" />
                  <p className="font-medium">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLimitedCompany;
