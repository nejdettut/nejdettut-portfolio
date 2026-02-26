// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import Link from '@/navigation';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero - Daha büyük ve ferah */}
      <section className="relative py-24 md:py-40 px-6 lg:px-8 text-center overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-primary">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="xl" className="text-lg px-10 py-6 gap-3 shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/kurslar">
                {t('hero.ctaPrimary')} <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="text-lg px-10 py-6 gap-3" asChild>
              <Link href="/ogrenci-calismalari">
                {t('hero.ctaSecondary')} <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hızlı Erişim Kartları - Grid responsive */}
      <section className="py-16 md:py-24 px-6 lg:px-8 bg-muted/20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            {t('quickAccess.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Veliler İçin */}
            <Card className="hover:shadow-2xl transition-all duration-300 border border-muted/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{t('quickAccess.forParents')}</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {t('quickAccess.forParentsDesc')}
                </p>
                <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
                  <Link href="/dersler">
                    {t('quickAccess.viewMore')} →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Öğrenciler İçin */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-primary/30 bg-primary/5">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{t('quickAccess.forStudents')}</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {t('quickAccess.forStudentsDesc')}
                </p>
                <Button size="lg" className="w-full md:w-auto" asChild>
                  <Link href="/kurslar">
                    {t('quickAccess.viewMore')} →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* İşverenler İçin */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-muted/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{t('quickAccess.forEmployers')}</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {t('quickAccess.forEmployersDesc')}
                </p>
                <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
                  <Link href="/iletisim">
                    {t('quickAccess.viewMore')} →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* İstatistikler - Responsive yatay */}
      <section className="py-16 md:py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            <div className="space-y-3">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary">500+</p>
              <p className="text-xl md:text-2xl text-muted-foreground">{t('stats.students')}</p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary">5+</p>
              <p className="text-xl md:text-2xl text-muted-foreground">{t('stats.years')}</p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary">50+</p>
              <p className="text-xl md:text-2xl text-muted-foreground">{t('stats.projects')}</p>
            </div>
            <div className="space-y-3">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary">10+</p>
              <p className="text-xl md:text-2xl text-muted-foreground">{t('stats.onlineCourses')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
