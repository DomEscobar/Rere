import React, { useState } from 'react';
import { ArrowRight, Plus, Minus, ExternalLink } from 'lucide-react';

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
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer bg-white
        ${isExpanded ? 
          'col-span-1 md:col-span-2 lg:col-span-3 row-span-2' : 
          'hover:shadow-lg hover:shadow-[#f8ec17]/10'
        }
      `}
      onClick={isExpanded ? () => {} : onClick}
    >
      <div className="absolute top-0 right-0 w-[3px] h-full bg-[#f8ec17]" />
      
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="mr-3 bg-[#045462] p-2 rounded-lg">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-[#045462]">{title}</h3>
          </div>
          <button 
            onClick={toggleExpand}
            className="bg-[#045462] p-2 rounded-full hover:bg-[#045462]/90 transition-colors"
          >
            {isExpanded ? 
              <Minus className="h-4 w-4 text-[#f8ec17]" /> : 
              <Plus className="h-4 w-4 text-[#f8ec17]" />
            }
          </button>
        </div>
        
        <p className="mt-4 text-[#045462]/80">{description}</p>
        
        {isExpanded && (
          <>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h4 className="text-lg font-medium mb-3 text-[#045462]">Key Benefits</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-[#f8ec17]/20 text-[#045462] p-1 rounded-full mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[#045462]/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  {links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-[#045462] text-[#f8ec17] hover:bg-[#045462]/90 transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        
        {!isExpanded && (
          <div className="mt-4 flex items-center text-sm text-[#045462] group-hover:translate-x-1 transition-transform">
            <span>Learn more</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  );
};