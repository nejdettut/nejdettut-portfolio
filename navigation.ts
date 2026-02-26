// navigation.ts (proje kökünde) – Bu haliyle mükemmel, dokunma!
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

// localePrefix'i literal union olarak tanımla (tip hatasını önler)
export const localePrefix = 'always' as const; // veya 'as-needed' / 'never' istersen değiştir

export const pathnames = {
  // Özel yollar varsa buraya ekleyin, yoksa boş bırak
  // Örnek:
  // '/hakkimda': {
  //   tr: '/hakkimda',
  //   en: '/about'
  // }
};

export const routing = {
  locales,
  defaultLocale: 'tr' as const,
  localePrefix, // ← literal 'always' tipi
  pathnames
} satisfies {
  locales: readonly ['tr', 'en'];
  defaultLocale: 'tr';
  localePrefix: 'always' | 'as-needed' | 'never';
  pathnames: typeof pathnames;
};

// Link ve diğer helper'ları export et – bunlar named export
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
