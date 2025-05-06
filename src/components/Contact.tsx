import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-[#045462]/10 shadow-lg shadow-[#f8ec17]/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#045462]">Contacting the Fermyon Team</h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:akamai@fermyon.com"
              className="flex items-center space-x-3 px-6 py-4 bg-[#045462] rounded-xl hover:bg-[#045462]/90 transition-colors text-[#f8ec17]"
            >
              <Mail className="h-6 w-6" />
              <span>Email Us: akamai@fermyon.com</span>
            </a>
            
            <a 
              href="webexteams://im?space=3e625be0-b743-11ef-bf5d-bf326465b5e4"
              className="flex items-center space-x-3 px-6 py-4 bg-[#045462] rounded-xl hover:bg-[#045462]/90 transition-colors text-[#f8ec17]"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Connect on Webex</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};