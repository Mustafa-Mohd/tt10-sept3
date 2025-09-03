import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BooksDropdownSimple from './BooksDropdownSimple';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavItems = [
    { label: 'Welcome', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Podcasts', href: '/podcasts' },
    { label: 'Videos', href: '/videos' },
  ];

  const rightNavItems = [
    { label: 'Press', href: '/press' },
    
    { label: 'Events', href: '/events' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="font-cormorant text-base tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300 relative"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
            <BooksDropdownSimple />
          </div>

          {/* Centered Logo/Name */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="font-playfair text-xl lg:text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors duration-300">
              Ishrat Fayaz
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="font-cormorant text-base tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300 relative"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Search and Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden lg:flex text-slate-700 hover:text-slate-900 hover:bg-slate-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-slate-200 bg-white/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-3 pt-3 px-2">
              {leftNavItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block font-cormorant text-base tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              {/* Books Dropdown for Mobile */}
              <div className="block">
                <BooksDropdownSimple />
              </div>
              {rightNavItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block font-cormorant text-base tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="self-start mt-4 text-slate-700 hover:text-slate-900 hover:bg-slate-100">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
