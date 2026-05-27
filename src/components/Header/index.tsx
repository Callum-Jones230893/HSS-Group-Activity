import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";

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
    </header>
  );
};

export default Header;
