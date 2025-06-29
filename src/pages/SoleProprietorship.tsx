
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const SoleProprietorship = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'sole-proprietorship',
      name: 'Sole Proprietorship Registration',
      price: 2999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <User className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Sole Proprietorship Registration</h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              The simplest way to start your business as an individual owner.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3"
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

export default SoleProprietorship;
