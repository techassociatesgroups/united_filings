
import { Phone, Mail, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

          {/* Navigation menu with dropdowns - horizontal layout */}
          <div className="hidden xl:flex items-center space-x-6">
            {/* Startup Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                <span>Startup</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Private Limited Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Limited Liability Partnership</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">One Person Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Partnership Firm</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Proprietorship</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Nidhi Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Producer Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Section 8 Company</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Registrations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                <span>Registrations</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">FSSAI Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Import Export Code</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Professional Tax Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Shop & Establishment Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">MSME Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">ESI Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">PF Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Drug License</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Digital Signature Certificate</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Trademark Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                <span>Trademark</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Trademark Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Trademark Search</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Trademark Renewal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Trademark Objection</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Trademark Opposition</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Trademark Assignment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Copyright Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Design Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Patent Registration</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Goods & Services Tax Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                <span>Goods & Services Tax</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST Return Filing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST Cancellation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST Amendment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST LUT Filing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST Annual Return</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Input Tax Credit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">GST Refund</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Income Tax Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                <span>Income Tax</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Income Tax Return Filing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">TDS Return Filing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Tax Notice Reply</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Income Tax Refund</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Form 16</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">80G Certificate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">12A Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Tax Audit</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* MCA Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                <span>MCA</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Annual Filing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Director KYC</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Change in Directors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Increase Authorized Capital</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Remove Directors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Share Transfer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Closure of Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Board Resolution</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Compliance Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                <span>Compliance</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Annual Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Monthly Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Quarterly Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Event Based Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Legal Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Secretarial Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Labour Law Compliance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="#" className="w-full">Environmental Compliance</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Consultation - Simple navigation item without dropdown */}
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
              Consultation
            </Link>

            {/* Guides - Simple navigation item without dropdown */}
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
              Guides
            </Link>

            {/* About Us - Simple navigation item without dropdown */}
            <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
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
