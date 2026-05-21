import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation";

const Header = () => {
  return (
     <header className=" bg-white flex items-center ">
      <Link href="/" className="shrink-0">
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
