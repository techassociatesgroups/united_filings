
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 overflow-hidden">
        <div className="max-w-full mx-auto px-2 sm:px-4 flex flex-wrap items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-6 flex-wrap">
            <div className="flex items-center space-x-1 sm:space-x-2 whitespace-nowrap">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 whitespace-nowrap">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">info@indiafilings.com</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 whitespace-nowrap">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">Mon-Sat 9AM-6PM</span>
            </div>
          </div>
          <div className="hidden lg:flex flex-shrink-0">
            <span className="truncate">Trusted by 10,00,000+ businesses across India</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50 w-full overflow-hidden">
        <div className="max-w-full mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16 min-w-0">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-4 py-2 rounded-lg font-bold text-sm sm:text-xl shadow-lg whitespace-nowrap">
                IndiaFilings
              </div>
            </Link>

            {/* Desktop Navigation with Dropdowns */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center min-w-0 overflow-hidden">
              {/* Startup Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onMouseEnter={() => handleDropdownToggle('startup')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm"
                >
                  <span>Startup</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                </button>
                {activeDropdown === 'startup' && (
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
                      <Link to="/trust-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Trust Registration
                      </Link>
                      <Link to="/indian-subsidiary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Indian Subsidiary
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Registrations Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onMouseEnter={() => handleDropdownToggle('registrations')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm"
                >
                  <span>Registrations</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
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
                      <Link to="/apeda-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        APEDA Registration
                      </Link>
                      <Link to="/iso-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ISO Registration
                      </Link>
                      <Link to="/bis-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        BIS Registration
                      </Link>
                      <Link to="/barcode-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Barcode Registration
                      </Link>
                      <Link to="/halal-certification" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Halal Certification
                      </Link>
                      <Link to="/darpan-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        DARPAN Registration
                      </Link>
                      <Link to="/12a-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        12A Registration
                      </Link>
                      <Link to="/80g-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        80G Registration
                      </Link>
                      <Link to="/12a-80g-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        12A & 80G Registration
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Trademark Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onMouseEnter={() => handleDropdownToggle('trademark')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm"
                >
                  <span>Trademark</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                </button>
                {activeDropdown === 'trademark' && (
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
                    </div>
                  </div>
                )}
              </div>

              {/* GST Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onMouseEnter={() => handleDropdownToggle('gst')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm"
                >
                  <span>GST</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
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
                      <Link to="/gst-annual-return-filing-gstr9" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Annual Return Filing
                      </Link>
                      <Link to="/gst-registration-cancellation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Registration Cancellation
                      </Link>
                      <Link to="/gst-lut-form" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST LUT Filing
                      </Link>
                      <Link to="/gst-registration-amendment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Registration Amendment
                      </Link>
                      <Link to="/gst-registration-for-foreigners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Registration for Foreigners
                      </Link>
                      <Link to="/gst-revocation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Revocation
                      </Link>
                      <Link to="/gst-notice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GST Notice
                      </Link>
                      <Link to="/gstr-10-return-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        GSTR-10 Return Filing
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Tax Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onMouseEnter={() => handleDropdownToggle('tax')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm"
                >
                  <span>Tax</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
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
                      <Link to="/itr-5-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ITR-5 Filing
                      </Link>
                      <Link to="/itr-6-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ITR-6 Filing
                      </Link>
                      <Link to="/itr-7-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ITR-7 Filing
                      </Link>
                      <Link to="/business-income-tax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Business Income Tax
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* MCA Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onMouseEnter={() => handleDropdownToggle('mca')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm"
                >
                  <span>MCA</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                </button>
                {activeDropdown === 'mca' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link to="/company-compliance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Company Compliance
                      </Link>
                      <Link to="/llp-compliance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        LLP Compliance
                      </Link>
                      <Link to="/opc-compliance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        OPC Compliance
                      </Link>
                      <Link to="/name-change-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Name Change Company
                      </Link>
                      <Link to="/registered-office-change-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Registered Office Change
                      </Link>
                      <Link to="/din-ekyc-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        DIN eKYC Filing
                      </Link>
                      <Link to="/certificate-of-incumbency" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Certificate of Incumbency
                      </Link>
                      <Link to="/legal-entity-identifier-code" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-blue-600">
                        Legal Entity Identifier Code
                      </Link>
                      <Link to="/fdi-filing-rbi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        FDI Filing with RBI
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Compliance Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onMouseEnter={() => handleDropdownToggle('compliance')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm"
                >
                  <span>Compliance</span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                </button>
                {activeDropdown === 'compliance' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      <Link to="/pf-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        PF Registration
                      </Link>
                      <Link to="/esi-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        ESI Registration
                      </Link>
                      <Link to="/professional-tax-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Professional Tax Registration
                      </Link>
                      <Link to="/shop-and-establishment-act" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Shop & Establishment Act
                      </Link>
                      <Link to="/trade-license" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Trade License
                      </Link>
                      <Link to="/fssai-license" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        FSSAI License
                      </Link>
                      <Link to="/drug-license" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Drug License
                      </Link>
                      <Link to="/fire-license" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Fire License
                      </Link>
                      <Link to="/rera-registration-agents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        RERA Registration for Agents
                      </Link>
                      <Link to="/rcmc-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        RCMC Registration
                      </Link>
                      <Link to="/icegate-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Icegate Registration
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Consultation Link */}
              <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm flex-shrink-0">
                Consultation
              </Link>

              {/* Guides Link */}
              <Link to="/guide" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm flex-shrink-0">
                Guides
              </Link>

              {/* About Link */}
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-2 whitespace-nowrap text-sm flex-shrink-0">
                About
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-md mx-4 min-w-0">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <CartDropdown 
                isOpen={cartDropdownOpen} 
                onClose={() => setCartDropdownOpen(false)} 
              />
              <UserMenu onAuthClick={() => setAuthModalOpen(true)} />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 flex-shrink-0"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t overflow-hidden">
              <div className="flex flex-col space-y-4 max-w-full">
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">Startup</div>
                  <Link to="/private-limited-company" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Private Limited Company
                  </Link>
                  <Link to="/public-limited-company" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Public Limited Company
                  </Link>
                  <Link to="/limited-liability-partnership" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Limited Liability Partnership
                  </Link>
                  <Link to="/one-person-company" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    One Person Company
                  </Link>
                  <Link to="/partnership-firm" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Partnership Firm
                  </Link>
                  <Link to="/sole-proprietorship" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Sole Proprietorship
                  </Link>
                </div>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">Registrations</div>
                  <Link to="/trademark-registration" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Trademark Registration
                  </Link>
                  <Link to="/copyright-registration" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Copyright Registration
                  </Link>
                  <Link to="/fssai-registration" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    FSSAI Registration
                  </Link>
                  <Link to="/import-export-code" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Import Export Code
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">GST</div>
                  <Link to="/gst-registration" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    GST Registration
                  </Link>
                  <Link to="/gst-return-filing" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    GST Return Filing
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 px-2">Tax</div>
                  <Link to="/income-tax-e-filing" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    Income Tax E-Filing
                  </Link>
                  <Link to="/itr-1-filing" className="text-gray-700 hover:text-blue-600 pl-4 block truncate">
                    ITR-1 Filing
                  </Link>
                </div>

                <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium px-2 block truncate">
                  Consultation
                </Link>
                
                <Link to="/guide" className="text-gray-700 hover:text-blue-600 font-medium px-2 block truncate">
                  Guides
                </Link>
                
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium px-2 block truncate">
                  About
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
