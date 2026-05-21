import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-white flex items-center justify-center lg:w-5/6 lg:mx-auto">
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
    </header>
  );
};

export default Header;
