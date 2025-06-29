
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const TrustRegistration = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'trust-registration',
      name: 'Trust Registration',
      price: 6999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Trust Registration</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Register your trust for charitable, religious, or educational purposes.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹6,999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TrustRegistration;
