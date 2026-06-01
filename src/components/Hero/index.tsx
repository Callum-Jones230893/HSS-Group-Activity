import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ subtitle, title }: HeroProps) => {
  return (
    <div
      className="flex flex-col items-center justify-between
      bg-[url('/images/hero_background_mobile.png')]
      bg-no-repeat
      bg-cover
      bg-position-[20%_center]
      min-h-187.5
      md:bg-[url('/images/hero_background.png')]
      md:bg-position-[center_center]
      md:min-h-170
      2xl:min-h-210">
      <div className="flex flex-col items-center justify-center mt-8 w-65.75 md:mt-15 md:w-188 mx-auto">
        <h3 className="text-secondary font-primary md:text-[28px]">{subtitle}</h3>
        <h1 className="text-white font-secondary text-[22px] md:text-[40px] mt-4 text-center">{title}</h1>
        <div className="flex flex-col font-primary gap-4 my-4 md:flex-row md:my-8 md:gap-8">
          <Button content={"Bli scout"} theme={"yellow"} size={"large"} redirect="becomeascout" />
          <Button content={"Bli ledare"} theme={"transparent"} size={"large"} redirect="becomealeader" />
        </div>
      </div>
      <Image
        src="/images/hss_brand.png"
        alt="HSS branding"
        width={380}
        height={109}
        className="opacity-65 hidden md:block pb-6"
      />
    </div>
  );
};

export default Hero;
