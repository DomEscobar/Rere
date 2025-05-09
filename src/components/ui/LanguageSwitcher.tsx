import React, { useState } from 'react';
import { useI18n } from '../../i18n/I18nProvider';

// Language flag information
const languageInfo: Record<string, { name: string, flag: string }> = {
  en: { name: 'English', flag: '🇬🇧' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
};

// Helper function to get language info with fallback
const getLanguageInfo = (lang: string) => {
  return languageInfo[lang] || { name: lang, flag: '🌐' };
};

export const LanguageSwitcher: React.FC = () => {
  const { currentLang, setLanguage, supportedLanguages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 rounded-md text-white/90 hover:text-[#f8ec17] hover:bg-white/10 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-xl mr-1">{getLanguageInfo(currentLang).flag}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop for closing when clicked outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={closeDropdown}
          />

          <div className="absolute right-0 mt-1 w-40 bg-[#045462] border border-white/10 rounded-md shadow-lg z-50">
            <ul className="py-1">
              {supportedLanguages.map((lang) => (
                <li key={lang}>
                  <button
                    className={`
                      block w-full text-left px-4 py-2 text-sm
                      ${currentLang === lang
                        ? 'bg-[#f8ec17]/10 text-[#f8ec17]'
                        : 'text-white hover:bg-white/10'
                      }
                    `}
                    onClick={() => {
                      setLanguage(lang);
                      closeDropdown();
                    }}
                  >
                    <span className="text-xl mr-2">{getLanguageInfo(lang).flag}</span>
                    <span>{getLanguageInfo(lang).name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}; 