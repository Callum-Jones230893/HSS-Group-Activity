import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ subtitle, title }: HeroProps) => {
  return (
    <div
      className="flex flex-col items-center h-screen justify-between
      bg-[url('/images/hero_background.png')]
      bg-no-repeat
      bg-cover
      bg-position-[-120px_center]
      md:bg-center
      md:min-h-120">
      <div className="flex flex-col items-center justify-center w-65.75 md:w-188 mx-auto md:grow">
        <h3 className="text-secondary font-primary md:text-[28px]">{subtitle}</h3>
        <h1 className="text-white font-secondary text-[22px] md:text-[40px] mt-8 text-center">{title}</h1>
        <div className="flex flex-col md:flex-row md:mt-8">
          <button className="bg-secondary p-2 m-4">BUTTON PLACEHOLDER</button>
          <button className="bg-secondary p-2 m-4">BUTTON PLACEHOLDER</button>
        </div>
      </div>
      <Image
        src="/images/hss_brand.png"
        alt="HSS branding"
        width={457}
        height={109}
        className="opacity-65 hidden md:block pb-4"
      />
    </div>
  );
};

export default Hero;
