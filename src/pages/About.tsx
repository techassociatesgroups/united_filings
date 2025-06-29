
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To simplify business compliance and legal processes for entrepreneurs and businesses across India.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To be the most trusted partner for business registration and compliance services in India.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced professionals with deep expertise in business law, taxation, and compliance.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Transparency, reliability, and customer-first approach in everything we do.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">About IndiaFilings</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We are India's leading platform for business registration, compliance, and legal services. 
              Trusted by over 1,000,000+ businesses across the country.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded with the vision to simplify business processes in India, IndiaFilings has been at the forefront 
                  of digital transformation in the legal and compliance industry. We have helped thousands of entrepreneurs 
                  start and grow their businesses with our comprehensive range of services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team of experts combines deep industry knowledge with cutting-edge technology to deliver 
                  exceptional service to our clients. We believe in making business compliance accessible, 
                  affordable, and hassle-free for everyone.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">10,00,000+</div>
                    <div className="text-gray-600">Businesses Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Services Offered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
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

export default About;
