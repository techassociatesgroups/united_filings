
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const TrademarkRegistration = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'trademark-registration',
      name: 'Trademark Registration',
      price: 9999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-red-600 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Trademark Registration</h1>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Protect your brand identity with comprehensive trademark registration services.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹9,999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TrademarkRegistration;
