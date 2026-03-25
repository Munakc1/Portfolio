import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CERTIFICATES', href: '#certificates' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Muna K.C. Logo"
              className="h-10 w-10 rounded-full object-cover border-2 border-primary"
            />
            <span className="font-bold text-lg tracking-tight">
              <span className="text-primary">MUNA</span>
              <span className={isScrolled ? 'text-foreground' : 'text-white'}> K.C.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-xs font-semibold tracking-widest transition-all duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}

            <Button
              variant="default"
              size="sm"
              onClick={() => window.open('/Resume.pdf', '_blank')}
              className="text-xs tracking-wider font-semibold"
            >
              RESUME
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full ${isScrolled ? '' : 'text-white hover:text-primary'}`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className={`rounded-full ${isScrolled ? '' : 'text-white'}`}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? '' : 'text-white'}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-3 py-2 text-xs font-semibold tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full mt-2 text-xs tracking-wider font-semibold"
              onClick={() => window.open('/Resume.pdf', '_blank')}
            >
              DOWNLOAD RESUME
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
