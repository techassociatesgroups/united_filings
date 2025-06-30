import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserDropdown from './UserDropdown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="text-xl font-bold text-blue-600">CA PI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Business Registration Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setOpenDropdown('business')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>Business Registration</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {openDropdown === 'business' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border py-2 z-50"
                  onMouseEnter={() => setOpenDropdown('business')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/proprietorship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Proprietorship
                  </Link>
                  <Link to="/partnership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Partnership
                  </Link>
                  <Link to="/one-person-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    One Person Company
                  </Link>
                  <Link to="/limited-liability-partnership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Limited Liability Partnership
                  </Link>
                  <Link to="/private-limited-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Private Limited Company
                  </Link>
                  <Link to="/public-limited-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Public Limited Company
                  </Link>
                  <Link to="/section-8-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Section 8 Company
                  </Link>
                  <Link to="/trust-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Trust Registration
                  </Link>
                  <Link to="/producer-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Producer Company
                  </Link>
                  <Link to="/indian-subsidiary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Indian Subsidiary
                  </Link>
                </div>
              )}
            </div>

            {/* Licenses & Registrations Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setOpenDropdown('licenses')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>Licenses & Registrations</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {openDropdown === 'licenses' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border py-2 z-50"
                  onMouseEnter={() => setOpenDropdown('licenses')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/startup-india" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Startup India
                  </Link>
                  <Link to="/trade-license" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Trade License 
                  </Link>
                  <Link to="/fssai-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    FSSAI Registration
                  </Link>
                  <Link to="/fssai-license" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    FSSAI License
                  </Link>
                  <Link to="/halal-certification" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Halal Certification
                  </Link>
                  <Link to="/icegate-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Icegate Registration
                  </Link>
                  <Link to="/import-export-code" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Import Export Code
                  </Link>
                </div>
              )}
            </div>

            {/* Tax Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setOpenDropdown('tax')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>Tax Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {openDropdown === 'tax' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border py-2 z-50"
                  onMouseEnter={() => setOpenDropdown('tax')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/gst-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    GST Registration
                  </Link>
                  <Link to="/gst-return-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    GST Return Filing
                  </Link>
                  <Link to="/income-tax-e-filing-new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Income Tax E-Filing
                  </Link>
                </div>
              )}
            </div>

            {/* IP Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setOpenDropdown('ip')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>IP Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {openDropdown === 'ip' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border py-2 z-50"
                  onMouseEnter={() => setOpenDropdown('ip')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
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
              )}
            </div>

            {/* Other Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setOpenDropdown('other')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>Other Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {openDropdown === 'other' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border py-2 z-50"
                  onMouseEnter={() => setOpenDropdown('other')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/digital-signature" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Digital Signature
                  </Link>
                  <Link to="/pf-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    PF Registration
                  </Link>
                  <Link to="/esi-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    ESI Registration
                  </Link>
                </div>
              )}
            </div>

            {/* MCA Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setOpenDropdown('mca')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span>MCA Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {openDropdown === 'mca' && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border py-2 z-50"
                  onMouseEnter={() => setOpenDropdown('mca')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to="/din-reactivation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    DIN Reactivation
                  </Link>
                  <Link to="/director-change" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Director Change
                  </Link>
                  <Link to="/remove-director" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Remove Director
                  </Link>
                  <Link to="/adt-1-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    ADT-1 Filing
                  </Link>
                  <Link to="/dpt-3-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    DPT-3 Filing
                  </Link>
                  <Link to="/llp-form-11-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    LLP Form 11 Filing
                  </Link>
                  <Link to="/dormant-status-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Dormant Status Filing
                  </Link>
                  <Link to="/moa-amendment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    MOA Amendment
                  </Link>
                  <Link to="/aoa-amendment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AOA Amendment
                  </Link>
                  <Link to="/authorized-capital-increase" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Authorized Capital Increase
                  </Link>
                  <Link to="/share-transfer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Share Transfer
                  </Link>
                  <Link to="/demat-of-shares" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Demat of Shares
                  </Link>
                  <Link to="/winding-up-llp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Winding Up - LLP
                  </Link>
                  <Link to="/winding-up-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Winding Up - Company
                  </Link>
                </div>
              )}
            </div>

            <Link to="/consultation" className="text-gray-700 hover:text-blue-600 transition-colors">
              Consultation
            </Link>
          </nav>

          {/* Right side - User Menu/Login */}
          <div className="flex items-center">
            <UserDropdown />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="space-y-2">
              <Link
                to="/business-registration"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Business Registration
              </Link>
              <Link
                to="/gst-registration"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Tax Services
              </Link>
              <Link
                to="/trademark-registration"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                IP Services
              </Link>
              <Link
                to="/company-compliance"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                MCA Services
              </Link>
              <Link
                to="/consultation"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
