import Image from "next/image";

const Header = () => {
  return (
    <header className= "p-4 bg-white">
      <Image
        src="/images/hss_logo.png"
        alt="HSS Logo"
        width={80}
        height={80}
        loading="eager"
      ></Image>
    </header>
  );
};

export default Header
