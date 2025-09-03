import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: 'Books', href: '#books' },
      { label: 'Podcasts', href: '#podcasts' },
      { label: 'Videos', href: '#videos' },
      { label: 'Blogs', href: '#blogs' }
    ],
    events: [
      { label: 'Book Events', href: '#book-events' },
      { label: 'Social Events', href: '#social-events' },
      { label: 'Workshops', href: '#workshops' },
      { label: 'Book Clubs', href: '#book-clubs' }
    ],
    connect: [
      { label: 'About', href: '#about' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
      { label: 'Shop', href: '#shop' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-charcoal to-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="font-playfair text-3xl mb-4">Stay Connected</h3>
          <p className="font-cormorant text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our literary community and be the first to know about new releases, 
            exclusive content, and upcoming events.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 font-cormorant focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" className="px-6 py-3 font-cormorant">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h4 className="font-playfair text-2xl mb-4">Ishrat Fayaz</h4>
            <p className="font-cormorant text-primary-foreground/80 leading-relaxed mb-6">
              Author from Kashmir exploring the depths of human experience through 
              the art of storytelling.
            </p>
            
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span className="font-cormorant text-sm">Kashmir, India</span>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h5 className="font-playfair text-lg mb-4">Explore</h5>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-cormorant text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-playfair text-lg mb-4">Events</h5>
            <ul className="space-y-2">
              {footerLinks.events.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-cormorant text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-playfair text-lg mb-4">Connect</h5>
            <ul className="space-y-2 mb-6">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-cormorant text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-charcoal transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-cormorant text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Ishrat Fayaz. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#privacy" className="font-cormorant text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="font-cormorant text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#contact" className="font-cormorant text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300">
                <Mail className="h-4 w-4 inline mr-1" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-powder-blue rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;