import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import FooterNav from "@/components/FooterNav";
import FooterCopyright from "@/components/FooterCopyright";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const manrope = localFont({
  src: "../../../public/fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
});

const yesevaOne = localFont({
  src: "../../../public/fonts/YesevaOne-Regular.woff2",
  variable: "--font-yeseva",
});

export const metadata: Metadata = {
  title: "HSS Scouterna",
  description: "HSS Scouts page",
  icons: {
    icon: "/images/icon.png",
    apple: "/images/apple-icon.png",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${manrope.variable} ${yesevaOne.variable} h-full antialiased`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className="flex flex-col font-primary h-full">
          <Header />
          <main className="flex-1">{children}</main>
          <footer>
            <FooterNav />
            <FooterCopyright />
          </footer>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
