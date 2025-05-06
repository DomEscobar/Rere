import React, { useRef, useEffect } from 'react';
import { CheckCircle, Zap, ShieldCheck, Globe, Code, Package2 } from 'lucide-react';

export const ProductOverview: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-timeline');
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-[#f8ec17]" />,
      title: "Incredibly Fast Compute",
      description: "Millisecond-level execution times for superior performance at the edge."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#f8ec17]" />,
      title: "No Cold Starts",
      description: "Instant initialization without the delays traditional serverless functions experience."
    },
    {
      icon: <Package2 className="h-10 w-10 text-[#f8ec17]" />,
      title: "No Add-on Infra Costs",
      description: "Everything included in one platform without hidden infrastructure expenses."
    },
    {
      icon: <Code className="h-10 w-10 text-[#f8ec17]" />,
      title: "Broader Language Support",
      description: "Write functions in JavaScript, Rust, Go, Python, and other languages compiled to WebAssembly."
    },
    {
      icon: <Globe className="h-10 w-10 text-[#f8ec17]" />,
      title: "Scales from Edge to Core",
      description: "Consistent deployment model whether running at the edge or in core infrastructure."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#f8ec17]" />,
      title: "Secure by Default",
      description: "WebAssembly's sandboxed execution environment provides strong security guarantees."
    }
  ];

  return (
    <section id="product-overview" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#045462]">Product Overview</h2>
          <p className="text-xl text-[#045462]/80 max-w-3xl mx-auto">
            Fermyon Wasm Functions delivers faster code execution at runtime, extending and accelerating 
            CDNs beyond static caching - by enabling dynamic, personalized content and real-time processing 
            at the edge.
          </p>
        </div>
        
        <div ref={timelineRef} className="relative max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-10">
            <img 
              src="https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Timeline diagram" 
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
          
          <p className="text-center text-lg text-[#045462]/80">
            These capabilities enable new edge-native use cases on Stackit, competing with 
            market solutions like Cloudflare Workers and Fastly Compute@Edge - but with faster 
            cold starts, broader language support, Stackit integration and more.
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-12 text-[#045462]">Key Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-[#f8ec17]/20 transition-all duration-300 border border-[#045462]/10"
            >
              <div className="bg-[#045462] rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-[#045462]">{benefit.title}</h4>
              <p className="text-[#045462]/80">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://docs.google.com/presentation/d/1LIu8Nsn16MFDqjaVf_Vwdso4uNi5dx3G/edit?usp=sharing&ouid=104562841218536072438&rtpof=true&sd=true" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-[#045462] text-[#f8ec17] hover:bg-[#045462]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#045462]/20"
          >
            View the Deck
          </a>
        </div>
      </div>
    </section>
  );
};