import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import FooterHero from "@/components/Footer-Hero";
import FooterLogo from "@/components/FooterLogo";

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
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <footer>
          <FooterLogo />
          <FooterHero />
        </footer>
      </body>
    </html>
  );
}
