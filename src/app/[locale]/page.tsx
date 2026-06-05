import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Cards from "@/components/Cards";
import ScoutPage from "@/components/ScoutPage";
import ContactUsForm from '@/components/ContactUsForm';
import { AboutSectionData } from "@/data/about";

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

      <ContactUsForm />
      
      <Cards/>

      <AboutSection item={AboutSectionData} />
    </>
  );
}
