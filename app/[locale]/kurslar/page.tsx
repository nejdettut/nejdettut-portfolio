import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, PlayCircle, Lock } from 'lucide-react';
import Link from 'next/link';

// Static params – tr/en için prerender
//export function generateStaticParams() {
// return [{ locale: 'tr' }, { locale: 'en' }];
//}

// Metadata (async ve locale'a bağlı)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Kurslar | ${t('title')}`,
  };
}

export default async function KurslarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // KRİTİK: Static rendering'i etkinleştir
  setRequestLocale(locale);

  // Server-side translations
  const t = await getTranslations('Kurslar'); // messages/...json'da 'Kurslar' namespace'i

  // Kurs verileri – metinler çeviriye taşındı
  const kurslar = [
    {
      id: 'python-temel',
      baslik: t('courses.pythonTemel.title'),
      aciklama: t('courses.pythonTemel.description'),
      seviye: t('courses.pythonTemel.level'),
      sure: t('courses.pythonTemel.duration'),
      ogrenciSayisi: 45,
      fiyat: t('courses.pythonTemel.price'),
      ucretsiz: false,
      canliDers: true,
      youtubePlaylist: 'PLxxxxxxx'
    },
    {
      id: 'python-ileri',
      baslik: t('courses.pythonIleri.title'),
      aciklama: t('courses.pythonIleri.description'),
      seviye: t('courses.pythonIleri.level'),
      sure: t('courses.pythonIleri.duration'),
      ogrenciSayisi: 32,
      fiyat: t('courses.pythonIleri.price'),
      ucretsiz: false,
      canliDers: true,
      youtubePlaylist: 'PLxxxxxxx'
    },
    {
      id: 'ai-temel',
      baslik: t('courses.aiTemel.title'),
      aciklama: t('courses.aiTemel.description'),
      seviye: t('courses.aiTemel.level'),
      sure: t('courses.aiTemel.duration'),
      ogrenciSayisi: 28,
      fiyat: t('courses.aiTemel.price'),
      ucretsiz: false,
      canliDers: true,
      youtubePlaylist: 'PLxxxxxxx'
    },
    {
      id: 'web-temel',
      baslik: t('courses.webTemel.title'),
      aciklama: t('courses.webTemel.description'),
      seviye: t('courses.webTemel.level'),
      sure: t('courses.webTemel.duration'),
      ogrenciSayisi: 0,
      fiyat: t('courses.webTemel.price'),
      ucretsiz: true,
      canliDers: false,
      youtubePlaylist: 'PLxxxxxxx'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {kurslar.map((kurs) => (
          <Card key={kurs.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant={kurs.ucretsiz ? 'secondary' : 'default'} className="mb-2">
                    {kurs.seviye}
                  </Badge>
                  <CardTitle>{kurs.baslik}</CardTitle>
                </div>
                {kurs.ucretsiz ? (
                  <Badge variant="outline">{t('free')}</Badge>
                ) : (
                  <Badge variant="outline" className="text-green-600">{kurs.fiyat}</Badge>
                )}
              </div>
              <CardDescription className="mt-2">{kurs.aciklama}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{kurs.sure}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{kurs.ogrenciSayisi} {t('studentCount')}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <PlayCircle className="h-4 w-4" />
                  <span>{kurs.canliDers ? t('livePlusRecorded') : t('recordedOnly')}</span>
                </div>
              </div>

              <div className="mt-auto space-y-2">
                {kurs.ucretsiz ? (
                  <Button className="w-full" asChild>
                    <Link href={`/kurslar/${kurs.id}`}>{t('buttons.startNow')}</Link>
                  </Button>
                ) : (
                  <>
                    <Button className="w-full" asChild>
                      <Link href={`/kurslar/${kurs.id}`}>{t('buttons.viewDetails')}</Link>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" />
                      {t('loginRequired')}
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-muted rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">{t('questions.title')}</h2>
        <p className="text-muted-foreground mb-4">
          {t('questions.description')}
        </p>
        <Button variant="outline" asChild>
          <Link href="/iletisim">{t('buttons.contact')}</Link>
        </Button>
      </div>
    </div>
  );
}
