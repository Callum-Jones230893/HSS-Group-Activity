import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';
import Header from "@/components/Header";
import GoogleMapLocation from "@/components/Footer-GoogleMap";
import FooterHero from "@/components/Footer-Hero";
import FooterCopyright from "@/components/FooterCopyright";
import FooterLogo from "@/components/FooterLogo";

type ChildProps = {
  children: React.ReactNode
  params: Promise<{locale: string}>
}

export default async function LocaleLayout({children, params}: ChildProps) {
  const locale = await getLocale();
  const messages = await getMessages();

    
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <footer>
        <FooterLogo />
        <FooterHero />
        <GoogleMapLocation />
        <FooterCopyright />
      </footer>
    </NextIntlClientProvider>
  )
}