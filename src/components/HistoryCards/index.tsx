"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { HistoryType } from "@/data/history";
import { useClickAway } from "@uidotdev/usehooks";

type HistoryItemProps = {
  item: HistoryType;
  first?: boolean;
  expanded: boolean;
  updateExpanded: (expanded: boolean) => void;
  updateImage: (image: string | null) => void;
  closeOverlay: ReturnType<typeof useClickAway>;
};

const HistoryCards = ({
  item,
  first,
  expanded,
  updateExpanded,
  updateImage,
  closeOverlay,
}: HistoryItemProps) => {
  const t = useTranslations("history");

  const imagehelper = () => {
    expanded ? updateExpanded(false) : updateExpanded(true);
    updateImage(item.image);
  };

  return (
    <section className="flex flex-col lg:flex-row 2xl:w-8/10 lg:mb-12 lg:gap-12">
      <article className="flex flex-col xl:w-8/10 text-[18px] lg:text-[22px] text-primary tracking-[1%] gap-4.5 leading-[175%] mb-5">
        <h3 className="text-subtitle lg:text-[30px] text-black">
          {t(`${item.id}.date`)}
        </h3>
        <h2 className="text-[24px] lg:text-[36px] font-light">
          {t(`${item.id}.title`)}
        </h2>
        <p>{t(`${item.id}.description`)}</p>
        <p>{t(`${item.id}.descriptionTwo`)}</p>
      </article>
      <div>
        <div
          className={`${first ? "justify-center" : ""} mx-auto flex items-center w-full h-75 md:h-100 lg:w-125 lg:h-100 xl:w-150 xl:max-h-150 object-contain overflow-hidden max-w-150`}
        >
          <Image
            src={item.image}
            width="400"
            height="400"
            alt={t(`${item.id}.title`)}
            loading="eager"
            className={`${first ? "w-50 md:w-75 aspect-square object-contain" : "w-150"}`}
          />
        </div>
        {!first && (
          <div
            className="mx-auto cursor-pointer fill-primary hover:scale-112 hover:fill-secondary transition duration-300 w-fit"
            ref={closeOverlay as React.RefObject<HTMLDivElement>}
            onClick={!first ? imagehelper : undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="hidden md:block md:w-7.5 md:aspect-square mdmx-auto md:mt-5"
            >
              <path
                d="
                  M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 
                  554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9
                  480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64
                  480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 
                  128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default HistoryCards;
