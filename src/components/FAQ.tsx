import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const faqItems: FAQItem[] = [
    {
      question: "How are Wasm Functions different than EdgeWorkers?",
      answer: "Fermyon Wasm Functions and EdgeWorkers are both event-driven serverless compute products, but Fermyon Wasm Functions uses WebAssembly to deliver exceptionally fast cold start times and a strong security model. For EdgeWorkers customers looking to optimize performance on compute-intensive tasks, Fermyon Wasm Functions can complement their existing workflows by providing enhanced speed and efficiency to decrease end user latency."
    },
    {
      question: "What differentiates this from Cloudflare Workers or Fastly Edge Compute?",
      answer: "Fermyon Wasm Functions combines best in class compute performance and language support with Stackit's industry leading CDN to achieve incredibly low latency for your end users. Almost everything that can be done on CloudFlare Workers and Fastly Edge Compute can be done on Fermyon Wasm Functions."
    },
    {
      question: "Can Wasm Functions replace or complement current edge compute solutions?",
      answer: "Fermyon Wasm Functions can complement existing edge compute solutions by offering ultra-fast execution times and leveraging WebAssembly for improved performance and efficiency."
    },
    {
      question: "How does this integrate with customers' existing infrastructure?",
      answer: "Fermyon Wasm Functions runs seamlessly on Linode Core and Gecko nodes, enhancing existing caching, routing, and security workflows."
    }
  ];
  
  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };
  
  return (
    <section id="faqs" className="py-20 bg-[#045462]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f8ec17]">Frequently Asked Questions</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get answers to common questions about Fermyon Wasm Functions
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-white/20 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 bg-white/10 backdrop-blur-sm flex justify-between items-center hover:bg-white/20 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg text-white">{item.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-[#f8ec17] transition-transform duration-200 ${
                    openItems.includes(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-white/5 text-white/80">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="./faqs" 
            className="inline-flex items-center text-[#f8ec17] hover:text-[#f8e614] transition-colors"
          >
            Read more Frequently Asked Questions
            <ChevronDown className="h-4 w-4 ml-1 transform rotate-270" />
          </a>
        </div>
      </div>
    </section>
  );
};