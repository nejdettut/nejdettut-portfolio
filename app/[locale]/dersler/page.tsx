import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, FileText, Video } from 'lucide-react';

// Static params – globalden gelebilir, hardcoded da olur
//export function generateStaticParams() {
//  return [{ locale: 'tr' }, { locale: 'en' }];
//}

export default async function DerslerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // KRİTİK: Static rendering'i etkinleştir
  setRequestLocale(locale);

  // Server-side translations
  const t = await getTranslations('Dersler');           // 'Dersler' namespace'i
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });

  // Mevcut siniflar array'i aynı kaldı – sadece metinler çeviriye hazır
  const siniflar = [
    {
      id: '1sinif',
      name: t('classes.1sinif.name'),
      description: t('classes.1sinif.description'),
      konular: [
        t('classes.1sinif.topics.1'),
        t('classes.1sinif.topics.2'),
        t('classes.1sinif.topics.3'),
        t('classes.1sinif.topics.4')
      ]
    },
    {
      id: '2sinif',
      name: t('classes.2sinif.name'),
      description: t('classes.2sinif.description'),
      konular: [
        t('classes.2sinif.topics.1'),
        t('classes.2sinif.topics.2'),
        t('classes.2sinif.topics.3'),
        t('classes.2sinif.topics.4')
      ]
    },
    {
      id: '3sinif',
      name: t('classes.3sinif.name'),
      description: t('classes.3sinif.description'),
      konular: [
        t('classes.3sinif.topics.1'),
        t('classes.3sinif.topics.2'),
        t('classes.3sinif.topics.3'),
        t('classes.3sinif.topics.4')
      ]
    },
    {
      id: '4sinif',
      name: t('classes.4sinif.name'),
      description: t('classes.4sinif.description'),
      konular: [
        t('classes.4sinif.topics.1'),
        t('classes.4sinif.topics.2'),
        t('classes.4sinif.topics.3'),
        t('classes.4sinif.topics.4')
      ]
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

      <Tabs defaultValue="1sinif" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
          {siniflar.map((sinif) => (
            <TabsTrigger key={sinif.id} value={sinif.id}>
              {sinif.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {siniflar.map((sinif) => (
          <TabsContent key={sinif.id} value={sinif.id} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {sinif.name} {t('bilisimTeknolojileri')}
                </CardTitle>
                <CardDescription>{sinif.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">{t('topics.title')}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {sinif.konular.map((konu, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-muted rounded-lg"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm">{konu}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{t('info.weeklyHours')}</p>
                      <p className="text-xs text-muted-foreground">{t('info.weeklyHoursDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{t('info.projectBased')}</p>
                      <p className="text-xs text-muted-foreground">{t('info.projectBasedDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{t('info.digitalMaterials')}</p>
                      <p className="text-xs text-muted-foreground">{t('info.digitalMaterialsDesc')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Veliler İçin Bilgilendirme kartı */}
      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-2">{t('parents.title')}</h3>
          <p className="text-sm text-blue-800">
            {t('parents.description')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Metadata (async ve locale'a bağlı)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Dersler | ${t('title')}`,
  };
}
