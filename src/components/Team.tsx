import React from 'react';
import { Mail } from 'lucide-react';

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
    <section id="team" className="py-20 bg-[#045462]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f8ec17]">Fermyon's Team</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the experts behind Fermyon Wasm Functions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-[#f8ec17]/10 transition-all duration-300 text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f8ec17] to-[#045462]"></div>
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#045462]">
                  {member.name.charAt(0)}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-[#045462]">{member.name}</h3>
              <p className="text-[#045462]/80 mb-2">{member.title}</p>
              
              {member.note && (
                <p className="text-sm text-[#f8ec17] mb-3">"{member.note}"</p>
              )}
              
              <a 
                href={`mailto:${member.email}`}
                className="text-[#045462] text-sm hover:text-[#045462]/80 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span className="truncate">{member.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};