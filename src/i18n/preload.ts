import { SUPPORTED_LANGUAGES, loadTranslations } from './i18n';

// Function to preload all translations
export const preloadTranslations = async (): Promise<void> => {
  try {
    // Load all supported languages in parallel
    await Promise.all(
      SUPPORTED_LANGUAGES.map(lang => loadTranslations(lang))
    );
    console.log('All translations loaded successfully');
  } catch (error) {
    console.error('Error preloading translations:', error);
  }
};

// Expose function to window for debugging if needed
if (typeof window !== 'undefined') {
  (window as any).__preloadTranslations = preloadTranslations;
}