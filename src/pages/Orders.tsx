
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Calendar, DollarSign, FileText } from 'lucide-react';

const Orders = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        navigate('/auth');
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  // Mock orders data - in a real app, this would come from your database
  const mockOrders = [
    {
      id: 'ORD-20240101-001',
      service: 'Private Limited Company Registration',
      status: 'Completed',
      date: '2024-01-15',
      amount: '₹15,000',
    },
    {
      id: 'ORD-20240102-002',
      service: 'GST Registration',
      status: 'In Progress',
      date: '2024-01-20',
      amount: '₹2,500',
    },
    {
      id: 'ORD-20240103-003',
      service: 'Trademark Registration',
      status: 'Pending',
      date: '2024-01-25',
      amount: '₹8,000',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
            <p className="text-gray-600">Track your service requests and their status</p>
          </div>

          {mockOrders.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                <p className="text-gray-600">Your service orders will appear here once you make a purchase.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-blue-600">{order.service}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">Order ID: {order.id}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">Order Date</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">Amount</p>
                          <p className="text-sm text-gray-600">{order.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">Documents</p>
                          <p className="text-sm text-blue-600 cursor-pointer hover:underline">
                            View Details
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
