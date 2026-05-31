import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation";


const Header = ({t}: string) => {
  return (
    <header className=" bg-white w-full flex items-center justify-center z-999 sticky top-0 pt-10 md:py-6 lg:w-full lg:mx-auto lg:pt-4">
      <Link href="/" className="shrink-0 pl-4 lg:pl-30">
        <Image
          src="/images/hss_logo.png"
          alt="HSS Logo"
          width={68}
          height={68}
          loading="eager"
          className="w-13 h-13 md:w-17 md:h-17"
        />
      </Link>
      <Navigation className="order-3 lg:order-2" t={t} />
      <div className='order-2 lg:order-3 lg:pr-35 grow text-right lg:grow-0'>LANG</div>
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