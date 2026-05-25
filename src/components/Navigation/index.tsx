"use client";

import { useState, useEffect } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import NavMenu from '../NavMenu';

const Navigation = () => {
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
    <nav className="relative font-primary text-primary w-full lg:max-w-4/5 lg:mx-auto">
      <div ref={menuRef}>
        <div className="flex justify-end m-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" onClick={() => setHamburger(prev => !prev)}>
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
        absolute w-2/3 md:w-1/2 right-0 h-screen flex-col items-end gap-8 overflow-hidden overscroll-none z-15
        lg:h-auto lg:w-full lg:gap-1 lg:static lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:overflow-visible`}>
          <NavMenu color={"bg-white"} textColor={"text-primary"}/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
