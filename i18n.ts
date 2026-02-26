import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// ──────────────────────────────────────────────
export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'tr';

// ──────────────────────────────────────────────
// routing objesini burada yeniden tanımlama!
// Dışarıdan gelen routing'i doğrudan kullan
import { routing } from './routing';

// ──────────────────────────────────────────────
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // requestLocale string gelebildiği için tip güvenli kontrol
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
