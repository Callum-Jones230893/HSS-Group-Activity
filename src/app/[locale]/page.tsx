import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Cards from "@/components/Cards";
import ScoutPage from "@/components/ScoutPage";
import { AboutSectionData } from "@/data/about";
import InstagramSlider from "@/components/InstagramSlider";

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

      {/* <ContactUsSection /> */}
      <Cards />

      <AboutSection item={AboutSectionData} />
      <InstagramSlider />
    </>
  );
}
