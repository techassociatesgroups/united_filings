import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, ShoppingCart, Search, User, Phone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartDropdown from './CartDropdown';
import SearchDropdown from './SearchDropdown';

const Header = () => {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="bg-gray-50 py-2 text-gray-500 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="tel:+919243009200" className="hover:text-blue-600 flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +91 9243009200
            </a>
            <a href="mailto:support@indiafilings.com" className="hover:text-blue-600">
              support@indiafilings.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth" className="hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              IndiaFilings
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <button
                  className="flex items-center hover:text-blue-200"
                  onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                >
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isCompanyDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    <Link to="/private-limited-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Private Limited Company
                    </Link>
                    <Link to="/limited-liability-partnership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Limited Liability Partnership
                    </Link>
                    <Link to="/one-person-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      One Person Company
                    </Link>
                    <Link to="/nidhi-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Nidhi Company
                    </Link>
                    <Link to="/producer-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Producer Company
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="flex items-center hover:text-blue-200"
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    <Link to="/gst-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      GST Registration
                    </Link>
                    <Link to="/trademark-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Trademark Registration
                    </Link>
                    <Link to="/fssai-license" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      FSSAI License
                    </Link>
                    <Link to="/iso-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      ISO Registration
                    </Link>
                    <Link to="/import-export-code" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Import Export Code
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="flex items-center hover:text-blue-200"
                  onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                >
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isResourcesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Blog
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      FAQ
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Guides
                    </a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="flex items-center hover:text-blue-200"
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                >
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isMoreDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      About Us
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Contact Us
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Careers
                    </a>
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-blue-700 relative"
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setIsCartOpen(false);
                  }}
                >
                  <Search className="h-5 w-5" />
                </Button>
                <SearchDropdown 
                  isOpen={isSearchOpen} 
                  onClose={() => setIsSearchOpen(false)} 
                />
              </div>

              {/* Cart Icon */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-blue-700 relative"
                  onClick={() => {
                    setIsCartOpen(!isCartOpen);
                    setIsSearchOpen(false);
                  }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
                <CartDropdown 
                  isOpen={isCartOpen} 
                  onClose={() => setIsCartOpen(false)} 
                />
              </div>

              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
