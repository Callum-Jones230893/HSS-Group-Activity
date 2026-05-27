import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className=" bg-white flex items-center justify-center z-999 sticky top-0 md:py-4 lg:w-full lg:mx-auto pt-10 lg:pt-4">
      <Link href="/" className="shrink-0 pl-4">
        <Image
          src="/images/hss_logo.png"
          alt="HSS Logo"
          width={68}
          height={68}
          loading="eager"
          className="w-13 h-13 md:w-17 md:h-17 lg:ml-30"
        />
      </Link>
      <Navigation />
      <a
        href="https://www.scouterna.se/"
        target="_blank"
        className="flex items-center gap-2.5 p-2.5 bg-[#EAEAEA] rounded-bl-[10px] absolute top-0 right-0"
      >
        <Image
          src="/images/scouterna_logo.png"
          alt="scouterna logo"
          width={105}
          height={23}
          className="w-22.5 h-4.75 lg:w-26.25 lg:h-5.75"
        />
      </a>
    </header>
  );
};

export default Header;
