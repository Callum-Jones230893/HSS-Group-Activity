"use client";

import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { navItems, moreMenu } from "@/data/navigation";
import { useTranslations } from "next-intl";

type DropdownProp = {
  color: string;
  textColor: string;
  closeHamburger?: (hamburger: boolean) => void;
};

const NavMenu = ({ color, textColor, closeHamburger }: DropdownProp) => {
  const t = useTranslations("navbar");

  const pathname = usePathname();

  const [openMore, setOpenMore] = useState<boolean>(false);

  const moreMenuRef = useClickAway<HTMLDivElement>(() => {
    setOpenMore(false);
  });

  return (
    <>
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={`w-full lg:w-auto text-center lg:border-b-[3px] duration-300 ${pathname.startsWith(item.link) ? "lg:border-secondary" : "lg:border-transparent lg:hover:border-secondary"}`}
        >
          <span
            className="text-paragraph w-full"
            onClick={() => closeHamburger?.(false)}
          >
            {t(item.name)}
          </span>
        </Link>
      ))}

      <div
        ref={moreMenuRef}
        className="relative flex flex-col w-full lg:w-auto"
      >
        <button
          type="button"
          onClick={() => setOpenMore((prev) => !prev)}
          className="flex items-center justify-center w-full lg:w-auto  cursor-pointer lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary duration-300"
        >
          <span className="text-paragraph">{t("menulabel")}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className={`transition-transform duration-350 ${openMore ? "rotate-180" : "rotate-0"} ${textColor}`}
          >
            <path
              d="M14.771 18.4615L8.61719 12.3076H20.9249L14.771 18.4615Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {openMore && (
          <div
            className={`${color} ${textColor} backdrop-blur-xs flex flex-col gap-6 top-8 justify-center items-center lg:items-start w-full absolute p-5 lg:min-w-max lg:p-8 lg:-left-9`}
          >
            {moreMenu.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`justify-center items-center ${pathname.startsWith(item.link) ? "text-secondary" : "md:hover:scale-110 duration-300 ease-in-out"}`}
                onClick={() => setOpenMore(false)}
              >
                <p
                  className="text-paragraph w-full text-center md:text-left"
                  onClick={() => closeHamburger?.(false)}
                >
                  {t(item.name)}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavMenu;
