"use client";

import { useState, useEffect } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";

const Navigation = () => {
  const [openMore, setOpenMore] = useState<boolean>(false);
  const [hamburger, setHamburger] = useState<boolean>(false);

  const menuRef = useClickAway<HTMLDivElement>(() => {
    setHamburger(false);
  });

  useEffect(() => {
    document.body.style.overflow = hamburger ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [hamburger]);

  const navItems: { name: string; link: string }[] = [
    { name: "Become a scout", link: "/becomeascout" },
    { name: "Become a leader", link: "/becomealeader" },
    { name: "Reserve a camp", link: "/reserveacamp" },
    { name: "Contact us", link: "/contactus" },
    { name: "About us", link: "/aboutus" },
  ];

  const moreMenu: { name: string; link: string }[] = [
    { name: "Activities", link: "/activities" },
    { name: "History of HSS", link: "/history" },
    { name: "Safety of HSS", link: "/safety" },
  ];

  return (
    <nav className="relative font-primary text-primary w-full md:max-w-4/5 md:mx-auto">
      <div ref={menuRef}>
        <div className="flex justify-end m-4 md:hidden" onClick={() => setHamburger(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M6 24H42M6 12H42M6 36H42"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={`${hamburger ? "flex" : "hidden"}
        bg-white py-4
        absolute w-3/4 right-0 pr-4 h-screen flex-col items-center gap-8 overflow-hidden overscroll-none z-15
        md:h-auto md:w-full md:gap-2 md:static md:flex md:flex-row md:justify-center md:overflow-visible`}>
          {navItems.map((item, index) => (
            <Link href={item.link} key={index} className="w-full text-end md:text-center">
              <span className="text-[19px] w-full">{item.name}</span>
            </Link>
          ))}
          <div className="relative flex flex-col items-end md:items-center w-full">
            <button
              type="button"
              onClick={() => setOpenMore(prev => !prev)}
              className="flex md:items-center justify-center">
              <span className="text-[19px] w-full">More</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M14.771 18.4615L8.61719 12.3076H20.9249L14.771 18.4615Z" fill="#003660" />
              </svg>
            </button>
            {openMore && (
              <div className="bg-white flex w-full flex-col gap-4  top-12 md:absolute md:left-0 md:pb-4">
                {moreMenu.map((item, index) => (
                  <Link href={item.link} key={index} className="w-full text-end md:text-center">
                    <p className="w-full">{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
