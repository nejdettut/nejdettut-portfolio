// navigation.ts (proje kökünde)
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['tr', 'en'] as const;
export const localePrefix = 'always'; // 'as-needed' veya 'never' de olabilir
export const pathnames = {
  // Özel yollar varsa buraya ekleyin, yoksa boş bırakın
  '/hakkimda': {
    tr: '/hakkimda',
    en: '/about'
  },
  // ... diğer sayfalar için ekleyebilirsiniz
};

export const routing = {
  locales,
  defaultLocale: 'tr' as const,
  localePrefix,
  pathnames
};

// Link, router vs. helper'larını export et (Navbar, Footer vs. için)
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
