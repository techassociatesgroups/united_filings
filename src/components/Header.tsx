
import { Menu, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-green-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-green-600" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4 text-green-600" />
              <span>info@indiafilings.com</span>
            </div>
          </div>
          <div className="hidden md:block text-green-600">
            Trusted by 10,00,000+ businesses across India
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-600">
              IndiaFilings
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                StartUp
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                Registrations
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                Trademark
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                GST
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                Income Tax
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                MCA
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                Compliance
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                Consultation
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center px-2 py-1 text-sm">
                Guides
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            </div>
            
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors px-2 py-1 text-sm">About Us</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/auth" 
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
            >
              Login
            </Link>
            <button 
              className="xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">StartUp</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Registrations</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Trademark</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Goods & Services Tax</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Income Tax</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">MCA</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Compliance</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Consultation</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Guides</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
