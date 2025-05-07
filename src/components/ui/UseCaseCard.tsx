import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ExternalLink } from 'lucide-react';

interface Link {
  label: string;
  url: string;
}

interface UseCaseCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  benefits: string[];
  links: Link[];
  isActive: boolean;
  index: number;
  onClick: () => void;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  icon,
  description,
  image,
  benefits,
  links,
  isActive,
  index,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        w-full bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300
        ${isActive ? 'ring-2 ring-[#f8ec17] shadow-lg shadow-[#f8ec17]/10' : 'hover:bg-white/15'}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4 p-5">
        <div className={`
          w-12 h-12 rounded-full flex items-center justify-center transition-all 
          ${isActive ? 'bg-[#f8ec17]' : 'bg-white/20'}
        `}>
          <div className={isActive ? 'text-[#045462]' : 'text-[#f8ec17]'}>
            {icon}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className={`
            text-sm text-white/70 transition-all duration-300 overflow-hidden
            ${isActive ? 'max-h-0 opacity-0' : 'max-h-20 mt-1 opacity-100'}
          `}>
            {description}
          </p>
        </div>
        
        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center
          ${isActive ? 'bg-[#f8ec17] text-[#045462]' : 'bg-white/20 text-white'}
          transition-all duration-300
        `}>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
          />
        </div>
      </div>
      
      {isActive && (
        <div className="bg-white text-[#045462] p-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#045462]/70 to-transparent opacity-50"></div>
              </div>
            </div>
            
            <div className="md:col-span-8">
              <h4 className="text-lg font-semibold text-[#045462] mb-4 flex items-center">
                <span className="w-4 h-4 bg-[#f8ec17] mr-3 rounded"></span>
                Key Benefits
              </h4>
              
              <div className="space-y-4 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#045462]/10 flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-[#045462]">{index + 1}</span>
                    </div>
                    <p className="text-[#045462]/80">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#045462] text-white hover:bg-[#045462]/90 transition-all hover:translate-y-[-2px] text-sm font-medium"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};