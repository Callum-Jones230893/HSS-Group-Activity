"use client"

import Image from "next/image"
import { HistoryData } from "@/data/history"
import HistoryCards from "@/components/HistoryCards"
import { useEffect, useState } from "react"
import { useClickAway } from "@uidotdev/usehooks"

const History = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [image, setImage] = useState<string | null>(null)

  console.log(expanded, image)

  const closeOverlay = useClickAway<HTMLDivElement>(() => {
    setExpanded(false)
    setImage(null)
  })

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [expanded])
  
  return (
    <div className="relative overflow-hidden">
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
      <div className="absolute -z-10 opacity-25 -right-8 -top-8 md:-left-15 md-top-0">
        <Image
          src="/images/background_shell1.png"
          height={411}
          width={400}
          alt="background seashell graphic"
          className="w-73.75 md:w-105 lg:w-200 2xl:w-227.75 rotate-44 lg:rotate-69 aspect-square"
        />
      </div>
      <div className="block absolute -z-10 opacity-25 md:-right-35 top-182 md:top-282">
        <Image
          src="/images/background_shell2.png"
          height={390}
          width={462}
          alt="background seashell graphic"
          className="w-71 md:w-133 lg:w-200.75 2xl:w-215.5 aspect-square"
        />
      </div>
      <div className="absolute -z-10 opacity-20 bottom-0 -right-10 md:top-[70%] md:-left-10">
        <Image
          src="/images/background_shell3.png"
          height={522}
          width={384}
          alt="background seashell graphic"
          className="w-71.5 md:w-107.25 lg:w-173.75 2xl:w-196 -rotate-129 aspect-square"
        />
      </div>
      <section className="flex flex-col w-9/10 mx-auto items-center justify-center lg:gap-28 my-10 lg:my-22">
        <div className={`fixed inset-0 z-10 flex items-center justify-center bg-primary/70 backdrop-blur-sm transition-all duration-500 ease-in-out
          ${image
            ? "bg-primary/70 backdrop-blur-sm opacity-100" 
            : "bg-primary/0 backdrop-blur-[0px] opacity-0 pointer-events-none"} 
          `}>
          {image && 
            <Image src={image} width="400" height="400" alt="" className="lg:w-135 xl:w-150 2xl:w-200 z-11"/>
          }
        </div>
        {HistoryData.map((item, index) => 
          <HistoryCards 
            key={index}
            item={item} 
            first={index === 0} 
            expanded={expanded}
            updateExpanded={setExpanded}
            updateImage={setImage}
            closeOverlay={closeOverlay} />
        )}
      </section>
    </div>
  )
}

export default History