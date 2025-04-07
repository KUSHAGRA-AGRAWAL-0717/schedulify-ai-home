
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">Schedulify</span>
            </Link>
            <p className="text-gray-600 mb-6">
              AI-powered scheduling that adapts to your life, not the other way around.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-schedulify-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-schedulify-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-schedulify-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-schedulify-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-600 hover:text-schedulify-blue">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-schedulify-blue">Pricing</Link></li>
              <li><Link to="/integrations" className="text-gray-600 hover:text-schedulify-blue">Integrations</Link></li>
              <li><Link to="/changelog" className="text-gray-600 hover:text-schedulify-blue">What's New</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-schedulify-blue">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-schedulify-blue">Guides</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-schedulify-blue">Help Center</Link></li>
              <li><Link to="/api" className="text-gray-600 hover:text-schedulify-blue">API Docs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-schedulify-blue">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-schedulify-blue">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-schedulify-blue">Contact</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-schedulify-blue">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Schedulify. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-schedulify-blue text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-schedulify-blue text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-schedulify-blue text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
