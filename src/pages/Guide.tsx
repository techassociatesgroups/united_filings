
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, FileText, Video, Download } from 'lucide-react';

const Guide = () => {
  const guides = [
    {
      icon: FileText,
      title: 'Company Registration Guide',
      description: 'Step-by-step guide to register your company',
      type: 'PDF Guide'
    },
    {
      icon: Book,
      title: 'GST Compliance Manual',
      description: 'Complete guide to GST registration and filing',
      type: 'eBook'
    },
    {
      icon: Video,
      title: 'Trademark Registration Tutorial',
      description: 'Video tutorial on trademark registration process',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Tax Filing Checklist',
      description: 'Essential checklist for income tax filing',
      type: 'Checklist'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Book className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Business Guides & Resources</h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Access comprehensive guides and resources to help you navigate business compliance and legal requirements.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <guide.icon className="h-12 w-12 text-indigo-600 mb-4" />
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-indigo-600 font-medium">{guide.type}</span>
                      <Download className="h-4 w-4 text-gray-400" />
                    </div>
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

export default Guide;
