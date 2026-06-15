"use client";

import Image from "next/image";
import { HistoryData } from "@/data/history";
import HistoryCards from "@/components/HistoryCards";
import { useEffect, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";

const History = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);

  const t = useTranslations("history");

  const closeOverlay = useClickAway<HTMLDivElement>(() => {
    setExpanded(false);
    setImage(null);
  });

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [expanded]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 lg:-top-14 -z-10">
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
      <section className="flex flex-col w-9/10 mx-auto items-center justify-center gap-10 my-10 lg:my-22">
        <h1 className="text-left text-primary text-title w-full 2xl:w-8/10">
          {t("title")}
        </h1>
        <div
          className={`fixed w-full h-full px-10 pb-30 pt-40 inset-0 z-10 flex items-center justify-center bg-primary/70 backdrop-blur-sm transition-all duration-500 ease-in-out
          ${
            image
              ? "bg-primary/70 backdrop-blur-sm opacity-100"
              : "bg-primary/0 backdrop-blur-[0px] opacity-0 pointer-events-none"
          } 
          `}
        >
          {image && (
            <div className="p-5 w-full h-full">
              <Image
                src={image}
                width="1000"
                height="1000"
                alt=""
                className="w-auto h-full mx-auto z-11 border border-solid border-white"
              />
            </div>
          )}
        </div>
        {HistoryData.map((item, index) => (
          <HistoryCards
            key={index}
            item={item}
            first={index === 0}
            expanded={expanded}
            updateExpanded={setExpanded}
            updateImage={setImage}
            closeOverlay={closeOverlay}
          />
        ))}
      </section>
    </div>
  );
};

export default History;
