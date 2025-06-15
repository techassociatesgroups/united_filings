
import { Menu, Phone, Mail, Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-orange-400 to-green-500 text-white px-3 py-2 rounded-full text-xl font-bold mr-2">
                India
              </div>
              <span className="text-green-600 text-xl font-bold">Filings</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden xl:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium bg-transparent">
                    Startup
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-4 gap-4 p-6 w-[800px]">
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Proprietorship</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Partnership</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">One Person Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Limited Liability Partnership</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Private Limited Company</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Section 8 Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trust Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Public Limited Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Producer Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Indian Subsidiary</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">UAE Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">USA Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Singapore Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">UK Company</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium bg-transparent">
                    Registrations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-4 gap-4 p-6 w-[800px]">
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Startup India</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trade License</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">FSSAI Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">FSSAI License</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Halal License & Certification</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ICEGATE Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Import Export Code</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Legal Entity Identifier Code</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ISO Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">PF Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ESI Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Professional Tax Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">RCMC Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">TN RERA Registration for Agents</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">12A and 80G Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">12A Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">80G Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">APEDA Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Barcode Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">BIS Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Certificate of Incumbency</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Darpan Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Digital Signature</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Shop Act Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Drug License</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Udyam Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">FCRA Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Fire License</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium bg-transparent">
                    Trademark
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-4 gap-4 p-6 w-[800px]">
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Objection</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Certificate</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Opposition</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Hearing</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Rectification</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">TM Infringement Notice</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Renewal</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Transfer</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Expedited TM Registration</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">USA Trademark Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">International Trademark</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Logo Designing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Design Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Design Objection</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Copyright Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Copyright Objection</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Patent Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Trademark Protection</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium bg-transparent">
                    Goods & Services Tax
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Return Filing by Accountant</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Annual Return Filing (GSTR-9)</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST E-Invoicing Software</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST LUT Form</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Notice</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Registration for Foreigners</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Invoicing & Filing Software</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Amendment</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Revocation</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GSTR-10</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">GST Software for Accountants</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium bg-transparent">
                    Income Tax
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Income Tax E-Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Business Tax Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ITR-1 Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ITR-2 Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ITR-3 Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ITR-4 Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ITR-5 Return Filing</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ITR-6 Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ITR-7 Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">15CA - 15CB Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">TAN Registration</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">TDS Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Income Tax Notice</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium bg-transparent">
                    MCA
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-4 gap-4 p-6 w-[800px]">
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Company Compliance</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">LLP Compliance</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">OPC Compliance</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Name Change - Company</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Registered Office Change</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">DIN eKYC Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">DIN Reactivation</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Director Change</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Remove Director</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ADT-1 Filing</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">DPT-3 Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">LLP Form 11 Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Dormant Status Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">MOA Amendment</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">AOA Amendment</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Authorized Capital Increase</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Share Transfer</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Demat of Shares</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Winding Up - LLP</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Winding Up - Company</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium bg-transparent">
                    Compliance
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">FDI Filing with RBI</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">FLA Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">FSSAI Renewal</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">FSSAI Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Business Plan</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">HR & Payroll</Link>
                      </div>
                      <div className="space-y-2">
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">PF Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">ESI Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Professional Tax Return Filing</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Partnership Compliance</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Proprietorship Compliance</Link>
                        <Link to="#" className="block hover:text-green-600 text-sm py-1">Bookkeeping</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                    Consultation
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                    Guides
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium">
                    About Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Startup</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Registrations</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Trademark</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Goods & Services Tax</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Income Tax</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">MCA</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Compliance</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Consultation</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">Guides</Link>
              <Link to="#" className="text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
