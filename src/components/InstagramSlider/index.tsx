"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  caption?: string;
}

const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    id: "mock_1",
    media_url: "/images/002.png",
    permalink: "https://www.instagram.com/hss_scout/",
    timestamp: new Date().toISOString(),
  },
  {
    id: "mock_2",
    media_url: "/images/018.png",
    permalink: "https://www.instagram.com/hss_scout/",
    timestamp: new Date().toISOString(),
  },
  {
    id: "mock_3",
    media_url: "/images/003.png",
    permalink: "https://www.instagram.com/hss_scout/",
    timestamp: new Date().toISOString(),
  },
  {
    id: "mock_4",
    media_url: "/images/019.png",
    permalink: "https://www.instagram.com/hss_scout/",
    timestamp: new Date().toISOString(),
  },
  {
    id: "mock_5",
    media_url: "/images/006.png",
    permalink: "https://www.instagram.com/hss_scout/",
    timestamp: new Date().toISOString(),
  },
  {
    id: "mock_6",
    media_url: "/images/016.png",
    permalink: "https://www.instagram.com/hss_scout/",
    timestamp: new Date().toISOString(),
  },
];

export default function InstagramSlider() {
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
    <div
      className="w-full max-w-[1440px] justify-between mx-auto px-4 py-8"
      dir="ltr"
    >
      <div className="flex items-center justify-between mb-8 border-b border-primary pb-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h2 className="text-2xl  text-primary font-bold font-primary tracking-tight leading-none">
              Senaste Instagram-inläggen
            </h2>
          </div>
        </div>
      </div>

      <div className="relative group px-2">
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
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {PLACEHOLDER_POSTS.map((post) => (
              <div
                key={post.id}
                className="flex-[0_0_280px] sm:flex-[0_0_320px] min-w-0  border border-primary rounded-2xl overflow-hidden shadow-lg hover:border-pink-500/40 transition-all duration-300 group/card flex flex-col justify-between"
              >
                {/* Media Layer */}
                <div className="relative h-[240px] bg-black overflow-hidden">
                  <Image
                    src={post.media_url}
                    alt={post.caption || "Instagram Post"}
                    fill
                    sizes="(max-w-780px) 280px, 320px"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                    unoptimized
                  />
                </div>

                <div className="p-4 grow flex flex-col justify-between bg-primary">
                  <div className="flex items-center justify-between text-xs text-secondary">
                    <span>
                      {new Date(post.timestamp).toLocaleDateString("sv-SW", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/50 hover:text-secondary font-medium flex items-center gap-1 transition"
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
}
