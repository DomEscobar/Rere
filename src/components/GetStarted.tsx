import React from 'react';
import { ArrowRight, Terminal, ChevronRight, CheckCircle } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

export const GetStarted: React.FC = () => {
  const { t } = useI18n();
  
  // Define default steps if translations aren't loaded correctly
  const defaultSteps = [
    "Request access to Fermyon Wasm Functions via this form: https://fibsu0jcu2g.typeform.com/fwf-preview",
    "Receive confirmation email from Fermyon team",
    "Visit the product docs: developer.fermyon.com/wasm-functions",
    "Install Spin and the spin aka CLI plugin",
    "Configure a Spin application to deploy",
    "Login to Fermyon Wasm Functions (via GitHub auth)",
    "Deploy your app with spin aka deploy"
  ];
  
  // Try to get steps from translations or use default
  const steps = (() => {
    const translatedSteps = t('getStarted.steps');
    return Array.isArray(translatedSteps) ? translatedSteps : defaultSteps;
  })();

  return (
    <section id="steps" className="py-24 bg-[#045462] font-['Museo Sans'] relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#022e35] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#022e35] to-transparent"></div>
        <div className="absolute right-0 top-1/3 w-64 h-64 bg-[#f8ec17]/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-[#f8ec17]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-5">
            <div className="h-px w-8 bg-[#f8ec17]"></div>
            <span className="mx-4 px-4 py-1 bg-[#f8ec17]/20 text-[#f8ec17] text-sm font-bold rounded-full">
              {t('getStarted.badge')}
            </span>
            <div className="h-px w-8 bg-[#f8ec17]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            {t('getStarted.heading')}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('getStarted.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f8ec17] via-[#f8ec17] to-[#f8ec17]/20 ml-0.5"></div>
            
            <ul className="space-y-10">
              {steps.map((step, index) => (
                <li key={index} className="relative pl-24">
                  <div className="absolute left-0 flex items-center justify-center w-20 h-20 rounded-full bg-[#f8ec17] shadow-lg shadow-[#f8ec17]/20 z-10 transform transition-transform hover:scale-105">
                    <span className="text-[#045462] font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg text-white hover:bg-white/15 transition-all">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#f8ec17] mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-white/90">{step}</p>
                    </div>
                    
                    {index === 6 && (
                      <p className="mt-3 text-white/60 text-sm pl-8">
                        {t('getStarted.appAvailability')}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center mt-16">
            <a 
              href="https://developer.fermyon.com/wasm-functions/quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#f8ec17] text-[#045462] font-medium transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#f8ec17]/30 group"
            >
              <Terminal className="mr-2 h-5 w-5" />
              {t('getStarted.docsButton')}
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p className="text-center mt-6 text-white/60">
            {t('getStarted.note')}
          </p>
        </div>
      </div>
    </section>
  );
};