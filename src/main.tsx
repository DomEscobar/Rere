import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { I18nProvider } from './i18n/I18nProvider';

// Determine initial language (could be from URL, browser, or stored preference)
const getInitialLanguage = () => {
  // Check localStorage first
  const storedLang = localStorage.getItem('language');
  if (storedLang === 'en' || storedLang === 'es') return storedLang;
  
  // Otherwise check browser language
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'es' ? 'es' : 'en'; // Default to English for other languages
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider initialLang={getInitialLanguage()}>
      <App />
    </I18nProvider>
  </StrictMode>
);
