"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { InstagramType } from "@/utils/instagramFetch";

type InstagramProps = {
  feed: InstagramType[];
};

const InstagramSlider = ({ feed }: InstagramProps) => {
  const t = useTranslations("InstagramSlider");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "ltr",
    align: "start",
    containScroll: "keepSnaps",
    dragFree: true,
    breakpoints: {
      "(max-w: 639px)": { active: false },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const date = (date: string) =>
    date.substring(0, 10) + (date.length > 10 ? "" : "");

  return (
    <div className="w-full max-w-360 justify-between mx-auto px-4 py-8">
      <div className=" flex items-center justify-start mb-8 border-b border-primary pb-3">
        <h2 className="text-2xl sm:text-3xl font-primary font-extrabold tracking-tight bg-linear-to-r from-primary via-[#e1306c] to-secondary bg-clip-text text-transparent ">
          {t("title")}{" "}
        </h2>
      </div>

      <div className=" relative group px-2">
        <button
          onClick={scrollPrev}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-secondary items-center justify-center border border-slate-700/80 shadow-2xl transition duration-200 active:scale-90 opacity-0 group-hover:opacity-100 focus:opacity-100 text-2xl font-mono pb-1"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={scrollNext}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-secondary items-center justify-center border border-slate-700/80 shadow-2xl transition duration-200 active:scale-90 opacity-0 group-hover:opacity-100 focus:opacity-100 text-2xl font-mono pb-1"
          aria-label="Next slide"
        >
          ›
        </button>

        <div
          className=" overflow-hidden sm:cursor-grab sm:active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center ">
            {feed.map((post, index) => (
              <div
                key={index}
                className="w-75 mx-auto sm:mx-0 sm:w-auto sm:flex-[0_0_320px] shrink-0 border border-primary rounded-2xl overflow-hidden  flex flex-col justify-between"
              >
                <div className="relative w-full aspect-square bg-primary overflow-hidden ">
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="animate-spin rounded-full h-12 w-12 border-2 border-secondary/20 border-t-secondary"></div>
                  </div>
                  <Image
                    src={post.sizes.small.mediaUrl}
                    alt="Instagram Post"
                    fill
                    sizes="(max-w-640px) 100vw, 320px"
                    className="object-cover z-10"
                  />
                </div>

                <div className="p-3 grow flex flex-col justify-between bg-primary">
                  <div className="flex items-center justify-between text-xs text-secondary">
                    <span>{date(post.timestamp)}</span>
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/50 hover:text-secondary font-bold flex"
                    >
                      {t("viewPost")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstagramSlider;
