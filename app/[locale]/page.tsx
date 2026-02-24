import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { ArrowRight, Code, GraduationCap, Users, PlayCircle, BookOpen } from "lucide-react";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  const t = useTranslations("hero");
  const quickT = useTranslations("quickAccess");

  return (
    <div className="flex flex-col gap-16">
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <GraduationCap className="h-4 w-4" />
              <span>Bilişim Öğretmeni & EdTech Uzmanı</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/kurslar" className="gap-2">
                  {t("ctaPrimary")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ogrenci-calismalari" className="gap-2">
                  <PlayCircle className="h-4 w-4" />
                  {t("ctaSecondary")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">{quickT("title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{quickT("forParents")}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Çocuklarınızın bilişim teknolojileri derslerindeki gelişimini takip edin.
            </p>
            <Link href="/dersler" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              Dersleri İncele <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{quickT("forStudents")}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Python, AI ve web geliştirme kurslarına kaydolun, projelerinizi paylaşın.
            </p>
            <Link href="/kurslar" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              Kurslara Göz At <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-green-100 text-green-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{quickT("forEmployers")}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              EdTech projelerimi ve eğitim teknolojileri uzmanlığımı inceleyin.
            </p>
            <Link href="/projelerim" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              Projelerimi Gör <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Öğrenci</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Öğrenci Projesi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Online Kurs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}