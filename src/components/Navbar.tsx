import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import { LanguageSwitcher } from './ui/LanguageSwitcher';

export const Navbar: React.FC = () => {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: t('navbar.navItems.useCases'), href: '#use-cases' },
    { name: t('navbar.navItems.demos'), href: '#demos' },
    { name: t('navbar.navItems.faqs'), href: '#faqs' },
    { name: t('navbar.navItems.team'), href: '#team' },
  ];

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-['Museo Sans'] ${
        isScrolled
          ? 'bg-[#045462]/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img src="/images/stackit_white.svg" alt="Fermyon Logo" className="h-8 sm:h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-white/90 hover:text-[#f8ec17] transition-all duration-200 rounded-md hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side elements: CTA Button and Language Switcher */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#steps"
              className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-full text-sm font-medium text-[#045462] bg-[#f8ec17] hover:bg-white transition-all duration-200 hover:shadow-lg hover:shadow-[#f8ec17]/20 group"
            >
              {t('navbar.cta.getStarted')}
              <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            id="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-white/90 hover:text-[#f8ec17] hover:bg-white/10 transition-colors"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">{t('navbar.srOnly.openMainMenu')}</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 bg-[#045462]/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <div className="pt-20 pb-6 px-6 h-full overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavItemClick}
                className="px-4 py-4 text-lg font-medium text-white hover:text-[#f8ec17] border-b border-white/10 flex justify-between items-center group"
              >
                {item.name}
                <ChevronRight className="h-5 w-5 text-[#f8ec17] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="px-4 py-4 border-b border-white/10">
              <LanguageSwitcher />
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href="#steps"
                onClick={handleNavItemClick}
                className="flex items-center justify-center px-6 py-3 rounded-full text-[#045462] bg-[#f8ec17] hover:bg-white transition-all duration-200 font-medium text-lg w-full"
              >
                {t('navbar.cta.getStarted')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};