import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, FileText, Video } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }]; // veya globalden al
}

export default async function DerslerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  setRequestLocale(locale); // KRİTİK satır – translations'dan ÖNCE çağır

  const t = useTranslations('Dersler'); // veya getTranslations

  return <h1>{t('title')}</h1>;
}
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Dersler | ${t('title')}`,
  };
}

const siniflar = [
  {
    id: '1sinif',
    name: '1. Sınıf',
    description: 'Bilgisayar tanıma, temel kullanım becerileri',
    konular: ['Bilgisayar parçaları', 'Klavye kullanımı', 'Paint uygulaması', 'İnternet güvenliği']
  },
  {
    id: '2sinif',
    name: '2. Sınıf',
    description: 'Temel dijital beceriler, yaratıcı uygulamalar',
    konular: ['WordPad kullanımı', 'Resim düzenleme', 'Hikaye yazma', 'Oyun tasarlama']
  },
  {
    id: '3sinif',
    name: '3. Sınıf',
    description: 'Scratch giriş, algoritma temelleri',
    konular: ['Scratch arayüzü', 'Karakter hareketleri', 'Döngüler', 'Oyun programlama']
  },
  {
    id: '4sinif',
    name: '4. Sınıf',
    description: 'Scratch ileri, web temelleri',
    konular: ['Scratch projeleri', 'HTML temelleri', 'Web sayfası tasarlama', 'Robotik giriş']
  }
];

export default function ClassesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">İlkokul Bilişim Teknolojileri</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Özel ilkokulumuzda verdiğim bilişim teknolojileri dersleri müfredatı, 
          etkinlikler ve veli bilgilendirmeleri.
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
                  {sinif.name} Bilişim Teknolojileri
                </CardTitle>
                <CardDescription>{sinif.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">İşlenen Konular</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {sinif.konular.map((konu, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
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
                      <p className="text-sm font-medium">Haftada 2 saat</p>
                      <p className="text-xs text-muted-foreground">Ders saati</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Proje tabanlı</p>
                      <p className="text-xs text-muted-foreground">Öğrenme modeli</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Dijital materyaller</p>
                      <p className="text-xs text-muted-foreground">Eğitim içeriği</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Veliler İçin Bilgilendirme</h3>
          <p className="text-sm text-blue-800">
            Çocuklarınızın derslerdeki gelişimini takip etmek için e-okul sistemini kullanabilir 
            veya benimle iletişime geçebilirsiniz. Dönem sonunda her öğrencinin dijital portfolyosu 
            hazırlanmaktadır.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
