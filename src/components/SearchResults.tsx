
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ArrowRight } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const allServices: SearchResult[] = [
    { id: '1', title: 'Private Limited Company Registration', description: 'Register your private limited company', link: '/private-limited-company', category: 'Company Registration' },
    { id: '2', title: 'GST Registration', description: 'Get your GST registration done', link: '/gst-registration', category: 'Tax Services' },
    { id: '3', title: 'Trademark Registration', description: 'Protect your brand with trademark', link: '/trademark-registration', category: 'Intellectual Property' },
    { id: '4', title: 'Income Tax E-Filing', description: 'File your income tax returns online', link: '/income-tax-e-filing', category: 'Tax Services' },
    { id: '5', title: 'FSSAI License', description: 'Food business license registration', link: '/fssai-license', category: 'Licenses' },
    { id: '6', title: 'One Person Company', description: 'Register OPC for solo entrepreneurs', link: '/one-person-company', category: 'Company Registration' },
    { id: '7', title: 'Partnership Firm', description: 'Register your partnership business', link: '/partnership-firm', category: 'Company Registration' },
    { id: '8', title: 'Consultation Services', description: 'Get expert business consultation', link: '/consultation', category: 'Services' }
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);

    if (searchQuery) {
      const filteredResults = allServices.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults(allServices);
    }
  }, [location.search]);

  const handleResultClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-600">
            Found {results.length} results for "{query}"
          </p>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
          <p className="text-gray-500">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <Card key={result.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleResultClick(result.link)}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-blue-600 font-medium">{result.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 ml-4 flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
