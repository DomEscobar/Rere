import React, { createContext, useContext, useEffect, useState } from 'react';
import { SUPPORTED_LANGUAGES, SupportedLanguage, loadTranslations, t } from './i18n';

// Create I18n context
interface I18nContextType {
  currentLang: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
  isLoaded: boolean;
  supportedLanguages: readonly SupportedLanguage[];
}

const I18nContext = createContext<I18nContextType | null>(null);

// Provider props interface
interface I18nProviderProps {
  initialLang?: SupportedLanguage;
  children: React.ReactNode;
}

// Loading component
const LoadingScreen: React.FC = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(to bottom, #011e24, #022a32, #033b44)',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Grid pattern background */}
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
      opacity: 0.1,
    }}></div>

    <div style={{
      width: '50px',
      height: '50px',
      border: '5px solid rgba(255, 255, 255, 0.1)',
      borderTop: '5px solid #f8ec17',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      WebkitAnimation: 'spin 1s linear infinite',
      position: 'relative',
      zIndex: 10,
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// I18nProvider component
export const I18nProvider: React.FC<I18nProviderProps> = ({
  initialLang = 'en',
  children
}) => {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(
    // Try to get from localStorage or use initialLang
    (localStorage.getItem('language') as SupportedLanguage) || initialLang
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', currentLang);
  }, [currentLang]);

  // Load translations for the current language
  useEffect(() => {
    const loadLanguage = async () => {
      await loadTranslations(currentLang);
      setIsLoaded(true);
    };

    loadLanguage();
  }, [currentLang]);

  // Create the translation function for the current language
  const translate = (key: string, replacements: Record<string, string> = {}) => {
    return t(key, currentLang, replacements);
  };

  // The value provided to consumers
  const contextValue = {
    currentLang,
    setLanguage: setCurrentLang,
    t: translate,
    isLoaded,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {isLoaded ? children : <LoadingScreen />}
    </I18nContext.Provider>
  );
};

// Custom hook to use i18n context
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}; 