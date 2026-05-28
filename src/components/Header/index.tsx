import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation";


const Header = () => {
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
      <Navigation className="order-3 lg:order-2" />
      <div className='order-2 lg:order-3 lg:pr-35 grow text-right lg:grow-0'>LANG</div>
    </header>
  );
};

export default Header;