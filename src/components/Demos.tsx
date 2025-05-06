import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Demos: React.FC = () => {
  const demos = [
    {
      title: "Fermyon Wasm Functions Demo",
      duration: "(4:26)",
      description: "Create, Build and Deploy a Wasm app onto Stackit",
      link: "https://www.youtube.com/watch?v=Xo-UPq_dT5s"
    },
    {
      title: "Sales Introduction to Fermyon Wasm Functions",
      duration: "",
      description: "An overview of Fermyon Wasm Functions for sales teams",
      link: "https://www.youtube.com/watch?v=4wMbIH0ukCk"
    },
    {
      title: "Tutorial: Querying relational Databases",
      duration: "",
      description: "Learn how to connect to PostgreSQL from Wasm Functions",
      link: "https://github.com/fermyon/fwf-examples/tree/main/tutorials/postgresql-tutorial"
    },
    {
      title: "Serverless AI Demo on Stackit",
      duration: "(4:50)",
      description: "Radu walks through two AI apps running on Fermyon Wasm Functions",
      link: "https://www.youtube.com/watch?v=ZMTyV3XzPdE"
    },
    {
      title: "Tutorial: Using the Key Value Store",
      duration: "",
      description: "Learn how to use the built-in key-value store",
      link: "https://github.com/fermyon/fwf-examples/tree/main/tutorials/key-value-store-tutorial"
    }
  ];

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#045462]">Demos</h2>
          <p className="text-xl text-[#045462]/80 max-w-3xl mx-auto">
            See Fermyon Wasm Functions in action with these demos and tutorials
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <a 
              key={index}
              href={demo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#f8ec17]/10 transition-all duration-300 hover:-translate-y-1 border border-[#045462]/10"
            >
              <div className="aspect-video bg-[#045462] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#f8ec17] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#045462]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                {demo.duration && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#045462] to-transparent p-4">
                    <p className="text-sm text-[#f8ec17] font-medium inline-block bg-[#045462]/90 px-2 py-1 rounded-md">
                      {demo.duration}
                    </p>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-[#045462] group-hover:text-[#045462]/80 transition-colors">
                  {demo.title}
                </h3>
                <p className="text-[#045462]/60 mb-3">{demo.description}</p>
                <div className="flex items-center text-[#f8ec17] text-sm font-medium">
                  <span>View Demo</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/fermyon/fwf-examples" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#045462] text-[#f8ec17] hover:bg-[#045462]/90 transition-colors"
          >
            View more examples on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};