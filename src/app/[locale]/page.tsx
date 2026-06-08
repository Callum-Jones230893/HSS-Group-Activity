import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import ScoutPage from "@/components/ScoutPage";
import InstagramSlider from "@/components/InstagramSlider";
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

      {/* <ContactUsSection /> */}
      <Cards />

      <AboutSection item={AboutSectionData} />
      <InstagramSlider />
    </>
  );
}
