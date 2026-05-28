"use client";

import { useState, useEffect } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import NavMenu from "../NavMenu";

type NavOrderProp = {
  className?: string;
};

const Navigation = ({ className }: NavOrderProp) => {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const menuRef = useClickAway<HTMLDivElement>(() => {
    setHamburger(false);
  });

  const pathname = usePathname();

  useEffect(() => {
    setHamburger(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = hamburger ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [hamburger]);

  return (
    <nav className={`relative font-primary  text-primary lg:w-2/3 lg:mx-auto ${className}`}>
      <div className={`fixed inset-0 bg-primary/70 lg:hidden backdrop-blur-sm transition-opacity duration-300
        ${hamburger ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
      <div ref={menuRef}>
        <div className="flex justify-end m-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 40 48"
            fill="none"
            className="z-999"
            onClick={() => setHamburger(prev => !prev)}>
            <path
              d="M6 24H42M6 12H42M6 36H42"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={`
          fixed top-0 right-0 h-screen w-2/3 md:w-1/2 bg-white
          flex flex-col items-end gap-8 overflow-y-auto overscroll-none pt-30 pb-10
          transition-all duration-500 ease-in-out
          ${hamburger ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
          lg:static lg:flex lg:flex-row lg:justify-evenly lg:items-center
          lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto lg:h-auto lg:w-full lg:gap-1 lg:pb-0 lg:pt-0 lg:overflow-visible
        `}>
          <NavMenu color={"bg-white"} textColor={"text-primary"} hamburger={hamburger} closeHamburger={setHamburger} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
