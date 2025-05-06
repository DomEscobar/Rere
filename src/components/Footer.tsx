import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#045462] border-t border-white/20 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Cpu className="h-6 w-6 text-[#f8ec17] mr-2" />
            <span className="text-lg font-bold text-[#f8ec17]">
              Fermyon Wasm Functions
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} Fermyon Technologies, Inc. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-1">
              Powered by WebAssembly and Stackit
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};