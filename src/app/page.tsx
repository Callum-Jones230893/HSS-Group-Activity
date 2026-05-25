import Hero from '@/components/Hero';
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Hero subtitle="Äventyr och kompisar!" title="Välkommen till Hässelby Strands Sjöscoutkår. Äventyr på riktigt!"/>
      <h1 className="text-yellow font-yeseva"></h1>
      {/* <HeroMain /> */}

      {/* <IntroSection /> */}

      {/* <AboutUsSection /> */}

      {/* <DepartmentSection /> */}

      {/* <ActivitySection /> */}

      {/* <BecomeLeaderSection /> */}

      {/* <RentCampSection /> */}

      {/* <ContactUsSection /> */}

      <AboutSection />
    </>
  );
}
