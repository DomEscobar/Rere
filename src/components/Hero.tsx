import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { ParticleCanvas } from './ui/ParticleCanvas';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative pt-20 overflow-hidden">
      <ParticleCanvas />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="inline-block bg-clip-text text-[#f8ec17]">
                High-performance serverless functions
              </span>{' '}
              <span className="block mt-2">
                on Stackit, powered by WebAssembly
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Give your customers faster, more powerful edge compute with longer requests, 
              more memory, built-in storage, and sub-millisecond performance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#use-cases" 
                className="flex items-center justify-center px-8 py-3 rounded-lg bg-[#f8ec17] text-[#045462] font-medium text-lg transition-all duration-200 hover:bg-[#f8e614] hover:shadow-lg hover:shadow-[#f8ec17]/20 hover:-translate-y-1"
              >
                Explore Use Cases
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="#steps" 
                className="flex items-center justify-center px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-lg transition-all duration-200 hover:bg-white/20 hover:-translate-y-1"
              >
                <Zap className="mr-2 h-5 w-5 text-[#f8ec17]" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#045462] to-transparent"></div>
    </section>
  );
};