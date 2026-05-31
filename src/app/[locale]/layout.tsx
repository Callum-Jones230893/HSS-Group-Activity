import Header from "@/components/Header";
import GoogleMapLocation from "@/components/Footer-GoogleMap";
import FooterHero from "@/components/Footer-Hero";
import FooterCopyright from "@/components/FooterCopyright";
import FooterLogo from "@/components/FooterLogo";
import { getTranslations } from "@/utils/getTranslations";

export default async function LocaleLayout({children, params}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const {locale} = await params
  const t = getTranslations(locale)

  return (
    <>
      <Header t={t.nav} />
      {children}
      <footer>
        <FooterLogo />
        <FooterHero />
        <GoogleMapLocation />
        <FooterCopyright />
      </footer>
    </>
  )
}