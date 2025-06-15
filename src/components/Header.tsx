
import { Menu, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-blue-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>info@indiafilings.com</span>
            </div>
          </div>
          <div className="hidden md:block text-blue-600">
            Trusted by 10,00,000+ businesses across India
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              IndiaFilings
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Company Registration</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Tax & Compliance</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Trademark & IP</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Licenses</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">More Services</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Company Registration</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Tax & Compliance</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Trademark & IP</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Licenses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">More Services</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
