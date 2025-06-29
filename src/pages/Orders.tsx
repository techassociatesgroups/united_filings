
import { useState } from 'react';
import { Package, Calendar, Clock, CheckCircle, AlertCircle, Eye, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Orders = () => {
  const [orders] = useState([
    {
      id: 'ORD-20241201-001',
      serviceName: 'Private Limited Company Registration',
      orderDate: '2024-12-01',
      status: 'completed',
      amount: '₹12,999',
      estimatedDelivery: '2024-12-15',
      actualDelivery: '2024-12-12',
      documents: ['Certificate of Incorporation', 'PAN Card', 'GST Registration']
    },
    {
      id: 'ORD-20241128-002',
      serviceName: 'GST Registration',
      orderDate: '2024-11-28',
      status: 'in-progress',
      amount: '₹2,999',
      estimatedDelivery: '2024-12-10',
      actualDelivery: null,
      documents: []
    },
    {
      id: 'ORD-20241125-003',
      serviceName: 'Trademark Registration',
      orderDate: '2024-11-25',
      status: 'pending',
      amount: '₹8,999',
      estimatedDelivery: '2024-12-20',
      actualDelivery: null,
      documents: []
    },
    {
      id: 'ORD-20241120-004',
      serviceName: 'FSSAI License',
      orderDate: '2024-11-20',
      status: 'completed',
      amount: '₹3,999',
      estimatedDelivery: '2024-12-05',
      actualDelivery: '2024-12-03',
      documents: ['FSSAI License Certificate']
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'in-progress':
        return <Clock className="h-4 w-4" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const filterOrders = (status: string) => {
    if (status === 'all') return orders;
    return orders.filter(order => order.status === status);
  };

  const OrderCard = ({ order }: { order: any }) => (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{order.serviceName}</CardTitle>
            <p className="text-sm text-gray-500">Order ID: {order.id}</p>
          </div>
          <Badge className={getStatusColor(order.status)}>
            {getStatusIcon(order.status)}
            <span className="ml-1 capitalize">{order.status.replace('-', ' ')}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Order Date</p>
              <p className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Amount</p>
              <p className="font-medium">{order.amount}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">
                {order.status === 'completed' ? 'Delivered' : 'Expected Delivery'}
              </p>
              <p className="font-medium">
                {order.actualDelivery 
                  ? new Date(order.actualDelivery).toLocaleDateString()
                  : new Date(order.estimatedDelivery).toLocaleDateString()
                }
              </p>
            </div>
          </div>
        </div>
        
        {order.documents.length > 0 && (
          <div className="border-t pt-4">
            <p className="text-sm font-medium mb-2">Available Documents:</p>
            <div className="flex flex-wrap gap-2">
              {order.documents.map((doc: string, index: number) => (
                <Button key={index} variant="outline" size="sm">
                  <Download className="h-3 w-3 mr-1" />
                  {doc}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          {order.status !== 'completed' && (
            <Button variant="outline" size="sm">
              Track Order
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <div className="text-sm text-gray-500">
              Total Orders: {orders.length}
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="all">All Orders ({orders.length})</TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({filterOrders('completed').length})
              </TabsTrigger>
              <TabsTrigger value="in-progress">
                In Progress ({filterOrders('in-progress').length})
              </TabsTrigger>
              <TabsTrigger value="pending">
                Pending ({filterOrders('pending').length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="space-y-4">
                {orders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <div className="space-y-4">
                {filterOrders('completed').map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="in-progress">
              <div className="space-y-4">
                {filterOrders('in-progress').map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pending">
              <div className="space-y-4">
                {filterOrders('pending').map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Orders;
