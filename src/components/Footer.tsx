
import { Facebook, MessageCircle, Twitter, Youtube, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-orange-400 to-green-500 text-white px-3 py-2 rounded-full text-xl font-bold mr-2">
                India
              </div>
              <span className="text-green-400 text-xl font-bold">Filings</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              India's leading business registration and compliance platform. We make starting and managing your business simple, fast, and affordable.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                +91 8106223262 / 7659902579
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                hemanth@capicons.in
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="h-4 w-4 mr-2 text-green-400" />
                Mon - Sat: 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>

          {/* Business Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg border-b border-gray-700 pb-2">Business Services</h4>
            <ul className="space-y-2">
              <li><Link to="/private-limited-company" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Private Limited Company</Link></li>
              <li><Link to="/limited-liability-partnership" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Limited Liability Partnership</Link></li>
              <li><Link to="/one-person-company" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">One Person Company</Link></li>
              <li><Link to="/partnership" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Partnership Firm</Link></li>
              <li><Link to="/proprietorship" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Proprietorship</Link></li>
              <li><Link to="/section-8-company" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Section 8 Company</Link></li>
              <li><Link to="/trust-registration" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Trust Registration</Link></li>
            </ul>
          </div>

          {/* Compliance & Tax */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg border-b border-gray-700 pb-2">Compliance & Tax</h4>
            <ul className="space-y-2">
              <li><Link to="/gst-registration" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">GST Registration</Link></li>
              <li><Link to="/gst-return-filing" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">GST Return Filing</Link></li>
              <li><Link to="/income-tax-e-filing-new" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Income Tax E-Filing</Link></li>
              <li><Link to="/trademark-registration" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Trademark Registration</Link></li>
              <li><Link to="/digital-signature" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Digital Signature</Link></li>
              <li><Link to="/import-export-code" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Import Export Code</Link></li>
              <li><Link to="/fssai-registration" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">FSSAI Registration</Link></li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg border-b border-gray-700 pb-2">Resources & Support</h4>
            <ul className="space-y-2">
              <li><Link to="/guide" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Business Setup Guide</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">About Us</Link></li>
              <li><Link to="/consultation" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Expert Consultation</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200 flex items-center">
                Career <ExternalLink className="h-3 w-3 ml-1" />
              </a></li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-green-400 text-2xl font-bold">10,00,000+</div>
              <div className="text-gray-300 text-sm">Businesses Registered</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-green-400 text-2xl font-bold">15+</div>
              <div className="text-gray-300 text-sm">Years of Experience</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-green-400 text-2xl font-bold">99.9%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Refund Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Disclaimer</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Confidentiality Policy</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 IndiaFilings Private Limited. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Licensed by the Government of India | ISO 9001:2015 Certified
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm hidden sm:block">Follow Us:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="http://x.com/CAPiconsultants" 
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Badge */}
      <div className="bg-gray-800 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs">
            🔒 Your data is secure with us | SSL Encrypted | Government Approved Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
