// i18n.ts (kökte)
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/navigation'; // ← @/ ile kök navigation.ts

// Locale tipi (navigation.ts'den gelebilir ama burada da tanımlı tutalım)
export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'tr';

// ──────────────────────────────────────────────
// getRequestConfig – mesajları yükler
export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale string gelebilir, tip güvenli kontrol
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default // ← @/messages/
  };
});
