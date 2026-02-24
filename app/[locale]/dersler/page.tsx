import { getTranslations } from 'next-intl/server';  // ← async için getTranslations
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, FileText, Video } from 'lucide-react';

// generateStaticParams globalden gelebilir, ama hardcoded da olur
export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export default async function DerslerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // KRİTİK – layout'ta zaten var ama sayfaya özel tekrar etmek güvenli
  setRequestLocale(locale);

  // Server-side translations (useTranslations yerine)
  const t = await getTranslations('Dersler');           // namespace 'Dersler' olsun
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });

  // Metadata için de kullanabilirsin
  // (generateMetadata ayrı fonksiyon olarak bırakabilirsin)

  const siniflar = [ /* mevcut array aynı kalır */ ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>  {/* ← t('title') */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <Tabs defaultValue="1sinif" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
          {siniflar.map((sinif) => (
            <TabsTrigger key={sinif.id} value={sinif.id}>{sinif.name}</TabsTrigger>
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
                {/* ... kalan içerik aynı, ama metinleri t('key') ile çevir */}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* ... kalan kartlar aynı */}
    </div>
  );
}

// Metadata (mevcut bırakabilirsin, ama locale async olsun)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Dersler | ${t('title')}`,
  };
}
