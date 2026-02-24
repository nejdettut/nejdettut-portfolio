import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Static params – tr/en için prerender
export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

// Metadata (async ve locale'a bağlı)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `İletişim | ${t('title')}`,
  };
}

export default async function IletisimPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // KRİTİK: Static rendering'i etkinleştir
  setRequestLocale(locale);

  // Server-side translations
  const t = await getTranslations('Iletisim'); // messages/...json'da 'Iletisim' namespace'i

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{t('form.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ad">{t('form.name.label')}</Label>
                  <Input
                    id="ad"
                    placeholder={t('form.name.placeholder')}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soyad">{t('form.surname.label')}</Label>
                  <Input
                    id="soyad"
                    placeholder={t('form.surname.placeholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('form.email.label')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('form.email.placeholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="konu">{t('form.subject.label')}</Label>
                <Input
                  id="konu"
                  placeholder={t('form.subject.placeholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mesaj">{t('form.message.label')}</Label>
                <textarea
                  id="mesaj"
                  rows={4}
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t('form.message.placeholder')}
                />
              </div>

              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                {t('form.submit')}
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
                  <h3 className="font-semibold">{t('contact.email.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('contact.email.address1')}</p>
                  <p className="text-sm text-muted-foreground">{t('contact.email.address2')}</p>
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
                  <h3 className="font-semibold">{t('contact.phone.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('contact.phone.number')}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t('contact.phone.hours')}
                  </p>
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
                  <h3 className="font-semibold">{t('contact.address.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.address.description')}
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
