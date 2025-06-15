
import { Phone, Mail, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto">
                    Startup
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[750px] gap-6 p-6 md:grid-cols-3 bg-white">
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <h4 className="font-bold text-green-600 mb-2 text-base">START A BUSINESS (INDIA)</h4>
                        <Link to="/proprietorship" className="text-gray-600 hover:text-green-600">Proprietorship</Link>
                        <Link to="/partnership" className="text-gray-600 hover:text-green-600">Partnership Firm</Link>
                        <Link to="/one-person-company" className="text-gray-600 hover:text-green-600">One Person Company</Link>
                        <Link to="/limited-liability-partnership" className="text-gray-600 hover:text-green-600">Limited Liability Partnership</Link>
                        <Link to="/private-limited-company" className="text-gray-600 hover:text-green-600">Private Limited Company</Link>
                        <Link to="/public-limited-company" className="text-gray-600 hover:text-green-600">Public Limited Company</Link>
                        <Link to="/section-8-company" className="text-gray-600 hover:text-green-600">Section 8 Company</Link>
                        <Link to="/producer-company" className="text-gray-600 hover:text-green-600">Producer Company</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Nidhi Company</Link>
                        <Link to="/indian-subsidiary" className="text-gray-600 hover:text-green-600">Indian Subsidiary</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <h4 className="font-bold text-green-600 mb-2 text-base">INTERNATIONAL BUSINESS</h4>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in UAE</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in USA</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in Singapore</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in UK</Link>
                        <h4 className="font-bold text-green-600 mb-2 pt-4 text-base">TRUST / NGO</h4>
                        <Link to="/trust-registration" className="text-gray-600 hover:text-green-600">Trust Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Society Registration</Link>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center text-center">
                          <div>
                            <h4 className="font-bold text-gray-800 text-base">Need help?</h4>
                            <p className="text-gray-600 mt-1 text-sm font-normal">Talk to our experts to get personalised help.</p>
                          </div>
                          <Link to="#" className="mt-4 block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
                            TALK TO AN EXPERT
                          </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto">
                    Registrations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[1000px] gap-6 p-6 md:grid-cols-4 bg-white">
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/startup-india" className="text-gray-600 hover:text-green-600">Startup India</Link>
                          <Link to="/trade-license" className="text-gray-600 hover:text-green-600">Trade License</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">FSSAI Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">FSSAI License</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Halal License & Certification</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">ICEGATE Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Import Export Code</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="#" className="text-gray-600 hover:text-green-600">Legal Entity Identifier Code</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">ISO Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">PF Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">ESI Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Professional Tax Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">RCMC Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">TN RERA Registration for Agents</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="#" className="text-gray-600 hover:text-green-600">12A and 80G Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">12A Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">80G Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">APEDA Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Barcode Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">BIS Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Certificate of Incumbency</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="#" className="text-gray-600 hover:text-green-600">Darpan Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Digital Signature</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Shop Act Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Drug License</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Udyam Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">FCRA Registration</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Fire License</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto">
                    Trademark
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[1000px] gap-6 p-6 md:grid-cols-4 bg-white">
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Objection</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Certificate</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Opposition</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Hearing</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Rectification</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">TM Infringement Notice</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Renewal</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Transfer</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Expedited TM Registration</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">USA Trademark Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">International Trademark</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Logo Designing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Design Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Design Objection</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">Copyright Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Copyright Objection</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Patent Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Trademark Protection</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto">
                    Goods & Services Tax
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-6 p-6 md:grid-cols-2 bg-white">
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Return Filing by Accountant</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Annual Return Filing (GSTR-9)</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST E-Invoicing Software</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST LUT Form</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Notice</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Registration for Foreigners</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Invoicing & Filing Software</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Amendment</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Revocation</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GSTR-10</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">GST Software for Accountants</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto">
                    Income Tax
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-6 p-6 md:grid-cols-2 bg-white">
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">Income Tax E-Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Business Tax Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ITR-1 Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ITR-2 Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ITR-3 Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ITR-4 Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ITR-5 Return Filing</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">ITR-6 Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ITR-7 Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">15CA - 15CB Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">TAN Registration</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">TDS Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Income Tax Notice</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto">
                    MCA
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[1000px] gap-6 p-6 md:grid-cols-4 bg-white">
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">Company Compliance</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">LLP Compliance</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">OPC Compliance</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Name Change - Company</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Registered Office Change</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">DIN eKYC Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">DIN Reactivation</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Director Change</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Remove Director</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ADT-1 Filing</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">DPT-3 Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">LLP Form 11 Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Dormant Status Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">MOA Amendment</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">AOA Amendment</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">Authorized Capital Increase</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Share Transfer</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Demat of Shares</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Winding Up - LLP</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Winding Up - Company</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto">
                    Compliance
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-6 p-6 md:grid-cols-2 bg-white">
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">FDI Filing with RBI</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">FLA Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">FSSAI Renewal</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">FSSAI Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Business Plan</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">HR & Payroll</Link>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm font-normal">
                        <Link to="#" className="text-gray-600 hover:text-green-600">PF Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">ESI Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Professional Tax Return Filing</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Partnership Compliance</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Proprietorship Compliance</Link>
                        <Link to="#" className="text-gray-600 hover:text-green-600">Bookkeeping</Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/consultation" className="text-gray-700 hover:text-green-600 transition-colors">
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
