import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b relative z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold text-gray-900">IndiaFilings</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors">
                  Registration
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link to="/business-registration">Business Registration</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/registrations">All Registrations</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors">
                  Compliance
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link to="/company-compliance">Company Compliance</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/llp-compliance">LLP Compliance</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/opc-compliance">OPC Compliance</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/partnership-compliance">Partnership Compliance</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/proprietorship-compliance">Proprietorship Compliance</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-green-600 transition-colors">
                  Tax
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><Link to="/business-income-tax">Business Income Tax</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/income-tax-e-filing">Income Tax E Filing</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/gst-registration">GST Registration</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="/gst-return-filing">GST Return Filing</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/bookkeeping" className="text-gray-700 hover:text-green-600 transition-colors">
                Bookkeeping
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/profile" className="text-gray-700 hover:text-green-600 transition-colors">
              Profile
            </Link>
            <Link to="/orders" className="text-gray-700 hover:text-green-600 transition-colors">
              Orders
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="relative">
                  <ShoppingCart className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer" />
                  <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white rounded-full px-1 text-xs">0</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Your cart is empty.</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="lg:hidden text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/business-registration" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Business Registration
            </Link>
            <Link to="/registrations" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              All Registrations
            </Link>
            <Link to="/company-compliance" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Company Compliance
            </Link>
             <Link to="/llp-compliance" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              LLP Compliance
            </Link>
            <Link to="/opc-compliance" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              OPC Compliance
            </Link>
            <Link to="/partnership-compliance" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Partnership Compliance
            </Link>
            <Link to="/proprietorship-compliance" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Proprietorship Compliance
            </Link>
            <Link to="/business-income-tax" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Business Income Tax
            </Link>
            <Link to="/income-tax-e-filing" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Income Tax E Filing
            </Link>
            <Link to="/gst-registration" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              GST Registration
            </Link>
            <Link to="/gst-return-filing" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              GST Return Filing
            </Link>
            <Link to="/bookkeeping" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Bookkeeping
            </Link>
             <Link to="/profile" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Profile
            </Link>
            <Link to="/orders" className="block text-gray-700 hover:text-green-600 transition-colors py-2">
              Orders
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
