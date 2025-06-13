
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Scissors, Calendar, ChevronRight, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/services', label: 'Services', icon: Scissors },
    { href: '/book', label: 'Book', icon: Calendar },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 h-20 bg-white transition-shadow duration-200 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <div className="flex items-center justify-between h-full px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-outfit font-extrabold text-2xl tracking-tight text-rich-black hover:text-sage transition-colors duration-200"
        >
          <img src="/images/npbglogo.png" alt="Melissa Jane Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-medium transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-sage border-b-2 border-sage'
                  : 'text-rich-black hover:text-sage'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild className="bg-rose hover:bg-rose/90 text-white">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-sage/10">
              <Menu className="h-6 w-6 text-sage" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 p-0 border-l-0 bg-gradient-to-br from-white via-white to-sage/10">
            {/* Custom Close Button - More Prominent */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-rose text-white flex items-center justify-center shadow-md hover:bg-rose/90 hover:shadow-lg transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex flex-col h-full">
              {/* Header with logo and decorative element */}
              <div className="relative p-6 border-b border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-sage/5 rounded-full blur-2xl -z-10"></div>
                
                <span className="font-outfit font-extrabold text-xl tracking-tight">
                  <img src="/images/npbglogo.png" alt="Melissa Jane Logo" className="h-10 w-auto" />
                </span>
              </div>
              
              {/* Navigation Links with Icons */}
              <nav className="flex flex-col p-6 flex-1">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between py-4 text-lg font-medium transition-all duration-300 ${index !== navLinks.length - 1 ? 'border-b border-gray-100' : ''} ${
                        isActive(link.href)
                          ? 'text-sage'
                          : 'text-rich-black hover:text-sage'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isActive(link.href) ? 'bg-sage/20' : 'bg-gray-100 group-hover:bg-sage/10'} transition-colors duration-300`}>
                          <Icon className={`h-5 w-5 ${isActive(link.href) ? 'text-sage' : 'text-gray-500 group-hover:text-sage'} transition-colors duration-300`} />
                        </div>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                      </div>
                      <ChevronRight className={`h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 ${isActive(link.href) ? 'opacity-100 translate-x-0 text-sage' : 'group-hover:opacity-100 group-hover:translate-x-0 text-gray-400'}`} />
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Info */}
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-gray-600 hover:text-sage transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+61 402 832 102</span>
                </div>
                <Button asChild className="w-full bg-rose hover:bg-rose/90 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  <Link to="/book" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Book Your Appointment</span>
                  </Link>
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-sage/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-1/2 left-8 w-16 h-16 bg-rose/10 rounded-full blur-xl -z-10"></div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
