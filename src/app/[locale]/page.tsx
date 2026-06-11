import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import ScoutPage from "@/components/ScoutPage";
import InstagramSlider from "@/components/InstagramSlider";
import { AboutSectionData } from "@/data/about";
import ContactUsContainer from "@/components/ContactUsContainer";
import GoogleMapLocation from "@/components/Footer-GoogleMap";
import FooterHero from "@/components/Footer-Hero";
import FooterLogo from "@/components/FooterLogo";

export default function Home() {
  return (
    <>
      <Hero />
      <ScoutPage />

      <ContactUsContainer />

      <AboutSection item={AboutSectionData} />

      <InstagramSlider />

      <FooterLogo />

      <FooterHero />

      <GoogleMapLocation />
    </>
  );
}
