
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import CartDropdown from './CartDropdown';
import UserMenu from './UserMenu';
import AuthModal from './auth/AuthModal';
import CallEmailButtons from './CallEmailButtons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

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

            {/* Desktop Navigation with Dropdowns */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Start a Business Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownToggle('business')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                >
                  <span>Start a Business</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'business' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link to="/private-limited-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Private Limited Company
                      </Link>
                      <Link to="/public-limited-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Public Limited Company
                      </Link>
                      <Link to="/limited-liability-partnership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Limited Liability Partnership
                      </Link>
                      <Link to="/one-person-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        One Person Company
                      </Link>
                      <Link to="/partnership-firm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Partnership Firm
                      </Link>
                      <Link to="/sole-proprietorship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Sole Proprietorship
                      </Link>
                      <Link to="/producer-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Producer Company
                      </Link>
                      <Link to="/section-8-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Section 8 Company
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Registrations Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownToggle('registrations')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                >
                  <span>Registrations</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'registrations' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link to="/trademark-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Trademark Registration
                      </Link>
                      <Link to="/copyright-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Copyright Registration
                      </Link>
                      <Link to="/patent-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Patent Registration
                      </Link>
                      <Link to="/fssai-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        FSSAI Registration
                      </Link>
                      <Link to="/import-export-code" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Import Export Code
                      </Link>
                      <Link to="/startup-india-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Startup India Registration
                      </Link>
                      <Link to="/digital-signature" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Digital Signature
                      </Link>
                      <Link to="/msme-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        MSME Registration
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* GST Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownToggle('gst')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                >
                  <span>GST Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'gst' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link to="/gst-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Registration
                      </Link>
                      <Link to="/gst-return-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Return Filing
                      </Link>
                      <Link to="/gst-annual-return" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Annual Return
                      </Link>
                      <Link to="/gst-registration-cancellation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Registration Cancellation
                      </Link>
                      <Link to="/gst-lut-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST LUT Filing
                      </Link>
                      <Link to="/gst-registration-amendment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Registration Amendment
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Tax Filing Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownToggle('tax')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                >
                  <span>Tax Filing</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'tax' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link to="/income-tax-e-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Income Tax E-Filing
                      </Link>
                      <Link to="/itr-1-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ITR-1 Filing
                      </Link>
                      <Link to="/itr-2-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ITR-2 Filing
                      </Link>
                      <Link to="/itr-3-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ITR-3 Filing
                      </Link>
                      <Link to="/itr-4-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ITR-4 Filing
                      </Link>
                      <Link to="/tds-return-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        TDS Return Filing
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Consultation Link */}
              <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2">
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
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">Start a Business</div>
                  <Link to="/private-limited-company" className="text-gray-700 hover:text-blue-600 pl-4">
                    Private Limited Company
                  </Link>
                  <Link to="/public-limited-company" className="text-gray-700 hover:text-blue-600 pl-4">
                    Public Limited Company
                  </Link>
                  <Link to="/limited-liability-partnership" className="text-gray-700 hover:text-blue-600 pl-4">
                    Limited Liability Partnership
                  </Link>
                  <Link to="/one-person-company" className="text-gray-700 hover:text-blue-600 pl-4">
                    One Person Company
                  </Link>
                </div>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">Registrations</div>
                  <Link to="/trademark-registration" className="text-gray-700 hover:text-blue-600 pl-4">
                    Trademark Registration
                  </Link>
                  <Link to="/copyright-registration" className="text-gray-700 hover:text-blue-600 pl-4">
                    Copyright Registration
                  </Link>
                  <Link to="/fssai-registration" className="text-gray-700 hover:text-blue-600 pl-4">
                    FSSAI Registration
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">GST Services</div>
                  <Link to="/gst-registration" className="text-gray-700 hover:text-blue-600 pl-4">
                    GST Registration
                  </Link>
                  <Link to="/gst-return-filing" className="text-gray-700 hover:text-blue-600 pl-4">
                    GST Return Filing
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">Tax Filing</div>
                  <Link to="/income-tax-e-filing" className="text-gray-700 hover:text-blue-600 pl-4">
                    Income Tax E-Filing
                  </Link>
                  <Link to="/itr-1-filing" className="text-gray-700 hover:text-blue-600 pl-4">
                    ITR-1 Filing
                  </Link>
                </div>

                <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium px-2">
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
