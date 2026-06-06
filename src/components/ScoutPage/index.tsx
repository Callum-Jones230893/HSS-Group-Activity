import CallToActionCard from "@/components/CallToActionCard";
import { callToActionData } from "@/data/intro";
import Image from "next/image";

const ScoutPage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 lg:-top-14 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1728 245" fill="none">
          <path
            d="M1727.79 239.582C1576.58 239.582 1490.09 13.8659 1293.88 180.763C1097.66 347.66 1013.2 120.281 858.953 121.944C704.706 123.606 630.87 312.743 419.477 180.763C208.084 48.7832 160.546 278.241 -19.9985 239.582V-78.0005L1727.79 -78.0005V239.582Z"
            fill="url(#paint0_linear_1_1431)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_1431"
              x1="936.328"
              y1="183.653"
              x2="887.663"
              y2="-75.988"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.00961538" stopColor="#F8F8F8" stopOpacity="0.36" />
              <stop offset="1" stopColor="#7B9CC7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute -z-10 opacity-35 -right-8 -top-8 md:-left-15 md:-top-2">
        <Image
          src="/images/background_shell1.png"
          height={411}
          width={400}
          alt="background seashell graphic"
          className="h-50 w-48.75 md:h-77 md:w-75 lg:h-102.75 lg:w-100 2xl:h-131.25 2xl:w-127.75 rotate-44 lg:rotate-69"
        />
      </div>
      <div className="hidden md:block absolute -z-10 opacity-35 md:-right-35 md:top-182">
        <Image
          src="/images/background_shell2.png"
          height={390}
          width={462}
          alt="background seashell graphic"
          className="md:h-70 md:w-83 lg:h-85 lg:w-100.75 2xl:h-97.5 2xl:w-115.5"
        />
      </div>
      <div className="absolute -z-10 opacity-35">
        <Image
          src="/images/background_shell3.png"
          height={522}
          width={384}
          alt="background seashell graphic"
          className="-rotate-129"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-10 lg:gap-0 pt-20 lg:pt-40">
        {callToActionData.map((item, index) => (
          <CallToActionCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ScoutPage;
