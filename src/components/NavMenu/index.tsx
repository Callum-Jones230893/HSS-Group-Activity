import { useState } from "react";
import { useClickAway } from '@uidotdev/usehooks';
import Link from "next/link";
import { navItems, moreMenu } from "@/data/navigation";

const NavMenu = () => {
  const [openMore, setOpenMore] = useState<boolean>(false);

  const moreMenuRef = useClickAway<HTMLDivElement>(() => {
    setOpenMore(false)
  })

  return (
    <>
      {navItems.map((item, index) => (
        <Link href={item.link} key={index} className="w-full text-end md:text-center">
          <span className="text-[19px] w-full">{item.name}</span>
        </Link>
      ))}
      <div ref={moreMenuRef} className="relative flex flex-col items-end md:items-center w-full">
        <button
          type="button"
          onClick={() => setOpenMore(prev => !prev)}
          className="flex md:items-center justify-center">
          <span className="text-[19px] w-full cursor-pointer">More</span>
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
    </>
  );
};

export default NavMenu;
