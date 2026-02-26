import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, GraduationCap, Users, PlayCircle, BookOpen } from 'lucide-react';
import Link from '@/navigation'; // dil prefix'li Link

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Home'); // messages/...json'da 'Home' namespace'i

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 text-center">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2">
              <Link href="/kurslar">
                {t('hero.ctaPrimary')} <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link href="/ogrenci-calismalari">
                {t('hero.ctaSecondary')} <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hızlı Erişim Kartları */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('quickAccess.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Veliler İçin */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('quickAccess.forParents')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('quickAccess.parentsDesc')}
                </p>
                <Button variant="outline" asChild>
                  <Link href="/dersler">
                    {t('quickAccess.viewMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Öğrenciler İçin */}
            <Card className="hover:shadow-xl transition-all duration-300 border-primary/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('quickAccess.forStudents')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('quickAccess.studentsDesc')}
                </p>
                <Button asChild>
                  <Link href="/kurslar">
                    {t('quickAccess.viewMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* İşverenler İçin */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('quickAccess.forEmployers')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('quickAccess.employersDesc')}
                </p>
                <Button variant="outline" asChild>
                  <Link href="/iletisim">
                    {t('quickAccess.viewMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground mt-2">{t('stats.students')}</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary">5+</p>
              <p className="text-muted-foreground mt-2">{t('stats.years')}</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground mt-2">{t('stats.projects')}</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground mt-2">{t('stats.onlineCourses')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
