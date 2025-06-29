
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Section8Company = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'section-8-company',
      name: 'Section 8 Company Registration',
      price: 8999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-pink-600 to-rose-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Section 8 Company Registration</h1>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Register your non-profit organization as a Section 8 Company for charitable purposes.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹8,999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Section8Company;
