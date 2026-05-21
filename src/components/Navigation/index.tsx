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
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
