
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const IndianSubsidiary = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'indian-subsidiary',
      name: 'Indian Subsidiary Registration',
      price: 18999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Indian Subsidiary Registration</h1>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Set up your Indian subsidiary for foreign companies looking to establish presence in India.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹18,999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndianSubsidiary;
