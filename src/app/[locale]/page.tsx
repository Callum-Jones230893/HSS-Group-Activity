import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ScoutPage from "@/components/ScoutPage";
import { AboutSectionData } from "@/data/about";
import ContactUsContainer from "@/components/ContactUsContainer";
import GoogleMapLocation from "@/components/Footer-GoogleMap";
import FooterHero from "@/components/Footer-Hero";
import FooterLogo from "@/components/FooterLogo";
import InstagramContainer from "@/components/InstagramContainer";

export default function Home() {
  return (
    <>
      <Hero />

      <ScoutPage />

      <ContactUsContainer />

      <AboutSection item={AboutSectionData} />

      <InstagramContainer />

      <FooterLogo />

      <FooterHero />

      <GoogleMapLocation />
    </>
  );
}
