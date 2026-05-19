import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/hero_background.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mt-48 w-188 mx-auto">
        <h3 className="text-secondary font-primary text-[28px]">Äventyr och kompisar!</h3>
        <h1 className="text-white font-secondary text-[40px] mt-8 mb-20.5 text-center">
          Välkommen till Hässelby Strands Sjöscoutkår. Äventyr på riktigt!
        </h1>
        <div className="flex">
          <button className="bg-secondary p-2 m-4">BUTTON PLACEHOLDER</button>
          <button className="bg-secondary p-2 m-4">BUTTON PLACEHOLDER</button>
        </div>
      </div>
      <Image src="/images/hss_brand.png" alt="HSS branding" width={457} height={109} style={{ opacity: 0.65 }} />
    </div>
  );
};

export default Hero;
