// middleware.ts (kökte)
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/navigation'; // ← @/ ile navigation.ts

// createMiddleware'e routing objesini doğrudan veriyoruz
export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: routing.localePrefix // 'always' korunuyor
});

export const config = {
  matcher: [
    // API, statik dosyalar, _next vs. hariç tüm yollar
    '/((?!api|_next/static|_next/image|favicon.ico|images|public|.*\\..*).*)',
    '/'
  ]
};
