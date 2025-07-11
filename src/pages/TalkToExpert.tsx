import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, Mail, Clock, Users, Shield } from 'lucide-react';
import { handlePhoneCall, handleEmailContact, businessPhone, businessEmail } from '@/utils/contactUtils';

const TalkToExpert = () => {
  const expertServices = [
    {
      title: "Business Registration",
      description: "Get expert guidance on company formation, LLP, partnership registration and more",
      icon: Users
    },
    {
      title: "Tax & Compliance",
      description: "GST registration, income tax filing, and ongoing compliance support",
      icon: Shield
    },
    {
      title: "Legal Documentation",
      description: "Trademark, copyright, patent registration and legal document preparation",
      icon: Mail
    }
  ];

  const contactMethods = [
    {
      title: "Phone Consultation",
      description: "Speak directly with our experts",
      icon: Phone,
      action: () => handlePhoneCall(businessPhone),
      buttonText: "Call Now",
      detail: businessPhone
    },
    {
      title: "Email Support",
      description: "Get detailed answers to your queries",
      icon: Mail,
      action: () => handleEmailContact(businessEmail, "Expert Consultation Request"),
      buttonText: "Email Us",
      detail: businessEmail
    },
    {
      title: "Live Chat",
      description: "Instant support through our chat system",
      icon: MessageSquare,
      action: () => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank'),
      buttonText: "Start Chat",
      detail: "Available 9 AM - 6 PM"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Talk to an Expert
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get personalized guidance from our certified professionals. Whether you need help with business registration, 
              tax compliance, or legal documentation, our experts are here to help you succeed.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Available Mon-Sat 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer multiple ways to connect with our experts. Pick the one that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{method.detail}</p>
                  <Button 
                    onClick={method.action}
                    className="w-full"
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Experts Can Help You With
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Expert Help?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let compliance issues hold your business back. Connect with our experts today 
              and get the professional guidance you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => handlePhoneCall(businessPhone)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Expert Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://forms.gle/rh7pCaqQSELtPwJz6', '_blank')}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TalkToExpert;