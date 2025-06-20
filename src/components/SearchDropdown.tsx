
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDropdown = ({ isOpen, onClose }: SearchDropdownProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample search results - in a real app, this would come from an API
  const searchResults = [
    { id: '1', title: 'Private Limited Company', url: '/private-limited-company', category: 'Business Registration' },
    { id: '2', title: 'GST Registration', url: '/gst-registration', category: 'Registration' },
    { id: '3', title: 'ITR-1 Return Filing', url: '/itr1-return-filing', category: 'Tax Filing' },
    { id: '4', title: 'Trademark Registration', url: '/trademark-registration', category: 'IP Registration' },
    { id: '5', title: 'FSSAI License', url: '/fssai-license', category: 'License' },
  ].filter(item => 
    searchQuery.length > 0 && 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 w-96 bg-white border shadow-lg rounded-lg z-50">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Search Services</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {searchQuery.length === 0 ? (
          <div className="p-8 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Start typing to search services</p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500">No results found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="p-4 space-y-2">
            {searchResults.map((result) => (
              <Link
                key={result.id}
                to={result.url}
                onClick={onClose}
                className="block p-3 hover:bg-gray-50 rounded-lg border"
              >
                <h4 className="font-medium text-sm">{result.title}</h4>
                <p className="text-xs text-gray-500">{result.category}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
