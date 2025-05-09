# Internationalization (i18n) System

This directory contains the internationalization (i18n) system for the application. It allows for easy translation of text content across the entire application.

## Directory Structure

- `i18n/`
  - `locales/` - Contains translation JSON files (e.g., `en.json`, `es.json`)
  - `i18n.ts` - Core utilities for handling translations
  - `I18nProvider.tsx` - React context provider for i18n
  - `preload.ts` - Functions to preload translations 

## How to Use

### 1. In a React Component

```tsx
import { useI18n } from '../i18n/I18nProvider';

const MyComponent = () => {
  const { t, currentLang, setLanguage } = useI18n();
  
  return (
    <div>
      <h1>{t('some.translation.key')}</h1>
      <p>{t('another.key')}</p>
      
      {/* With variable replacement */}
      <p>{t('footer.copyright', { year: new Date().getFullYear().toString() })}</p>
    </div>
  );
}
```

### 2. Adding New Translations

1. Add new translation keys and text to `src/i18n/locales/en.json` (and other language files)
2. Use a nested structure that makes logical sense for the organization
3. Try to group translations by component or feature

Example:
```json
{
  "myComponent": {
    "heading": "My Component Title",
    "description": "This is a description with a {variable}",
    "button": "Click Me"
  }
}
```

### 3. Adding a New Language

1. Create a new file in `src/i18n/locales/` (e.g., `fr.json` for French)
2. Copy the structure from `en.json`
3. Translate all text values
4. Update `SUPPORTED_LANGUAGES` in `i18n.ts` to include the new language code

## Best Practices

1. **Key Structure**: Use dot notation that follows component hierarchy (e.g., `navbar.links.home`)
2. **Placeholders**: Use curly braces for variables: `Hello, {name}!`
3. **Keep English as Source**: Always update the English file first, then translate to other languages
4. **Component Responsibility**: Each component should handle its own translations

## Language Switcher

The `LanguageSwitcher` component in `src/components/ui/LanguageSwitcher.tsx` provides a user interface for changing languages. Include it in your layout to allow users to switch languages.

## Adding to New Components

When internationalizing a new component:

1. Extract all text strings to the locale files
2. Import the `useI18n` hook
3. Replace hardcoded text with calls to the translation function `t()`
4. For complex text, break it into smaller, more manageable keys 