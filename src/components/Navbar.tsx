
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in by looking for a token or session
    const checkLoginStatus = () => {
      // Check for authentication token in localStorage
      const token = localStorage.getItem('authToken');
      
      // Check if user is on authenticated routes
      const authenticatedPaths = ['/dashboard', '/timetable', '/preferences', '/reschedule', '/activities'];
      const isAuthenticatedRoute = authenticatedPaths.some(path => location.pathname.startsWith(path));
      
      // Set logged in if token exists or user is on authenticated route
      setIsLoggedIn(!!token || isAuthenticatedRoute);
    };
    
    checkLoginStatus();
  }, [location]);

  // Set auth token when user logs in (to be called from Login and Signup components)
  useEffect(() => {
    // Listen for custom login event
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
    
    window.addEventListener('user-logged-in', handleLogin);
    
    return () => {
      window.removeEventListener('user-logged-in', handleLogin);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-background py-4 sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Schedulify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary">Home</Link>
          <Link to="/features" className="text-foreground hover:text-primary">Features</Link>
          <Link to="/pricing" className="text-foreground hover:text-primary">Pricing</Link>
          <Link to="/about" className="text-foreground hover:text-primary">About</Link>
          {isLoggedIn && (
            <Link to="/dashboard" className="text-foreground hover:text-primary">Dashboard</Link>
          )}
        </div>

        {!isLoggedIn ? (
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <AlignJustify className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Home
            </Link>
            <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Features
            </Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Pricing
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              About
            </Link>
            {isLoggedIn && (
              <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
                Dashboard
              </Link>
            )}
          </div>
          {!isLoggedIn ? (
            <div className="pt-4 pb-3 border-t border-border">
              <div className="flex items-center px-5">
                <Button asChild variant="outline" className="w-full mb-2">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
              <div className="flex items-center px-5">
                <Button asChild className="w-full">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-border">
              <div className="flex items-center px-5">
                <Button asChild className="w-full">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
