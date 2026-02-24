'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';  // Client-side çeviri için
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, Users, Mail, Lock, Key } from 'lucide-react';

// Static params (build sırasında prerender için)
//export function generateStaticParams() {
//  return [{ locale: 'tr' }, { locale: 'en' }];
//}

export default function LoginPage() {
  // Client-side translations
  const t = useTranslations('Giris');  // messages/tr.json ve en.json'da 'Giris' namespace'i oluştur

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sinifKodu, setSinifKodu] = useState('');
  const [ogrenciNo, setOgrenciNo] = useState('');
  const [adSoyad, setAdSoyad] = useState('');

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email login:', email, password);
    // Gerçek login logic'i buraya gelecek (API çağrısı vs.)
  };

  const handleKodLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Kod login:', { sinifKodu, ogrenciNo, adSoyad });
    // Gerçek login logic'i buraya gelecek
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
        <p className="text-muted-foreground">{t('description')}</p>
      </div>

      <Tabs defaultValue="email" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            {t('tabs.email')}
          </TabsTrigger>
          <TabsTrigger value="kod" className="flex items-center gap-2">
            <Key className="h-4 w-4" />
            {t('tabs.kod')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                {t('email.title')}
              </CardTitle>
              <CardDescription>{t('email.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('email.label')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('email.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t('email.passwordLabel')}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t('buttons.login')}
                </Button>
              </form>
              <p className="text-sm text-center text-muted-foreground mt-4">
                {t('noAccount')}{' '}
                <a href="/kayit" className="text-primary hover:underline">
                  {t('registerLink')}
                </a>
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kod">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t('kod.title')}
              </CardTitle>
              <CardDescription>{t('kod.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleKodLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sinifKodu">{t('kod.sinifKoduLabel')}</Label>
                  <Input
                    id="sinifKodu"
                    placeholder={t('kod.sinifKoduPlaceholder')}
                    value={sinifKodu}
                    onChange={(e) => setSinifKodu(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {t('kod.sinifKoduInfo')}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ogrenciNo">{t('kod.ogrenciNoLabel')}</Label>
                  <Input
                    id="ogrenciNo"
                    placeholder={t('kod.ogrenciNoPlaceholder')}
                    value={ogrenciNo}
                    onChange={(e) => setOgrenciNo(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adSoyad">{t('kod.adSoyadLabel')}</Label>
                  <Input
                    id="adSoyad"
                    placeholder={t('kod.adSoyadPlaceholder')}
                    value={adSoyad}
                    onChange={(e) => setAdSoyad(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t('buttons.login')}
                </Button>
              </form>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>{t('kod.infoTitle')}:</strong> {t('kod.infoText')}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
