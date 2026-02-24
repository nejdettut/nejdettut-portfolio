import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'tr';

// messages/request.ts veya i18n/request.ts
import { routing } from './routing'; // veya navigation.ts

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate
  if (!routing.locales.includes(locale)) {
    locale = routing.defaultLocale; // 'tr'
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
