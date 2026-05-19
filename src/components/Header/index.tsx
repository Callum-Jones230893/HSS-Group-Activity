import Image from "next/image";
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className= " bg-white flex items-center">
      <Image
        src="/images/hss_logo.png"
        alt="HSS Logo"
        width={68}
        height={68}
        loading="eager"
        className="w-13 h-13 m-4 md:w-17 md:h-17"
      />
      <Navigation />
    </header>
  );
};

export default Header
