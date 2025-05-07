import React, { useState } from 'react';
import { UseCaseCard } from './ui/UseCaseCard';
import { ChevronRight, Cloud, Activity, Github as Git, Shield, Network, Lightbulb, Zap, Boxes } from 'lucide-react';

export const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  
  const useCases = [
    {
      title: "Better Than CloudFlare Workers",
      icon: <Cloud className="h-6 w-6" />,
      description: "A customer wants the speed and features of Cloudflare Workers or Fastly Compute@Edge over Stackit EdgeWorkers.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      benefits: [
        "Sub-millisecond performance",
        "Longer request lifetimes",
        "More memory allocation",
        "Built-in storage capabilities"
      ],
      links: [
        { label: "Download PDF", url: "https://drive.google.com/file/d/1E6r3ZCEk9gHNPs4TzFW5UJrD2BpRwP49/view?usp=sharing" },
        { label: "Solution Code", url: "https://github.com/fermyon/fwf-examples" }
      ]
    },
    {
      title: "AI Applications",
      icon: <Activity className="h-6 w-6" />,
      description: "A customer wants to use AI models for text, audio, video, or image generation processes, with easy access to GPUs.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      benefits: [
        "Fast AI model inference",
        "GPU access for performance",
        "Efficient memory utilization",
        "Reduced latency for AI operations"
      ],
      links: [
        { label: "Download PDF", url: "https://drive.google.com/file/d/1uJt5P0ltVvZwf71FMQOnN-lLnn8KoVPp/view?usp=sharing" },
        { label: "Solution Code", url: "https://github.com/fermyon/fwf-examples" }
      ]
    },
    {
      title: "Mass Redirects",
      icon: <Git className="h-6 w-6" />,
      description: "A customer wants blazingly fast redirects, able to handle millions of rewrite rules, but respond in milliseconds.",
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      benefits: [
        "Handle millions of redirect rules",
        "Millisecond response times",
        "Reduced origin load",
        "Simplified configuration"
      ],
      links: [
        { label: "Download PDF", url: "https://drive.google.com/file/d/1tE64Un47jUsCeJD894AnP1Ya40mIEav/view" },
        { label: "Solution Code", url: "https://github.com/fermyon/fwf-examples" }
      ]
    },
    {
      title: "Advanced Bot Detection",
      icon: <Shield className="h-6 w-6" />,
      description: "A customer wants to extend Stackit's bot detection solutions, running additional custom logic upon detection.",
      image: "https://images.pexels.com/photos/5380673/pexels-photo-5380673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      benefits: [
        "Custom bot mitigation logic",
        "Real-time threat analysis",
        "Advanced behavior patterns",
        "Reduced false positives"
      ],
      links: [
        { label: "Download PDF", url: "https://drive.google.com/file/d/1xWeD1xzFw_vEGGcLHaYtEsyv8KErYG5P/view" },
        { label: "Solution Code", url: "https://github.com/fermyon/fwf-examples" }
      ]
    },
    {
      title: "Mirroring Traffic Streams",
      icon: <Network className="h-6 w-6" />,
      description: "A customer wants to mirror traffic to an additional destination beyond their origin.",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      benefits: [
        "Real-time traffic duplication",
        "Zero impact on user experience",
        "Configurable filtering rules",
        "Analytics integration"
      ],
      links: [
        { label: "Download PDF", url: "https://drive.google.com/file/d/1JMoAjZIasT1ler6D4XpMl7wEuIDASYII/view?usp=sharing" },
        { label: "Solution Code", url: "https://github.com/fermyon/fwf-examples/tree/main/samples/traffic-splitting" }
      ]
    }
  ];
  
  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-[#045462] to-[#033b44] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#022e35] to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-sm mb-4">
            <span className="px-6 py-1.5 rounded-full bg-[#f8ec17]/20 text-[#f8ec17] text-sm font-medium">
              EXPLORE OUR SOLUTIONS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-[#f8ec17]">Powerful</span> Use Cases
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover how Fermyon Wasm Functions transform edge computing with these real-world solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-3">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              index={index}
              title={useCase.title}
              icon={useCase.icon}
              description={useCase.description}
              image={useCase.image}
              benefits={useCase.benefits}
              links={useCase.links}
              isActive={activeCase === index}
              onClick={() => setActiveCase(index)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/fermyon/fwf-examples" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#f8ec17] text-[#045462] hover:bg-white transition-all hover:shadow-lg hover:shadow-[#f8ec17]/20 font-medium"
          >
            Browse More Examples
            <ChevronRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[60px] text-[#022e35]"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="currentColor"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="currentColor"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};