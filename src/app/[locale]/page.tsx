import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Cards from "@/components/Cards";
import ScoutPage from "@/components/ScoutPage";
import { AboutSectionData } from "@/data/about";
import InstagramSlider from "@/components/InstagramSlider";
import ContactUsContainer from '@/components/ContactUsContainer';

export default function Home() {
  
  return (
    <>
      <Hero />

      <ScoutPage />

      <ContactUsContainer />

      <AboutSection item={AboutSectionData} />
      <InstagramSlider />
    </>
  );
}
