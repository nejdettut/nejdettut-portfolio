"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchLocale = () => {
    const newLocale = locale === "tr" ? "en" : "tr";
    router.push(`/${newLocale}${pathname.replace(`/${locale}`, "")}`);
  };

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/hakkimda", label: t("about") },
    { href: "/dersler", label: t("classes") },
    { href: "/kurslar", label: t("courses") },
    { href: "/ogrenci-calismalari", label: t("studentWorks") },
    { href: "/iletisim", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded">NT</span>
            <span className="hidden sm:inline">Nejdet Tut</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={switchLocale}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{locale}</span>
            </Button>

            <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
              <Link href="/giris">{t("login")}</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t mt-2">
                <Button className="w-full" asChild>
                  <Link href="/giris">{t("login")}</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}