import { Phone, Mail, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
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
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-orange-400 to-green-500 text-white px-3 py-2 rounded-full text-xl font-bold mr-2">
                India
              </div>
              <span className="text-green-600 text-xl font-bold">Filings</span>
            </Link>
          </div>

          {/* Navigation menu - horizontal layout */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-medium">
            <Link to="/business-registration" className="text-gray-700 hover:text-green-600 transition-colors">
              Startup
            </Link>
            <Link to="/registrations" className="text-gray-700 hover:text-green-600 transition-colors">
              Registrations
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Trademark
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Goods & Services Tax
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Income Tax
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              MCA
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Compliance
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Consultation
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Guides
            </Link>
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </Link>
          </div>

          {/* Right side icons and login */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </button>
            <Link 
              to="/auth" 
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">V</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
