import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-serif font-bold text-gray-900">Dr. Consuela Grigorescu</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('shipping')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Shipping
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                About
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Gallery
              </button>
              <button onClick={() => scrollToSection('shipping')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Shipping
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;