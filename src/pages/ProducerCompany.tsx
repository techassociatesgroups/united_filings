
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Factory } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const ProducerCompany = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'producer-company',
      name: 'Producer Company Registration',
      price: 12999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Factory className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Producer Company Registration</h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Register your Producer Company to support agricultural activities and rural development.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹12,999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProducerCompany;
