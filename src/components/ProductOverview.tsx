import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle, Zap, ShieldCheck, Globe, Code, Package2, ChevronRight, ArrowRight } from 'lucide-react';

export const ProductOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-[#045462]" />,
      title: "Incredibly Fast Compute",
      description: "Millisecond-level execution times for superior performance at the edge."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#045462]" />,
      title: "No Cold Starts",
      description: "Instant initialization without the delays traditional serverless functions experience."
    },
    {
      icon: <Package2 className="h-6 w-6 text-[#045462]" />,
      title: "No Add-on Infra Costs",
      description: "Everything included in one platform without hidden infrastructure expenses."
    },
    {
      icon: <Code className="h-6 w-6 text-[#045462]" />,
      title: "Broader Language Support",
      description: "Write functions in JavaScript, Rust, Go, Python, and other languages compiled to WebAssembly."
    },
    {
      icon: <Globe className="h-6 w-6 text-[#045462]" />,
      title: "Scales from Edge to Core",
      description: "Consistent deployment model whether running at the edge or in core infrastructure."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#045462]" />,
      title: "Secure by Default",
      description: "WebAssembly's sandboxed execution environment provides strong security guarantees."
    }
  ];

  return (
    <section id="product-overview" className="py-24 bg-white font-['Museo Sans']" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-5">
            <div className="h-px w-8 bg-[#f8ec17]"></div>
            <span className="mx-4 px-4 py-1 bg-[#045462] text-[#f8ec17] text-sm font-bold rounded">
              PRODUCT OVERVIEW
            </span>
            <div className="h-px w-8 bg-[#f8ec17]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#045462]">
            Faster Edge Computing <span className="text-[#045462] relative">
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#f8ec17]"></span>
              Without Limits
            </span>
          </h2>
          
          <p className="text-xl text-[#045462]/80 max-w-3xl mx-auto leading-relaxed">
            Fermyon Wasm Functions delivers faster code execution at runtime, extending and accelerating 
            CDNs beyond static caching - enabling dynamic, personalized content and real-time processing 
            at the edge.
          </p>
        </div>
        
        {/* Performance Visualization */}
        <div 
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8ec17]/5 via-[#045462]/5 to-transparent rounded-2xl transform scale-105 blur-sm"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#045462]/10">
              <h3 className="text-2xl font-bold mb-8 text-[#045462] text-center">
                Performance Comparison <span className="text-[#f8ec17]">(Response Time in ms)</span>
              </h3>
              
              {/* Traditional Serverless */}
              <div className="mb-12">
                <div className="flex items-center mb-2">
                  <h4 className="text-xl font-medium text-[#045462] mr-auto">Standard Serverless Functions</h4>
                  <span className="text-sm text-[#045462]/70 font-medium">400ms</span>
                </div>
                <div className="h-16 bg-[#045462]/5 rounded-lg overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-0 w-[55%] bg-[#045462] rounded-l-lg flex items-center justify-center">
                    <span className="text-white font-medium text-sm">Network Time</span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[55%] right-0 bg-[#f8ec17] rounded-r-lg flex items-center justify-center">
                    <span className="text-[#045462] font-medium text-sm">Compute Time</span>
                  </div>
                </div>
                <div className="text-right text-xs text-[#045462]/60 mt-1">AWS Lambda, Azure Functions, etc</div>
              </div>
              
              {/* Fermyon Improvement */}
              <div className="mb-12">
                <div className="flex items-center mb-2">
                  <h4 className="text-xl font-medium text-[#045462] mr-auto flex items-center">
                    <span className="inline-block w-2 h-2 bg-[#f8ec17] mr-2 rounded-full"></span>
                    Fermyon cuts down the compute time
                  </h4>
                  <span className="text-sm text-[#045462]/70 font-medium">~220ms</span>
                </div>
                <div className="h-16 bg-[#045462]/5 rounded-lg overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-0 w-[55%] bg-[#045462] rounded-l-lg flex items-center justify-center">
                    <span className="text-white font-medium text-sm">Network Time</span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[55%] w-[15%] bg-[#f8ec17] rounded-r-lg flex items-center justify-center">
                    <span className="text-[#045462] font-medium text-xs">Compute</span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[73%] flex items-center pl-4">
                    <div className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-[#045462]" />
                      <span className="font-medium text-[#045462] ml-2">75% Faster Compute</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Akamai Improvement */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <h4 className="text-xl font-medium text-[#045462] mr-auto flex items-center">
                    <span className="inline-block w-2 h-2 bg-[#f8ec17] mr-2 rounded-full"></span>
                    Edge CDN cuts down network time
                  </h4>
                  <span className="text-sm text-[#045462]/70 font-medium">~100ms</span>
                </div>
                <div className="h-16 bg-[#045462]/5 rounded-lg overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-0 w-[15%] bg-[#045462] rounded-l-lg flex items-center justify-center">
                    <span className="text-white font-medium text-xs">Network</span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[15%] w-[15%] bg-[#f8ec17] rounded-r-lg flex items-center justify-center">
                    <span className="text-[#045462] font-medium text-xs">Compute</span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[33%] flex items-center pl-4">
                    <div className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-[#045462]" />
                      <span className="font-medium text-[#045462] ml-2">75% Faster Overall</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mt-10">
                <div className="text-sm font-medium text-[#045462]">0 msec</div>
                <div className="flex-1 mx-4 relative h-1 bg-[#045462]/10 rounded">
                  <div className="absolute h-2 w-2 rounded-full bg-[#f8ec17] top-1/2 -translate-y-1/2" style={{ left: '25%' }}></div>
                  <div className="absolute h-2 w-2 rounded-full bg-[#f8ec17] top-1/2 -translate-y-1/2" style={{ left: '50%' }}></div>
                  <div className="absolute h-2 w-2 rounded-full bg-[#f8ec17] top-1/2 -translate-y-1/2" style={{ left: '75%' }}></div>
                </div>
                <div className="text-sm font-medium text-[#045462]">400 msec</div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-base text-[#045462]/70 mt-8 max-w-3xl mx-auto">
            These performance advantages enable new edge-native use cases on Stackit, outshining 
            market solutions like Cloudflare Workers and Fastly Compute@Edge with 
            faster cold starts, broader language support, and deeper Stackit integration.
          </p>
        </div>
        
        {/* Key Benefits */}
        <div className="mt-24 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f8ec17] to-transparent"></div>
          
          <h3 className="text-2xl font-bold text-center mb-16 text-[#045462] relative -top-5 bg-white inline-block px-8 mx-auto">
            Key Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`
                  transition-all duration-500 transform
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#045462]/5 p-6 rounded-lg hover:bg-[#045462]/10 transition-all group relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#f8ec17]/20 group-hover:bg-[#f8ec17]/30 transition-all"></div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#f8ec17] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="ml-4 relative">
                      <h4 className="text-lg font-semibold mb-2 text-[#045462] group-hover:text-[#045462] transition-all">
                        {benefit.title}
                      </h4>
                      <p className="text-[#045462]/70 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <a 
            href="https://docs.google.com/presentation/d/1LIu8Nsn16MFDqjaVf_Vwdso4uNi5dx3G/edit?usp=sharing&ouid=104562841218536072438&rtpof=true&sd=true" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 rounded-lg bg-[#045462] text-[#f8ec17] hover:bg-[#045462]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#f8ec17]/20 text-lg font-medium group"
          >
            View the Complete Deck
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};