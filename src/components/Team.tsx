import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  note?: string;
  email: string;
}

export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Tim Enwall",
      title: "COO",
      note: "Ask me about sales!",
      email: "tim.enwall@fermyon.com"
    },
    {
      name: "Radu Matei",
      title: "CTO",
      email: "radu.matei@fermyon.com"
    },
    {
      name: "Matt Butcher",
      title: "CEO",
      email: "matt.butcher@fermyon.com"
    },
    {
      name: "Thorsten Hans",
      title: "Technical Solution Specialist",
      note: "Ask me about technical details!",
      email: "thorsten.hans@fermyon.com"
    },
    {
      name: "Mikkel Mørk Hegnhøj",
      title: "Head of Product",
      email: "mikkel.hegnhoj@fermyon.com"
    }
  ];

  return (
    <section id="team" className="py-24 bg-white font-['Museo Sans']">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-5">
            <div className="h-px w-8 bg-[#f8ec17]"></div>
            <span className="mx-4 px-4 py-1 bg-[#045462] text-[#f8ec17] text-sm font-bold rounded">
              OUR EXPERTS
            </span>
            <div className="h-px w-8 bg-[#f8ec17]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#045462]">
            Meet the Fermyon Team
          </h2>
          <p className="text-xl text-[#045462]/80 max-w-3xl mx-auto">
            The experts behind Fermyon Wasm Functions ready to support your success
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white border border-[#045462]/10 rounded-xl p-6 hover:shadow-xl hover:shadow-[#f8ec17]/10 transition-all duration-300 text-center group"
            >
              <div className="relative w-24 h-24 mx-auto mb-5 transition-transform transform group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f8ec17] to-[#045462]"></div>
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#045462]">{member.name.charAt(0)}</span>
                </div>
              </div>
              
              <div className="relative pt-2">
                <h3 className="text-lg font-semibold text-[#045462]">{member.name}</h3>
                <p className="text-[#045462]/70 mb-3 font-medium">{member.title}</p>
                
                {member.note && (
                  <div className="bg-[#f8ec17]/10 px-3 py-2 rounded-lg mb-4">
                    <p className="text-sm text-[#045462] italic">"{member.note}"</p>
                  </div>
                )}
                
                <div className="flex flex-col items-center space-y-2">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-[#045462] text-sm hover:text-[#045462]/80 transition-colors inline-flex items-center justify-center overflow-hidden w-full"
                  >
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  
                  <div className="flex space-x-3 pt-2">
                    <a 
                      href="#" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#045462]/5 hover:bg-[#045462]/10 text-[#045462] transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#045462]/5 hover:bg-[#045462]/10 text-[#045462] transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};