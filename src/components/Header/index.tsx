import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 bg-white">
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
    </header>
  );
};

export default Header;
