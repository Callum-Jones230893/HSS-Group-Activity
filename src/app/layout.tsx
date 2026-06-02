import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import FooterNav from '@/components/FooterNav';
import GoogleMapLocation from "@/components/Footer-GoogleMap";
import FooterHero from "@/components/Footer-Hero";
import FooterLogo from "@/components/FooterLogo";
import FooterCopyright from "@/components/FooterCopyright";

const manrope = localFont({
  src: "../../public/fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
});

const yesevaOne = localFont({
  src: "../../public/fonts/YesevaOne-Regular.woff2",
  variable: "--font-yeseva",
});

export const metadata: Metadata = {
  title: "HSS Scouterna",
  description: "HSS Scouts page",
  icons: {
    icon: "/images/icon.png",
    apple: "/images/apple-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${yesevaOne.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Header />
        {children}
        <footer>
          <FooterLogo />
          <FooterHero />
          <GoogleMapLocation />
          <FooterNav />
          <FooterCopyright />
        </footer>
      </body>
    </html>
  );
}
