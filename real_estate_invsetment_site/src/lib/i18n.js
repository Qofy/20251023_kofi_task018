import { addMessages, init, getLocaleFromNavigator, locale, _, waitLocale } from 'svelte-i18n';
import en from './locales/en.json';
import de from './locales/de.json';

// Preload messages synchronously so formatting is safe during hydration
addMessages('en', en);
addMessages('de', de);

init({
  fallbackLocale: 'en',
  initialLocale: typeof window !== 'undefined' ? getLocaleFromNavigator() : 'en',
});

const localeReady = waitLocale();

export { locale, _, localeReady };
