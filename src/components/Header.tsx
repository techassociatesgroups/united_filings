import { Phone, Mail, Search, ShoppingCart, User, X, Building2, ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import CartDropdown from '@/components/CartDropdown';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const businessRegistrationItems: { title: string; href: string; description: string }[] = [
  {
    title: "Proprietorship",
    href: "/proprietorship",
    description: "A sole proprietorship is a type of unincorporated business that is owned and run by one individual.",
  },
  {
    title: "Partnership Firm",
    href: "/partnership",
    description: "A legal form of business operation between two or more individuals who share management and profits.",
  },
  {
    title: "One Person Company",
    href: "/one-person-company",
    description: "A company that has only one person as to its member.",
  },
  {
    title: "Limited Liability Partnership",
    href: "/limited-liability-partnership",
    description: "A partnership in which some or all partners have limited liabilities.",
  },
  {
    title: "Private Limited Company",
    href: "/private-limited-company",
    description: "A type of privately held small business entity.",
  },
  {
    title: "Public Limited Company",
    href: "/public-limited-company",
    description: "A company whose securities are traded on a stock exchange and can be bought and sold by anyone.",
  },
  {
    title: "Section 8 Company",
    href: "/section-8-company",
    description: "An organization which is registered for promoting commerce, art, science, sports, education, etc.",
  },
  {
    title: "Trust Registration",
    href: "/trust-registration",
    description: "A legal arrangement in which one person holds property for the benefit of another.",
  },
  {
    title: "Producer Company",
    href: "/producer-company",
    description: "A legally recognized body of farmers/agriculturists with the aim to improve the standard of their living.",
  },
  {
    title: "Indian Subsidiary",
    href: "/indian-subsidiary",
    description: "A company in India whose controlling interest is held by another company.",
  },
  {
    title: "Startup India",
    href: "/startup-india",
    description: "An initiative of the Government of India for generation of employment and wealth creation.",
  },
  {
    title: "Trade License",
    href: "/trade-license",
    description: "A license or permission issued by the municipal corporation to a person to carry on a particular business.",
  },
  {
    title: "FSSAI Registration",
    href: "/fssai-registration",
    description: "Food Safety and Standards Authority of India registration for food businesses.",
  },
  {
    title: "FSSAI License",
    href: "/fssai-license",
    description: "State & Central license for food businesses based on turnover.",
  },
  {
    title: "Halal Licence & Certification",
    href: "/halal-certification",
    description: "Certification for products permissible under Islamic law.",
  },
  {
    title: "ICEGATE Registration",
    href: "/icegate-registration",
    description: "Indian Customs Electronic Gateway registration for e-filing.",
  },
  {
    title: "Import Export Code",
    href: "/import-export-code",
    description: "Registration for importing and exporting goods from India.",
  },
];

const registrationItems: { title: string; href: string; description: string }[] = [
  {
    title: "Proprietorship",
    href: "/proprietorship",
    description: "A sole proprietorship is a type of unincorporated business that is owned and run by one individual.",
  },
  {
    title: "Partnership Firm",
    href: "/partnership",
    description: "A legal form of business operation between two or more individuals who share management and profits.",
  },
  {
    title: "One Person Company",
    href: "/one-person-company",
    description: "A company that has only one person as to its member.",
  },
  {
    title: "Limited Liability Partnership",
    href: "/limited-liability-partnership",
    description: "A partnership in which some or all partners have limited liabilities.",
  },
  {
    title: "Private Limited Company",
    href: "/private-limited-company",
    description: "A type of privately held small business entity.",
  },
  {
    title: "Public Limited Company",
    href: "/public-limited-company",
    description: "A company whose securities are traded on a stock exchange and can be bought and sold by anyone.",
  },
  {
    title: "Section 8 Company",
    href: "/section-8-company",
    description: "An organization which is registered for promoting commerce, art, science, sports, education, etc.",
  },
  {
    title: "Trust Registration",
    href: "/trust-registration",
    description: "A legal arrangement in which one person holds property for the benefit of another.",
  },
  {
    title: "Producer Company",
    href: "/producer-company",
    description: "A legally recognized body of farmers/agriculturists with the aim to improve the standard of their living.",
  },
  {
    title: "Indian Subsidiary",
    href: "/indian-subsidiary",
    description: "A company in India whose controlling interest is held by another company.",
  },
  {
    title: "Startup India",
    href: "/startup-india",
    description: "An initiative of the Government of India for generation of employment and wealth creation.",
  },
  {
    title: "Trade License",
    href: "/trade-license",
    description: "A license or permission issued by the municipal corporation to a person to carry on a particular business.",
  },
  {
    title: "FSSAI Registration",
    href: "/fssai-registration",
    description: "Food Safety and Standards Authority of India registration for food businesses.",
  },
  {
    title: "FSSAI License",
    href: "/fssai-license",
    description: "State & Central license for food businesses based on turnover.",
  },
  {
    title: "Halal Licence & Certification",
    href: "/halal-certification",
    description: "Certification for products permissible under Islamic law.",
  },
  {
    title: "ICEGATE Registration",
    href: "/icegate-registration",
    description: "Indian Customs Electronic Gateway registration for e-filing.",
  },
  {
    title: "Import Export Code",
    href: "/import-export-code",
    description: "Registration for importing and exporting goods from India.",
  },
];

const Header = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [gstOpen, setGstOpen] = useState(false);
  const [taxOpen, setTaxOpen] = useState(false);
  const [mcaOpen, setMcaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search data - all available services
  const allServices = [
    { name: "Proprietorship", path: "/proprietorship" },
    { name: "Partnership Firm", path: "/partnership" },
    { name: "One Person Company", path: "/one-person-company" },
    { name: "Limited Liability Partnership", path: "/limited-liability-partnership" },
    { name: "Private Limited Company", path: "/private-limited-company" },
    { name: "Public Limited Company", path: "/public-limited-company" },
    { name: "Section 8 Company", path: "/section-8-company" },
    { name: "Trust Registration", path: "/trust-registration" },
    { name: "Producer Company", path: "/producer-company" },
    { name: "Indian Subsidiary", path: "/indian-subsidiary" },
    { name: "Startup India", path: "/startup-india" },
    { name: "Trade License", path: "/trade-license" },
    { name: "FSSAI Registration", path: "/fssai-registration" },
    { name: "FSSAI License", path: "/fssai-license" },
    { name: "GST Registration", path: "/gst-registration" },
    { name: "GST Return Filing", path: "/gst-return-filing" },
    { name: "Income Tax E-Filing", path: "/income-tax-e-filing-new" },
    { name: "Trademark Registration", path: "/trademark-registration" },
    { name: "Copyright Registration", path: "/copyright-registration" },
    { name: "Patent Registration", path: "/patent-registration" },
    { name: "Import Export Code", path: "/import-export-code" },
    { name: "Digital Signature", path: "/digital-signature" },
    { name: "PF Registration", path: "/pf-registration" },
    { name: "ESI Registration", path: "/esi-registration" },
  ];

  // Filter services based on search query
  const filteredServices = allServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredServices.length > 0) {
      window.location.href = filteredServices[0].path;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearchOpen(value.length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-gray-600">+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-gray-600">info@capi.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-blue-600 font-medium">Trusted by 10,00,000+ businesses across India</span>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <User className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">CA</h1>
              <span className="text-xl font-bold text-blue-800 ml-1">PI</span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Business Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setBusinessOpen(true)}
              onMouseLeave={() => setBusinessOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                <span>Business</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {businessOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-6">
                    <h3 className="font-semibold text-blue-600 mb-4">Business Registration</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <Link to="/private-limited-company" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Private Limited Company</Link>
                      <Link to="/llp" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Limited Liability Partnership</Link>
                      <Link to="/opc" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">One Person Company</Link>
                      <Link to="/partnership" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Partnership Firm</Link>
                      <Link to="/proprietorship" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Sole Proprietorship</Link>
                      <Link to="/indian-subsidiary" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Indian Subsidiary</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* GST Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setGstOpen(true)}
              onMouseLeave={() => setGstOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                <span>GST</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {gstOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-2">
                      <Link to="/gst-registration" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">GST Registration</Link>
                      <Link to="/gst-return-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">GST Return Filing</Link>
                      <Link to="/gst-annual-return-filing-gstr9" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">GST Annual Return</Link>
                      <Link to="/gst-registration-amendment" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">GST Registration Amendment</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tax Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setTaxOpen(true)}
              onMouseLeave={() => setTaxOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                <span>Tax</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {taxOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-2">
                      <Link to="/income-tax-e-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Income Tax E-Filing</Link>
                      <Link to="/itr1-return-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">ITR-1 Return Filing</Link>
                      <Link to="/itr2-return-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">ITR-2 Return Filing</Link>
                      <Link to="/business-income-tax" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Business Income Tax</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trademark */}
            <Link to="/trademark-registration" className="text-gray-700 hover:text-blue-600 font-medium">
              Trademark
            </Link>

            {/* MCA Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMcaOpen(true)}
              onMouseLeave={() => setMcaOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                <span>MCA</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {mcaOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-2">
                      <Link to="/company-compliance" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Company Compliance</Link>
                      <Link to="/din-reactivation" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">DIN Reactivation</Link>
                      <Link to="/director-change" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Director Change</Link>
                      <Link to="/remove-director" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Remove Director</Link>
                      <Link to="/adt1-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">ADT-1 Filing</Link>
                      <Link to="/dpt3-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">DPT-3 Filing</Link>
                      <Link to="/llp-form11-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">LLP Form 11 Filing</Link>
                      <Link to="/dormant-status-filing" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Dormant Status Filing</Link>
                      <Link to="/moa-amendment" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">MOA Amendment</Link>
                      <Link to="/aoa-amendment" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">AOA Amendment</Link>
                      <Link to="/authorized-capital-increase" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Authorized Capital Increase</Link>
                      <Link to="/share-transfer" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Share Transfer</Link>
                      <Link to="/demat-of-shares" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Demat of Shares</Link>
                      <Link to="/winding-up-llp" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Winding Up - LLP</Link>
                      <Link to="/winding-up-company" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">Winding Up - Company</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Consult */}
            <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium">
              Consult
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="py-4 space-y-2">
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Business</button>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">GST</button>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Tax</button>
              <Link to="/trademark-registration" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Trademark</Link>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">MCA</button>
              <Link to="/consultation" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Consult</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
