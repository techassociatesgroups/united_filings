
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const GSTRegistration = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'gst-registration',
      name: 'GST Registration',
      price: 2999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-blue-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">GST Registration</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get your GST registration done quickly and start your business legally.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹2,999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GSTRegistration;
