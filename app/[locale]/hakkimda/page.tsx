import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, Code, BookOpen, Users } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `Hakkımda | ${t('title')}`,
  };
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nejdet Tut</h1>
        <p className="text-xl text-muted-foreground">Bilişim Teknolojileri Öğretmeni & EdTech Uzmanı Adayı</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Yapay Zeka</Badge>
          <Badge variant="secondary">Web Geliştirme</Badge>
          <Badge variant="secondary">Eğitim Teknolojileri</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Profesyonel Özet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Özel bir ilkokulda bilişim teknolojileri öğretmeni olarak görev yapıyorum. 
                Aynı zamanda bir IT eğitim merkezinde Python ve yapay zeka eğitmenliği yapıyorum. 
                EdTech alanında uzmanlaşma hedefiyle kendimi sürekli geliştiriyorum.
              </p>
              <p className="text-muted-foreground">
                Öğrencilerimin dijital okuryazarlık becerilerini geliştirmek, onları geleceğin 
                teknolojilerine hazırlamak için modern eğitim yöntemleri ve araçları kullanıyorum.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Deneyim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">Bilişim Teknolojileri Öğretmeni</h3>
                  <p className="text-sm text-muted-foreground">Özel İlkokul | 2021 - Günümüz</p>
                  <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>1-4. sınıf bilişim teknolojileri dersleri</li>
                    <li>Scratch ile kodlama eğitimi</li>
                    <li>Dijital vatandaşlık ve internet güvenliği</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">Python & AI Eğitmeni</h3>
                  <p className="text-sm text-muted-foreground">IT Eğitim Merkezi | 2022 - Günümüz</p>
                  <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Lise ve üniversite öğrencilerine Python</li>
                    <li>Yapay zeka ve makine öğrenmesi temelleri</li>
                    <li>Proje tabanlı öğrenme</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Eğitim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bilgisayar ve Öğretim Teknolojileri Öğretmenliği</h3>
                  <p className="text-sm text-muted-foreground">Üniversite Adı | 2017 - 2021</p>
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
                Teknik Yetenekler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
                  'HTML/CSS', 'Scratch', 'Arduino', 'TensorFlow', 'Git', 'Linux'].map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Sertifikalar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Google Certified Educator Level 1
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Python for Data Science - Coursera
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Machine Learning Fundamentals
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Hedef Kitlelerim
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>👨‍👩‍👧‍👦 Veliler (İlkokul IT eğitimi)</li>
                <li>🎓 Öğrenciler (Python & AI)</li>
                <li>💼 İşverenler (EdTech projeleri)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}