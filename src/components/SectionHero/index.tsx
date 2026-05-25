import Image from "next/image";

type HeroProps = {
  title: string;
  intro: string;
  image?: string;
};

const Hero = ({ title, intro, image }: HeroProps) => {
  return (
    <div className="bg-primary">
      <div className="max-w-432 mx-auto px-4 lg:px-36.75 pt-6 pb-10 lg:py-20 flex flex-col lg:flex-row gap-2 lg:items-center">
        <div className="flex-1 flex flex-col gap-6 text-white lg:max-w-175">
          <h1 className="text-[32px] lg:text-[53px]">{title}</h1>
          <p className="text-[18px] font-light lg:text-[24px]">{intro}</p>
          <button className="w-fit p-4 bg-secondary text-primary rounded-full">
            Become a scout Placeholder
          </button>
        </div>
        {image && (
          <Image
            src={image}
            alt={title}
            width={471}
            height={471}
            className="hidden lg:block object-cover w-117.75 h-117.75 rounded-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
