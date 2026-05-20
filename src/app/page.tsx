import AboutSection from "@/components/AboutSection";

import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        subtitle="Äventyr och kompisar!"
        title="Välkommen till Hässelby Strands Sjöscoutkår. Äventyr på riktigt!"
      />
      <h1 className="text-yellow font-yeseva">Hello World except Claudia</h1>
      {/* <HeroMain /> */}

      {/* <IntroSection /> */}

      {/* <AboutUsSection /> */}

      {/* <DepartmentSection /> */}

      {/* <ActivitySection /> */}

      {/* <BecomeLeaderSection /> */}

      {/* <RentCampSection /> */}

      {/* <ContactUsSection /> */}

      <AboutSection />
      <Button theme="transparent" size="large" />
    </>
  );
}
