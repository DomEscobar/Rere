import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navItems = [
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Demos', href: '#demos' },
    { name: 'Resources', href: '#resources' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#045462]/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/stackit_white.svg" alt="Fermyon Logo" className="h-8 sm:h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-[#f8ec17] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div>
            <a
              href="#steps"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#045462] bg-[#f8ec17] hover:bg-[#f8e614] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f8ec17] transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};