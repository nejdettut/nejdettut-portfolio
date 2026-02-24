import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm">NT</span>
            <span>Nejdet Tut</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t("rights")}
          </p>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/gizlilik" className="hover:text-primary">Gizlilik</Link>
            <Link href="/kullanim-kosullari" className="hover:text-primary">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}