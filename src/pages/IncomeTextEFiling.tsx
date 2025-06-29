
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const IncomeTextEFiling = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'income-tax-e-filing',
      name: 'Income Tax E-Filing',
      price: 999
    });
    toast.success('Service added to cart!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-purple-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Income Tax E-Filing</h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Professional income tax return filing services for individuals and businesses.
            </p>
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
              size="lg"
            >
              Add to Cart - ₹999
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IncomeTextEFiling;
