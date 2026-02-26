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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-6 gap-3 shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/kurslar">
                {t('hero.ctaPrimary')} <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 gap-3" asChild>
              <Link href="/ogrenci-calismalari">
                {t('hero.ctaSecondary')} <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hızlı Erişim */}
      <section className="py-16 md:py-24 px-6 lg:px-8 bg-muted/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            {t('quickAccess.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('quickAccess.forParents')}</h3>
                <p className="text-muted-foreground mb-6">
                  Çocuklarınızın bilişim derslerindeki gelişimini takip edin.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/dersler">Dersleri İncele →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-primary/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('quickAccess.forStudents')}</h3>
                <p className="text-muted-foreground mb-6">
                  Python, AI ve web kurslarına kaydolun, projelerinizi paylaşın.
                </p>
                <Button asChild>
                  <Link href="/kurslar">Kurslara Göz At →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('quickAccess.forEmployers')}</h3>
                <p className="text-muted-foreground mb-6">
                  EdTech projelerimi ve uzmanlığımı inceleyin.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/iletisim">Projelerimi Gör →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground mt-2">Öğrenci</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary">5+</p>
              <p className="text-muted-foreground mt-2">Yıllık Deneyim</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground mt-2">Öğrenci Projesi</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground mt-2">Online Kurs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
