import Image from "next/image";
import LanguageButton from '../LanguageButton';

const Header = () => {
  return (
    <header className= "p-4 bg-white flex">
      <Image
        src="/images/hss_logo.png"
        alt="HSS Logo"
        width={68}
        height={68}
        loading="eager"
        className="w-13 h-13 md:w-17 md:h-17"
      />
      <LanguageButton />
    </header>
  );
};

export default Header
