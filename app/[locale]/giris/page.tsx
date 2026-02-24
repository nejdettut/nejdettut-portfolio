'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GraduationCap, Users, Mail, Lock, Key } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sinifKodu, setSinifKodu] = useState('');
  const [ogrenciNo, setOgrenciNo] = useState('');
  const [adSoyad, setAdSoyad] = useState('');

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email login:', email);
  };

  const handleKodLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Kod login:', { sinifKodu, ogrenciNo, adSoyad });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Giriş Yap</h1>
        <p className="text-muted-foreground">Hesabınıza giriş yaparak kurslara ve projelere erişin</p>
      </div>

      <Tabs defaultValue="email" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            E-posta
          </TabsTrigger>
          <TabsTrigger value="kod" className="flex items-center gap-2">
            <Key className="h-4 w-4" />
            Sınıf Kodu
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                E-posta ile Giriş
              </CardTitle>
              <CardDescription>
                Lise, üniversite öğrencileri ve yetişkinler için
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Şifre</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Giriş Yap</Button>
              </form>
              <p className="text-sm text-center text-muted-foreground mt-4">
                Hesabınız yok mu?{' '}
                <a href="/kayit" className="text-primary hover:underline">Kayıt Ol</a>
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kod">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Sınıf Kodu ile Giriş
              </CardTitle>
              <CardDescription>
                İlkokul öğrencileri için (e-posta gerektirmez)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleKodLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sinifKodu">Sınıf Kodu</Label>
                  <Input
                    id="sinifKodu"
                    placeholder="Örn: BIL-5A"
                    value={sinifKodu}
                    onChange={(e) => setSinifKodu(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Öğretmeninizden aldığınız kodu girin
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ogrenciNo">Öğrenci Numarası</Label>
                  <Input
                    id="ogrenciNo"
                    placeholder="Örn: 12"
                    value={ogrenciNo}
                    onChange={(e) => setOgrenciNo(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adSoyad">Ad Soyad</Label>
                  <Input
                    id="adSoyad"
                    placeholder="Ahmet Yılmaz"
                    value={adSoyad}
                    onChange={(e) => setAdSoyad(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Giriş Yap</Button>
              </form>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Bilgi:</strong> Bu giriş yöntemi sadece ilkokul öğrencileri içindir. 
                  Sınıf kodunuzu ve öğrenci numaranızı öğretmeninizden alabilirsiniz.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}