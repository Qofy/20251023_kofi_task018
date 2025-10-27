import { register, init, getLocaleFromNavigator, locale, _ } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

init({
  fallbackLocale: 'en',
  initialLocale: typeof window !== 'undefined' ? getLocaleFromNavigator() : 'en',
});

export { locale, _ };
