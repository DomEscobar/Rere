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

// Cache key for session storage
const CACHE_KEY_PREFIX = 'i18n_translations_';

// Function to load translations for a language
export const loadTranslations = async (lang: SupportedLanguage): Promise<void> => {
  // Try to get from session cache first
  try {
    const cachedData = sessionStorage.getItem(`${CACHE_KEY_PREFIX}${lang}`);
    
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      translations[lang] = parsedData;
      console.log(`Loaded translations for ${lang} from cache`);
      return;
    }
  } catch (error) {
    console.warn('Failed to read from session storage:', error);
    // Continue with normal loading if cache fails
  }

  // If not in cache, load from file
  try {
    const module = await import(`./locales/${lang}.json`);
    translations[lang] = module.default || module;
    
    // Store in session cache
    try {
      sessionStorage.setItem(
        `${CACHE_KEY_PREFIX}${lang}`, 
        JSON.stringify(translations[lang])
      );
      console.log(`Cached translations for ${lang} in session storage`);
    } catch (cacheError) {
      console.warn('Failed to cache translations in session storage:', cacheError);
    }
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    // Fall back to English if loading fails
    if (lang !== 'en') {
      await loadTranslations('en');
    }
  }
};

// Clear translation cache
export const clearTranslationCache = (): void => {
  SUPPORTED_LANGUAGES.forEach(lang => {
    try {
      sessionStorage.removeItem(`${CACHE_KEY_PREFIX}${lang}`);
    } catch (error) {
      console.warn(`Failed to clear cache for ${lang}:`, error);
    }
  });
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