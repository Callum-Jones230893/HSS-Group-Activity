import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Cards from "@/components/Cards";
import ScoutPage from "@/components/ScoutPage";
import { AboutSectionData } from "@/data/about";
import ContactUsContainer from '@/components/ContactUsContainer';

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-yellow font-yeseva"></h1>
      {/* <HeroMain /> */}
      <ScoutPage />

      {/* <AboutUsSection /> */}

      {/* <ActivitySection /> */}

      {/* <BecomeLeaderSection /> */}

      {/* <RentCampSection /> */}

      <ContactUsContainer />
      
      <Cards/>

      <AboutSection item={AboutSectionData} />
    </>
  );
}
