
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, Phone, Mail, Clock } from 'lucide-react';
import CartDropdown from './CartDropdown';
import UserMenu from './UserMenu';
import AuthModal from './auth/AuthModal';
import CallEmailButtons from './CallEmailButtons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 8068301312</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>support@indiafilings.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Sat 9AM-6PM</span>
            </div>
          </div>
          <CallEmailButtons className="hidden md:flex" />
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                IndiaFilings
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/business-registration" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Start a Business
              </Link>
              <Link to="/registrations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Registrations
              </Link>
              <Link to="/gst-registration" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                GST Services
              </Link>
              <Link to="/income-tax-e-filing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Tax Filing
              </Link>
              <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Consultation
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4 relative">
              <div className="relative">
                <CartDropdown 
                  isOpen={cartDropdownOpen} 
                  onClose={() => setCartDropdownOpen(false)} 
                />
              </div>
              <UserMenu onAuthClick={() => setAuthModalOpen(true)} />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link to="/business-registration" className="text-gray-700 hover:text-blue-600 font-medium">
                  Start a Business
                </Link>
                <Link to="/registrations" className="text-gray-700 hover:text-blue-600 font-medium">
                  Registrations
                </Link>
                <Link to="/gst-registration" className="text-gray-700 hover:text-blue-600 font-medium">
                  GST Services
                </Link>
                <Link to="/income-tax-e-filing" className="text-gray-700 hover:text-blue-600 font-medium">
                  Tax Filing
                </Link>
                <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium">
                  Consultation
                </Link>
                <div className="pt-4 border-t">
                  <CallEmailButtons />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};

export default Header;
