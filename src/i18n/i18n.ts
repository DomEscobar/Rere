import { useEffect, useState } from 'react';

// Define supported languages
export const SUPPORTED_LANGUAGES = ['en', 'es', 'de'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Load translations
let translations: Record<SupportedLanguage, any> = {
  en: {},
  es: {},
  de: {}
};

// Function to load translations for a language
export const loadTranslations = async (lang: SupportedLanguage): Promise<void> => {
  try {
    const module = await import(`./locales/${lang}.json`);
    translations[lang] = module.default || module;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    // Fall back to English if loading fails
    if (lang !== 'en') {
      await loadTranslations('en');
    }
  }
};

// Get translation for a key using dot notation (e.g., 'navbar.navItems.useCases')
export const t = (key: string, lang: SupportedLanguage = 'en', replacements: Record<string, string> = {}): any => {
  const keys = key.split('.');
  let value = translations[lang];
  
  // Traverse the translation object
  for (const k of keys) {
    if (!value) return key; // Return the key if translation not found
    value = value[k];
  }
  
  // Return the value if it's not a string (allows for arrays and objects)
  if (typeof value !== 'string') return value;
  
  // Replace placeholders (e.g., {year} with the current year)
  let result = value;
  Object.entries(replacements).forEach(([placeholder, replacement]) => {
    result = result.replace(new RegExp(`{${placeholder}}`, 'g'), replacement);
  });
  
  return result;
};

// React hook to use i18n in components
export const useI18n = (initialLang: SupportedLanguage = 'en') => {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(initialLang);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Load translations when language changes
  useEffect(() => {
    const loadLang = async () => {
      await loadTranslations(currentLang);
      setIsLoaded(true);
    };
    
    loadLang();
  }, [currentLang]);
  
  // Translation function with the current language
  const translate = (key: string, replacements: Record<string, string> = {}) => {
    return t(key, currentLang, replacements);
  };
  
  return {
    currentLang,
    setLanguage: setCurrentLang,
    t: translate,
    isLoaded,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };
};

// Context provider for i18n - this can be expanded in the future
export const preloadTranslations = async () => {
  for (const lang of SUPPORTED_LANGUAGES) {
    await loadTranslations(lang);
  }
}; 