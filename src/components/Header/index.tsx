import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-white flex items-center justify-center lg:w-5/6 lg:mx-auto pt-12 lg:pt-0">
      <Link href="/" className="shrink-0 p-4">
        <Image
          src="/images/hss_logo.png"
          alt="HSS Logo"
          width={68}
          height={68}
          loading="eager"
          className="w-13 h-13 md:w-17 md:h-17"
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
