import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, PlayCircle, Lock } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Kurslar | ${t('title')}`,
  };
}

const kurslar = [
  {
    id: 'python-temel',
    baslik: 'Python Temel',
    aciklama: 'Sıfırdan Python programlamaya giriş. Değişkenler, döngüler, fonksiyonlar ve temel veri yapıları.',
    seviye: 'Başlangıç',
    sure: '8 Hafta',
    ogrenciSayisi: 45,
    fiyat: '₺1.499',
    ucretsiz: false,
    canliDers: true,
    youtubePlaylist: 'PLxxxxxxx'
  },
  {
    id: 'python-ileri',
    baslik: 'Python İleri Seviye',
    aciklama: 'OOP, dosya işlemleri, exception handling, modüller ve paketler.',
    seviye: 'Orta',
    sure: '10 Hafta',
    ogrenciSayisi: 32,
    fiyat: '₺1.999',
    ucretsiz: false,
    canliDers: true,
    youtubePlaylist: 'PLxxxxxxx'
  },
  {
    id: 'ai-temel',
    baslik: 'Yapay Zeka Temelleri',
    aciklama: 'Makine öğrenmesi, derin öğrenme ve AI uygulamalarına giriş. Python ile pratik projeler.',
    seviye: 'İleri',
    sure: '12 Hafta',
    ogrenciSayisi: 28,
    fiyat: '₺2.499',
    ucretsiz: false,
    canliDers: true,
    youtubePlaylist: 'PLxxxxxxx'
  },
  {
    id: 'web-temel',
    baslik: 'Web Geliştirme Temelleri',
    aciklama: 'HTML, CSS ve JavaScript ile modern web sayfaları oluşturma. Responsive tasarım prensipleri.',
    seviye: 'Başlangıç',
    sure: '6 Hafta',
    ogrenciSayisi: 0,
    fiyat: 'Ücretsiz',
    ucretsiz: true,
    canliDers: false,
    youtubePlaylist: 'PLxxxxxxx'
  }
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Online Kurslar</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Python, yapay zeka ve web geliştirme alanlarında hazırladığım kapsamlı kurslar. 
          Canlı dersler ve kayıtlı video içerikleriyle desteklenmiştir.
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
                  <Badge variant="outline">Ücretsiz</Badge>
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
                  <span>{kurs.ogrenciSayisi} öğrenci</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <PlayCircle className="h-4 w-4" />
                  <span>{kurs.canliDers ? 'Canlı + Kayıt' : 'Sadece Kayıt'}</span>
                </div>
              </div>

              <div className="mt-auto space-y-2">
                {kurs.ucretsiz ? (
                  <Button className="w-full" asChild>
                    <Link href={`/kurslar/${kurs.id}`}>Hemen Başla</Link>
                  </Button>
                ) : (
                  <>
                    <Button className="w-full" asChild>
                      <Link href={`/kurslar/${kurs.id}`}>Detayları Gör</Link>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" />
                      Kayıt olmak için giriş yapın
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-muted rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Kurs Hakkında Sorularınız mı Var?</h2>
        <p className="text-muted-foreground mb-4">
          Canlı dersler, kayıt süreci veya içerikler hakkında bilgi almak için iletişime geçin.
        </p>
        <Button variant="outline" asChild>
          <Link href="/iletisim">İletişime Geç</Link>
        </Button>
      </div>
    </div>
  );
}