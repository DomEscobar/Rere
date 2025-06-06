import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Terminal, ArrowDownCircle, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export const Hero: React.FC = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-b from-[#011e24] via-[#022a32] to-[#033b44] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        {/* Animated circles - hidden on mobile for performance */}
        <div className="hidden md:block absolute w-[800px] h-[800px] rounded-full border border-[#f8ec17]/10 -top-[400px] -right-[400px] animate-[spin_60s_linear_infinite]"></div>
        <div className="hidden md:block absolute w-[600px] h-[600px] rounded-full border border-[#f8ec17]/5 -bottom-[300px] -left-[300px] animate-[spin_40s_linear_infinite_reverse]"></div>
        
        {/* Diagonal tech lines - fewer on mobile */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute h-px bg-gradient-to-r from-transparent via-[#f8ec17]/20 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: '0',
                right: '0',
                transform: `rotate(${Math.random() * 180 - 90}deg)`,
                opacity: Math.random() * 0.1 + 0.05
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content - Text and CTAs */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center mb-4 md:mb-6 bg-white/5 backdrop-blur-sm rounded-full p-1 pl-1 pr-3 border border-white/10">
              <span className="bg-[#f8ec17] text-[#045462] text-xs font-bold rounded-full px-3 py-1 mr-2">{t('hero.badge.new')}</span>
              <span className="text-white/90 text-sm">{t('hero.badge.text')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
              <span className="block text-white mb-2">
                {t('hero.heading.line1')}
              </span>
              <span className="text-[#f8ec17] block mb-2">
                {t('hero.heading.line2')}
              </span>
              <span className="block text-white">
                {t('hero.heading.line3')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8">
            </div>
            
            <div className="hidden md:flex items-center text-white/50 text-sm">
              <ArrowDownCircle className="h-4 w-4 mr-2 animate-bounce" />
              <span>{t('hero.scrollCta')}</span>
            </div>
          </div>
          
          {/* Right content - Code mockup */}
          <div 
            className={`transform transition-all duration-1000 delay-700 relative max-w-full ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-[#f8ec17]/5 border border-white/10 backdrop-blur-sm bg-black/30 w-full max-w-[500px] mx-auto lg:ml-auto">
              {/* Code editor header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#011e24] border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="text-xs text-white/40 font-mono">{t('hero.codeExample.filename')}</div>
                <div></div>
              </div>
              
              {/* Code content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto">
                <pre className="text-white/80 leading-relaxed whitespace-pre max-w-full overflow-hidden">
                  <span className="text-blue-400">use</span> <span className="text-green-400">fermyon_spin</span>::<span className="text-green-400">*</span>;{'\n\n'}
                  <span className="text-purple-400">#[http_component]</span>{'\n'}
                  <span className="text-blue-400">fn</span> <span className="text-yellow-400">handle_request</span>(request: <span className="text-green-400">Request</span>) -&gt; <span className="text-green-400">Response</span> {'{'}
                  {'\n    '}
                  <span className="text-purple-400">let</span> <span className="text-blue-400">client</span> = <span className="text-yellow-400">redis::Client::open</span>(<span className="text-orange-400">"redis://cache:6379"</span>)<span className="text-gray-400">?</span>;{'\n'}
                  {'\n    '}
                  <span className="text-purple-400">let</span> <span className="text-blue-400">response</span> = <span className="text-yellow-400">process_request</span>(request, client);{'\n'}
                  {'\n    '}
                  <span className="text-green-400">Response</span>::<span className="text-yellow-400">builder</span>(){'\n        '}
                  .<span className="text-yellow-400">status</span>(<span className="text-orange-400">200</span>){'\n        '}
                  .<span className="text-yellow-400">header</span>(<span className="text-orange-400">"content-type"</span>, <span className="text-orange-400">"application/json"</span>){'\n        '}
                  .<span className="text-yellow-400">body</span>(response.<span className="text-yellow-400">to_json</span>().<span className="text-yellow-400">as_bytes</span>()){'\n        '}
                  .<span className="text-yellow-400">build</span>(){'\n'}
                  {'}'}
                </pre>
                
                {/* Blinking cursor */}
                <div className="h-5 w-2 bg-white/70 inline-block animate-pulse"></div>
              </div>
              
              {/* Code editor stats */}
              <div className="flex justify-between items-center px-4 py-2 bg-[#011e24]/50 border-t border-white/10 text-xs text-white/40">
                <div>{t('hero.codeExample.stats.memory')}</div>
                <div>{t('hero.codeExample.stats.runtime')}</div>
                <div>{t('hero.codeExample.stats.type')}</div>
              </div>
            </div>
            
            {/* Language flexibility badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white border border-white/10 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                TypeScript
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white border border-white/10 flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                JavaScript
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white border border-white/10 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Rust
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white border border-white/10 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Python
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white border border-white/10 flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                Go
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 z-[-1] w-full h-full rounded-xl bg-gradient-to-br from-[#f8ec17]/30 via-[#f8ec17]/10 to-transparent blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#045462] to-transparent"></div>
    </section>
  );
};