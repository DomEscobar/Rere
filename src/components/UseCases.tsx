import React, { useState } from 'react';
import { UseCaseCard } from './ui/UseCaseCard';
import { ChevronRight, Cloud, Activity, Github as Git, Shield, Network, Calendar, Gauge, Workflow } from 'lucide-react';

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const useCases = [
    {
      title: "Better Than CloudFlare Workers",
      icon: <Cloud className="h-6 w-6 text-[#f8ec17]" />,
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
      icon: <Activity className="h-6 w-6 text-[#f8ec17]" />,
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
      icon: <Git className="h-6 w-6 text-[#f8ec17]" />,
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
      icon: <Shield className="h-6 w-6 text-[#f8ec17]" />,
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
      icon: <Network className="h-6 w-6 text-[#f8ec17]" />,
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
    <section id="use-cases" className="py-20 bg-[#045462]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f8ec17]">Use Cases</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover how Fermyon Wasm Functions can transform your edge computing capabilities
            with these powerful use cases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              title={useCase.title}
              icon={useCase.icon}
              description={useCase.description}
              image={useCase.image}
              benefits={useCase.benefits}
              links={useCase.links}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://github.com/fermyon/fwf-examples" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#f8ec17] hover:text-[#f8e614] transition-colors"
          >
            View more examples on GitHub
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};