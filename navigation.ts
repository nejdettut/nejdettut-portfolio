// navigation.ts (proje kökünde)
export const routing = {
  locales: ['tr', 'en'] as const,
  defaultLocale: 'tr' as const,
  localePrefix: 'always' as const, // veya 'as-needed' isterseniz değiştirin
  // pathnames: {} // özel yollar için ileride ekleyebilirsiniz
} satisfies {
  locales: readonly ['tr', 'en'];
  defaultLocale: 'tr';
  localePrefix: 'always' | 'as-needed' | 'never';
};
