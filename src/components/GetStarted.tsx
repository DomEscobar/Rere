import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export const GetStarted: React.FC = () => {
  const steps = [
    "Request access to Fermyon Wasm Functions via this form: https://fibsu0jcu2g.typeform.com/fwf-preview",
    "Receive confirmation email from Fermyon team",
    "Visit the product docs: developer.fermyon.com/wasm-functions",
    "Install Spin and the spin aka CLI plugin",
    "Configure a Spin application to deploy",
    "Login to Fermyon Wasm Functions (via GitHub auth)",
    "Deploy your app with spin aka deploy"
  ];

  return (
    <section id="steps" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#045462]">How to Get Started</h2>
          <p className="text-xl text-[#045462]/80 max-w-3xl mx-auto">
            Follow these steps to start using Fermyon Wasm Functions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#f8ec17] ml-0.5"></div>
            
            <ul className="space-y-8">
              {steps.map((step, index) => (
                <li key={index} className="relative pl-20">
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#f8ec17] z-10">
                    <span className="text-[#045462] font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-[#045462]/10 shadow-lg shadow-[#f8ec17]/5">
                    <p className="text-lg text-[#045462]">{step}</p>
                    {index === 6 && (
                      <p className="mt-3 text-[#045462]/60 text-sm">
                        Your app will be made available at https://&lt;string&gt;.aka.fermyon.tech
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center mt-12">
            <a 
              href="https://developer.fermyon.com/wasm-functions/quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-[#f8ec17] text-[#045462] font-medium transition-all duration-200 hover:bg-[#f8e614] hover:shadow-lg hover:shadow-[#f8ec17]/20"
            >
              <Terminal className="mr-2 h-5 w-5" />
              Go to Quickstart Docs
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <p className="text-center mt-6 text-[#045462]/60">
            Note: where content is password protected, use username: <code className="bg-[#045462]/5 px-2 py-1 rounded">fermyon</code> password: <code className="bg-[#045462]/5 px-2 py-1 rounded">akamai</code>
          </p>
        </div>
      </div>
    </section>
  );
};