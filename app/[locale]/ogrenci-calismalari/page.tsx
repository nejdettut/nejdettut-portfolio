'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ExternalLink, Code, Palette, Gamepad2, Filter } from 'lucide-react';
import Link from 'next/link';

const ornekProjeler = [
  {
    id: 1,
    baslik: 'Uzay Macerası',
    ogrenci: 'Ahmet Y.',
    sinif: '4. Sınıf',
    kategori: 'scratch',
    aciklama: 'Scratch ile yapılmış uzay temalı oyun',
    link: '#',
    onayli: true,
    tarih: '2024-01-15'
  },
  {
    id: 2,
    baslik: 'Renkli Çizimler',
    ogrenci: 'Zeynep K.',
    sinif: '2. Sınıf',
    kategori: 'dijital-sanat',
    aciklama: 'Paint uygulaması ile yapılmış dijital sanat çalışması',
    link: '#',
    onayli: true,
    tarih: '2024-01-14'
  },
  {
    id: 3,
    baslik: 'Hesap Makinesi',
    ogrenci: 'Mehmet A.',
    sinif: 'Lise',
    kategori: 'web',
    aciklama: 'HTML/CSS/JS ile yapılmış hesap makinesi',
    link: '#',
    onayli: true,
    tarih: '2024-01-13'
  },
  {
    id: 4,
    baslik: 'Robot Araba',
    ogrenci: 'Ayşe B.',
    sinif: '4. Sınıf',
    kategori: 'robotik',
    aciklama: 'Arduino ile yapılmış uzaktan kumandalı araba',
    link: '#',
    onayli: true,
    tarih: '2024-01-12'
  }
];

const kategoriler = [
  { id: 'tumu', label: 'Tümü', icon: Filter },
  { id: 'scratch', label: 'Scratch', icon: Gamepad2 },
  { id: 'web', label: 'Web', icon: Code },
  { id: 'robotik', label: 'Robotik', icon: Code },
  { id: 'dijital-sanat', label: 'Dijital Sanat', icon: Palette }
];

export default function StudentWorksPage() {
  const [arama, setArama] = useState('');
  const [aktifKategori, setAktifKategori] = useState('tumu');

  const filtrelenmisProjeler = ornekProjeler.filter(proje => {
    const aramaUyumu = proje.baslik.toLowerCase().includes(arama.toLowerCase()) ||
                      proje.ogrenci.toLowerCase().includes(arama.toLowerCase());
    const kategoriUyumu = aktifKategori === 'tumu' || proje.kategori === aktifKategori;
    return aramaUyumu && kategoriUyumu && proje.onayli;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Öğrenci Çalışmaları</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Öğrencilerimin kodlama, dijital sanat ve robotik alanlarında yaptığı projeler. 
          Her öğrenci projesi onay sürecinden geçmektedir.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Proje veya öğrenci ara..."
            value={arama}
            onChange={(e) => setArama(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {kategoriler.map((kat) => (
            <Button
              key={kat.id}
              variant={aktifKategori === kat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setAktifKategori(kat.id)}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <kat.icon className="h-4 w-4" />
              {kat.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtrelenmisProjeler.map((proje) => (
          <Card key={proje.id} className="group hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {proje.sinif}
                  </Badge>
                  <CardTitle className="text-lg">{proje.baslik}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{proje.aciklama}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{proje.ogrenci}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/ogrenci-calismalari/${proje.id}`} className="gap-1">
                    İncele <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtrelenmisProjeler.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Henüz bu kategoride onaylı proje bulunmuyor.</p>
        </div>
      )}

      <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg">Projenizi Paylaşın</h3>
            <p className="text-sm text-muted-foreground">
              Öğrenciler projelerini yükleyebilir, onaylandıktan sonra burada yayınlanır.
            </p>
          </div>
          <Button asChild>
            <Link href="/ogrenci-calismalari/yukle">Proje Yükle</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}