import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from '@/navigation';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Home');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-8 text-center bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/kurslar">
                {t('hero.ctaPrimary')} →
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ogrenci-calismalari">
                {t('hero.ctaSecondary')} →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hızlı Erişim */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('quickAccess.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('quickAccess.forParents')}</h3>
                <p className="text-muted-foreground mb-4">
                  Çocuklarınızın gelişimini takip edin.
                </p>
                <Button variant="link" asChild>
                  <Link href="/dersler">Dersleri İncele →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('quickAccess.forStudents')}</h3>
                <p className="text-muted-foreground mb-4">
                  Kurslara kaydolun, projelerinizi paylaşın.
                </p>
                <Button variant="link" asChild>
                  <Link href="/kurslar">Kurslara Göz At →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('quickAccess.forEmployers')}</h3>
                <p className="text-muted-foreground mb-4">
                  Uzmanlığımı inceleyin.
                </p>
                <Button variant="link" asChild>
                  <Link href="/iletisim">İletişime Geç →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
