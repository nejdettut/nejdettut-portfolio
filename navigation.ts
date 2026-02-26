// navigation.ts (proje kökünde)
import {
  createLocalizedPathname,
  createSharedPathnamesNavigation
} from 'next-intl/navigation';

export const locales = ['tr', 'en'] as const;
export const localePrefix = 'always'; // veya 'as-needed'
export const pathnames = {
  // Özel yollar varsa buraya ekleyin, yoksa boş bırakın
};

export const routing = {
  locales,
  defaultLocale: 'tr' as const,
  localePrefix,
  pathnames
} satisfies Parameters<typeof createSharedPathnamesNavigation>[0];

// Link ve diğer navigation helper'ları export et (client ve server için)
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
