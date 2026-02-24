import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, Code, BookOpen, Users } from 'lucide-react';

// Static params – build sırasında tr/en için prerender
export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

// Metadata (async ve locale'a bağlı)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Hakkımda | ${t('title')}`,
    description: t('description'), // İstersen ekle
  };
}

export default async function HakkimdaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // KRİTİK: Static rendering'i etkinleştir
  setRequestLocale(locale);

  // Server-side translations
  const t = await getTranslations('Hakkimda'); // messages/...json'da 'Hakkimda' namespace'i

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('name')}</h1>
        <p className="text-xl text-muted-foreground">{t('title')}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary">{t('skills.python')}</Badge>
          <Badge variant="secondary">{t('skills.ai')}</Badge>
          <Badge variant="secondary">{t('skills.web')}</Badge>
          <Badge variant="secondary">{t('skills.edtech')}</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {t('sections.summary.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {t('sections.summary.p1')}
              </p>
              <p className="text-muted-foreground">
                {t('sections.summary.p2')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {t('sections.experience.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">{t('sections.experience.teacher.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('sections.experience.teacher.period')}
                  </p>
                  <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>{t('sections.experience.teacher.items.1')}</li>
                    <li>{t('sections.experience.teacher.items.2')}</li>
                    <li>{t('sections.experience.teacher.items.3')}</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">{t('sections.experience.trainer.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('sections.experience.trainer.period')}
                  </p>
                  <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>{t('sections.experience.trainer.items.1')}</li>
                    <li>{t('sections.experience.trainer.items.2')}</li>
                    <li>{t('sections.experience.trainer.items.3')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                {t('sections.education.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">{t('sections.education.degree')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('sections.education.period')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                {t('sections.skills.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  t('skills.python'),
                  t('skills.javascript'),
                  t('skills.typescript'),
                  t('skills.react'),
                  t('skills.nextjs'),
                  t('skills.nodejs'),
                  t('skills.htmlcss'),
                  t('skills.scratch'),
                  t('skills.arduino'),
                  t('skills.tensorflow'),
                  t('skills.git'),
                  t('skills.linux'),
                ].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                {t('sections.certificates.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {t('sections.certificates.items.1')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {t('sections.certificates.items.2')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {t('sections.certificates.items.3')}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t('sections.audience.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>👨‍👩‍👧‍👦 {t('sections.audience.parents')}</li>
                <li>🎓 {t('sections.audience.students')}</li>
                <li>💼 {t('sections.audience.employers')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
