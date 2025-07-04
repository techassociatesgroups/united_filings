
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CartDropdown from './CartDropdown';
import { ChevronDown, Menu, X, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="https://indiafilings.com/images/IndiaFilings-Logo.svg" alt="IndiaFilings" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 relative z-50">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium">
                    Business Registration
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full mt-1 w-96 bg-white border rounded-md shadow-lg p-4 z-[999]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Company Registration</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="/private-limited-company" className="text-gray-600 hover:text-green-600">Private Limited Company</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/public-limited-company" className="text-gray-600 hover:text-green-600">Public Limited Company</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/one-person-company" className="text-gray-600 hover:text-green-600">One Person Company</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/section-8-company" className="text-gray-600 hover:text-green-600">Section 8 Company</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Other Registrations</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="/partnership" className="text-gray-600 hover:text-green-600">Partnership Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/limited-liability-partnership" className="text-gray-600 hover:text-green-600">LLP Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/proprietorship" className="text-gray-600 hover:text-green-600">Proprietorship</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium">
                    Tax Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full mt-1 w-96 bg-white border rounded-md shadow-lg p-4 z-[999]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Income Tax</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="/income-tax-e-filing" className="text-gray-600 hover:text-green-600">Income Tax E-Filing</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/15ca-15cb-filing" className="text-gray-600 hover:text-green-600">15CA - 15CB Filing</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/tan-registration" className="text-gray-600 hover:text-green-600">TAN Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/tds-return-filing" className="text-gray-600 hover:text-green-600">TDS Return Filing</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/income-tax-notice" className="text-gray-600 hover:text-green-600">Income Tax Notice</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">GST Services</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="/gst-registration" className="text-gray-600 hover:text-green-600">GST Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/gst-return-filing" className="text-gray-600 hover:text-green-600">GST Return Filing</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium">
                    Compliance
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full mt-1 w-96 bg-white border rounded-md shadow-lg p-4 z-[999]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Company Compliance</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="/company-compliance" className="text-gray-600 hover:text-green-600">Company Compliance</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/din-reactivation" className="text-gray-600 hover:text-green-600">DIN Reactivation</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/director-change" className="text-gray-600 hover:text-green-600">Director Change</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/remove-director" className="text-gray-600 hover:text-green-600">Remove Director</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/adt-1-filing" className="text-gray-600 hover:text-green-600">ADT-1 Filing</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/dpt-3-filing" className="text-gray-600 hover:text-green-600">DPT-3 Filing</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">LLP & Other Compliance</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="/llp-form-11-filing" className="text-gray-600 hover:text-green-600">LLP Form 11 Filing</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/dormant-status-filing" className="text-gray-600 hover:text-green-600">Dormant Status Filing</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">MOA Amendment</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">AOA Amendment</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Authorized Capital Increase</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium">
                    More Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full mt-1 w-96 bg-white border rounded-md shadow-lg p-4 z-[999]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Registrations</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="/trademark-registration" className="text-gray-600 hover:text-green-600">Trademark Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Share Transfer</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Demat of Shares</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Winding Up - LLP</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Winding Up - Company</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Udyam Registration</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Other Services</h3>
                        <ul className="space-y-1">
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">FCRA Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/fire-license" className="text-gray-600 hover:text-green-600">Fire License</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in UAE</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in USA</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in Singapore</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in UK</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="/trust-registration" className="text-gray-600 hover:text-green-600">Trust Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Society Registration</Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link to="#" className="text-gray-600 hover:text-green-600">Nidhi Company</Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <CartDropdown />
            <Button asChild variant="outline">
              <Link to="/auth">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link to="/consultation">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <CartDropdown />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link to="/business-registration" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Business Registration
              </Link>
              <Link to="/gst-registration" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">
                GST Registration
              </Link>
              <Link to="/trademark-registration" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Trademark Registration
              </Link>
              <Link to="/income-tax-e-filing" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Income Tax E-Filing
              </Link>
              <Link to="/consultation" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Get Consultation
              </Link>
              <div className="px-3 py-2">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/auth">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
