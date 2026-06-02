"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface InstagramPost {
  id: string;
  image: string;
  link: string;
  date: string;
}

const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    id: "001",
    image: "/images/002.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "002",
    image: "/images/018.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "003",
    image: "/images/003.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "004",
    image: "/images/019.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "005",
    image: "/images/006.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "006",
    image: "/images/016.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
];

const InstagramSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "ltr",
    align: "start",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full max-w-360 justify-between mx-auto px-4 py-8">
      <div className=" flex items-center justify-start mb-8 border-b border-primary pb-3">
        <h2 className="text-2xl  text-primary font-primary">
          Senaste Instagram-inläggen
        </h2>
      </div>

      <div className=" relative group px-2">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-secondary flex items-center justify-center border border-slate-700/80 shadow-2xl transition duration-200 active:scale-90 opacity-0 group-hover:opacity-100 focus:opacity-100 text-2xl font-mono pb-1"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-secondary flex items-center justify-center border border-slate-700/80 shadow-2xl transition duration-200 active:scale-90 opacity-0 group-hover:opacity-100 focus:opacity-100 text-2xl font-mono pb-1"
          aria-label="Next slide"
        >
          ›
        </button>

        <div
          className=" overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {PLACEHOLDER_POSTS.map((post) => (
              <div
                key={post.id}
                className="flex-[0_0_280px] sm:flex-[0_0_320px]   border border-primary rounded-2xl overflow-hidden  flex flex-col justify-between"
              >
                <div className="relative h-60 bg-primary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="animate-spin rounded-full h-12 w-12 border-2 border-secondary/20 border-t-secondary"></div>
                  </div>
                  <Image
                    src={post.image}
                    alt="Instagram Post"
                    fill
                    sizes="(max-w-780px) 280px, 320px"
                    className="object-cover z-10"
                  />
                </div>

                <div className="p-3 grow flex flex-col justify-between bg-primary">
                  <div className="flex items-center justify-between text-xs text-secondary">
                    <span>
                      {new Date(post.date).toLocaleDateString("sv-SE", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/50 hover:text-secondary font-bold flex"
                    >
                      Visa inlägg
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
