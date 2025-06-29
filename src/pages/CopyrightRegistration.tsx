
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const CopyrightRegistration = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'copyright-registration',
      name: 'Copyright Registration',
      price: 4999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-purple-600 to-violet-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Copyright Registration</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Protect your creative works with comprehensive copyright registration services.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹4,999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CopyrightRegistration;
