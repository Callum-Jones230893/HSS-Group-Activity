"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useState, JSX } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { useLocale } from "next-intl";
import "flag-icons/css/flag-icons.min.css";

type LocaleProps = {
  locale: string;
  content: string;
  icon: JSX.Element;
};

export default function LanguageButton() {
  const pathname = usePathname();

  const getLocale = useLocale();

  const [openLocale, setOpenLocale] = useState<boolean>(false);

  const localeRef = useClickAway<HTMLDivElement>(() => {
    setOpenLocale(false);
  });

  const localeOptions: LocaleProps[] = [
    {
      locale: "sv",
      content: "SV",
      icon: <span className="fi fi-se fis  rounded-2xl"></span>,
    },
    {
      locale: "en",
      content: "EN",
      icon: <span className="fi fi-gb fis rounded-2xl"></span>,
    },
  ];

  const currentLocale: LocaleProps =
    localeOptions.find((locale) => locale.locale === getLocale) ??
    localeOptions[0];
  const remainingLocales: LocaleProps[] = localeOptions.filter(
    (locale) => locale.locale !== getLocale,
  );

  return (
    <div
      ref={localeRef}
      className="relative flex justify-end items-center lg:justify-center w-full lg:w-auto "
    >
      <div
        onClick={() => setOpenLocale((prev) => !prev)}
        className="cursor-pointer flex justify-center items-center gap-1"
      >
        <p className="text-[19px] md:text-[21px] md:hover:scale-110 duration-300 ease-in-out">
          {currentLocale.icon}
        </p>
        <p className="text-[14px] md:text-paragraph text-primary">
          {currentLocale.content}
        </p>
      </div>
      {openLocale && (
        <div className="bg-white flex flex-col gap-4 top-8 p-5 justify-center items-center w-22 -right-7 md:-right-5.75 absolute">
          {remainingLocales.map((item, index) => (
            <Link
              key={index}
              href={pathname}
              locale={item.locale}
              className="w-full"
              onClick={() => setOpenLocale(false)}
            >
              <div className="flex items-center justify-start gap-1 w-full">
                <p className="text-[19px] md:text-[21px] md:hover:scale-110 duration-300 ease-in-out">
                  {item.icon}
                </p>
                <p className="text-[14px] md:text-paragraph text-primary">
                  {item.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
