import CallToActionCard from "@/components/CallToActionCard";
import { callToActionData } from "@/data/intro";

const ScoutPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1728 245"
          fill="none"
        >
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
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.00961538"
                stopColor="#F8F8F8"
                stopOpacity="0.36"
              />
              <stop offset="1" stopColor="#7B9CC7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="w-full flex flex-col items-center gap-10 pb-40 md:pb-15 lg:gap-0 pt-20 lg:pt-40">
        {callToActionData.map((item, index) => (
          <CallToActionCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ScoutPage;
