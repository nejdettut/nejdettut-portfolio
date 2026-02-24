import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `İletişim | ${t('title')}`,
  };
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">İletişim</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Kurslar, eğitimler veya işbirlikleri hakkında benimle iletişime geçebilirsiniz.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Bize Ulaşın</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ad">Ad</Label>
                  <Input id="ad" placeholder="Adınız" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soyad">Soyad</Label>
                  <Input id="soyad" placeholder="Soyadınız" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" placeholder="ornek@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="konu">Konu</Label>
                <Input id="konu" placeholder="Mesaj konusu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mesaj">Mesaj</Label>
                <textarea
                  id="mesaj"
                  rows={4}
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Mesajınızı yazın..."
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Gönder
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">E-posta</h3>
                  <p className="text-sm text-muted-foreground">info@nejdettut.com</p>
                  <p className="text-sm text-muted-foreground">kurs@nejdettut.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-sm text-muted-foreground">+90 5XX XXX XX XX</p>
                  <p className="text-xs text-muted-foreground mt-1">Hafta içi 09:00 - 18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-sm text-muted-foreground">
                    Online eğitimler için her yerden erişim sağlayabilirsiniz.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}