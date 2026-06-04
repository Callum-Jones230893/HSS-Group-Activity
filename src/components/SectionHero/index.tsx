import Image from "next/image";
import Button, { ButtonProp } from "../Button";

type HeroProps = {
  title: string;
  intro: string;
  image?: string;
  button?: ButtonProp;
};

const Hero = ({ title, intro, image, button }: HeroProps) => {
  return (
    <div className="bg-primary">
      <div className="max-w-432 mx-auto px-4 lg:px-36 py-6 lg:py-12 flex flex-col lg:flex-row gap-8 lg:items-center">
        <div className="flex-1 flex flex-col gap-6 text-white">
          <h1 className="text-[32px] lg:text-[53px]">{title}</h1>
          <p className="text-[18px] font-light md:text-[24px]">{intro}</p>
          {button && <Button {...button} />}
        </div>
        {image && (
          <Image
            src={image}
            alt={title}
            width={471}
            height={471}
            className="hidden lg:block object-cover w-80 h-80 rounded-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
