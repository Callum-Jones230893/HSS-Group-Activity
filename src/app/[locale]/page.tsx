import Hero from '@/components/Hero';
import AboutSection from "@/components/AboutSection";
import Cards from '@/components/Cards'
import ScoutPage from "@/components/ScoutPage";


export default function Home() {
  return (
    <>
      <Hero subtitle="Äventyr och kompisar!" title="Välkommen till Hässelby Strands Sjöscoutkår. Äventyr på riktigt!"/>
      <h1 className="text-yellow font-yeseva"></h1>
      <h1 className="text-yellow font-yeseva"></h1>
      {/* <HeroMain /> */}
      <ScoutPage />

      {/* <AboutUsSection /> */}

      {/* <ActivitySection /> */}

      {/* <BecomeLeaderSection /> */}

      {/* <RentCampSection /> */}

      {/* <ContactUsSection /> */}
      <Cards/>

      <AboutSection />
    </>
  );
}
