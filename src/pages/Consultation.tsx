
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Video, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Consultation = () => {
  const consultationTypes = [
    {
      icon: Phone,
      title: 'Phone Consultation',
      price: '₹999',
      duration: '30 minutes',
      description: 'Get expert advice over a phone call'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      price: '₹1,499',
      duration: '45 minutes',
      description: 'Face-to-face consultation via video call'
    },
    {
      icon: MessageCircle,
      title: 'Chat Consultation',
      price: '₹499',
      duration: 'Unlimited',
      description: 'Get answers through our chat platform'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Expert Consultation Services</h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get personalized advice from our business experts for all your compliance and legal needs.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Consultation Type</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <type.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle>{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">{type.price}</div>
                    <div className="text-gray-600 mb-4">{type.duration}</div>
                    <p className="text-gray-700 mb-6">{type.description}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Consultation;
