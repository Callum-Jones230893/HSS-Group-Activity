"use client";

import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";
import { navItems, moreMenu } from "@/data/navigation";

type DropdownProp = {
  color: string;
  textColor: string;
  closeHamburger?: (hamburger: boolean) => void;
};

const NavMenu = ({ color, textColor, closeHamburger }: DropdownProp) => {
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
          className="w-full lg:w-auto text-center md:hover:scale-110 duration-300 ease-in-out">
          <span className="text-[16px] md:text-[20px] lg:text-[16px] w-full" onClick={() => closeHamburger?.(false)}>
            {item.name}
          </span>
        </Link>
      ))}
      <div ref={moreMenuRef} className="relative flex flex-col w-full lg:w-auto">
        <button
          type="button"
          onClick={() => setOpenMore(prev => !prev)}
          className="flex items-center justify-center w-full mb-4 lg:w-auto lg:mb-0 cursor-pointer md:hover:scale-110 duration-300 ease-in-out">
          <span className="text-[16px] md:text-[20px] lg:text-[16px]">Mer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className={`transition-transform duration-350 ${openMore ? "rotate-180" : "rotate-0"} ${textColor}`}>
            <path d="M14.771 18.4615L8.61719 12.3076H20.9249L14.771 18.4615Z" fill="currentColor" />
          </svg>
        </button>
        {openMore && (
          <div
            className={`${color} ${textColor} backdrop-blur-xs flex flex-col gap-6 top-6 justify-center items-center w-full absolute p-5 lg:min-w-fit lg:p-8 lg:-left-12`}>
            {moreMenu.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="w-26 justify-center items-center md:hover:scale-110 duration-300 ease-in-out"
                onClick={() => setOpenMore(false)}>
                <p
                  className="text-[16px] md:text-[20px] lg:text-[16px] w-full text-center lg:text-left"
                  onClick={() => closeHamburger?.(false)}>
                  {item.name}
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
