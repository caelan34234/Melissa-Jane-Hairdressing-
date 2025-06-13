
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronRight, ExternalLink, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleScroll = () => {
      const footerElement = document.getElementById('futuristic-footer');
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        const isFooterVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isFooterVisible);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax movement calculation
  const getParallaxStyle = (factor = 1) => {
    if (typeof window === 'undefined' || !isVisible) return {};
    
    return {
      transform: `translate(${(mousePosition.x - 0.5) * factor * -10}px, ${(mousePosition.y - 0.5) * factor * -10}px)`,
      transition: 'transform 0.2s ease-out'
    };
  };

  // Social media links with micro-animations
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/melissa_jane_hairdressing/", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=100063522656080", label: "Facebook" },
  ];

  // Quick links with hover animations
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/book', label: 'Book Online' },
  ];

  return (
    <footer id="futuristic-footer" className="relative overflow-hidden bg-rich-black text-white py-12 sm:py-16 md:py-20 border-t border-white/5">


      {/* Glassmorphic container */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
          {/* Logo & Tagline - Spans 3 columns on desktop, full width on mobile */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start w-full">
              <img src="/images/npbglogo.png" alt="Melissa Jane Logo" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-white/70 tracking-wide mb-8 md:mb-0 max-w-xs leading-relaxed text-center md:text-left">
              Elevating beauty through artistry and personalized care since 2010. Our commitment to excellence and innovation defines every service we provide.
            </p>
          </div>

          {/* Quick Links - Spans 2 columns on desktop */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-sm uppercase tracking-widest mb-3 sm:mb-5 text-white/90 font-medium">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group text-sm sm:text-base text-white/70 hover:text-white flex items-center transition-all duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                    <ChevronRight className="h-3 w-3 ml-1 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Spans 3 columns on desktop */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-sm uppercase tracking-widest mb-3 sm:mb-5 text-white/90 font-medium">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-rose mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-white/70 leading-relaxed">44a McBride St, Cockatoo, VIC, Australia, 3781</span>
              </li>
              <li>
                <a 
                  href="tel:+61402832102" 
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  <Phone className="h-4 w-4 text-rose" />
                  <span className="text-sm sm:text-base relative overflow-hidden">
                      <span className="inline-block transform transition-transform duration-300">+61 402 832 102</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                </a>
              </li>

            </ul>
          </div>

          {/* Hours - Spans 2 columns on desktop */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-sm uppercase tracking-widest mb-3 sm:mb-5 text-white/90 font-medium">Hours</h4>
            <div className="text-sm text-white/70 space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-3.5 w-3.5 text-sage flex-shrink-0" />
                <span className="text-sm tracking-wide">Mon-Fri: 9AM-6PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-3.5 w-3.5 text-sage flex-shrink-0" />
                <span className="text-sm tracking-wide">Sat: 9AM-5PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-3.5 w-3.5 text-sage flex-shrink-0" />
                <span className="text-sm tracking-wide">Sun: Closed</span>
              </div>
            </div>
          </div>

          {/* Social - Spans 2 columns on desktop */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-sm uppercase tracking-widest mb-3 sm:mb-5 text-white/90 font-medium">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <span className="absolute inset-0 bg-rose opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(social.icon, { className: 'h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5' })}
                  </span>
                  <span className="absolute inset-0 border border-white/10 rounded-full scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0 transition-all duration-300"></span>
                  <span className="absolute inset-0 border border-white/20 rounded-full scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mb-8">
          <Separator className="bg-white/10 h-[0.5px]" />
        </div>

        {/* Bottom bar with copyright and book button */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 py-4">
          <p className="text-sm tracking-wide text-white/50">
            © 2025 Melissa Jane Hairdressing. All rights reserved.
          </p>
          
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="group bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-full px-4 h-8 w-full md:w-auto max-w-[200px]"
          >
            <Link to="/book" className="flex items-center space-x-1">
              <span className="text-sm font-normal tracking-wide">Book Appointment</span>
              <ExternalLink className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
