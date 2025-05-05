
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">Schedulify</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              AI-powered scheduling that adapts to your life, not the other way around.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link to="/integrations" className="text-muted-foreground hover:text-primary">Integrations</Link></li>
              <li><Link to="/changelog" className="text-muted-foreground hover:text-primary">What's New</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-primary">Guides</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-primary">Help Center</Link></li>
              <li><Link to="/api" className="text-muted-foreground hover:text-primary">API Docs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/legal" className="text-muted-foreground hover:text-primary">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Schedulify. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
