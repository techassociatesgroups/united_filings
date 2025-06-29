
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Mail, Phone, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import AuthModal from '@/components/auth/AuthModal';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: user?.email || '',
    phone: '',
    businessName: '',
    gstin: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setBillingInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    if (!billingInfo.name || !billingInfo.email || !billingInfo.phone) {
      toast.error('Please fill in required fields');
      return;
    }
    
    setLoading(true);
    
    try {
      // Create payment session
      const { data, error } = await supabase.functions.invoke('create-payment-session', {
        body: {
          items,
          customerInfo: billingInfo
        }
      });

      if (error) throw error;

      toast.success('Order created successfully!');
      clearCart();
      navigate('/');
    } catch (error: any) {
      console.error('Payment error:', error);
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const gstAmount = Math.round(totalPrice * 0.18);
  const finalTotal = totalPrice + gstAmount;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center p-8">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-600 text-white">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <div className="bg-orange-500 rounded-full px-3 py-1 text-sm font-bold mr-3">
                    India Filings
                  </div>
                </div>
                <CardTitle className="text-xl">IndiaFilings Private Limited</CardTitle>
                <p className="text-blue-100 text-sm mt-1">
                  Your Trusted Business Partner
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Billing Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
                {!user && (
                  <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      Please sign in to continue with checkout
                    </p>
                    <Button 
                      onClick={() => setAuthModalOpen(true)}
                      className="mt-2 bg-blue-600 hover:bg-blue-700"
                      size="sm"
                    >
                      Sign In / Sign Up
                    </Button>
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={billingInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={billingInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      value={billingInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={billingInfo.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      placeholder="Enter business name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gstin">GSTIN</Label>
                    <Input
                      id="gstin"
                      value={billingInfo.gstin}
                      onChange={(e) => handleInputChange('gstin', e.target.value)}
                      placeholder="Enter GSTIN"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={billingInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={billingInfo.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={billingInfo.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}

                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>GST (18%):</span>
                      <span>₹{gstAmount.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>₹{finalTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePayment}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mt-6"
                    size="lg"
                    disabled={loading || !user}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    {loading ? 'Processing...' : `Pay ₹${finalTotal.toLocaleString()}`}
                  </Button>
                </div>

                <div className="mt-4 text-xs text-gray-600">
                  <p>
                    <strong>Note:</strong> Service will be initiated after payment confirmation. 
                    All transactions are secure and encrypted.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
};

export default Checkout;
