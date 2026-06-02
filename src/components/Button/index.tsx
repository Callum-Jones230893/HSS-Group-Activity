import Link from "next/link";

export type ButtonProp = {
  content: string;
  size: string;
  redirect: string;
  type: string;
};

const Button = ({ content, size, redirect, type }: ButtonProp) => {
  let dimensions = "";

  if (size === "large") {
    dimensions = "h-[53px] px-[29px] py-[12px] rounded-[30px]";
  }

  if (size === "small") {
    dimensions = "h-[35px] px-[25px] py-[7px] rounded-[25px]";
  }

  return type === "mail" ? (
    <a href="mailto:testest@hotmail.com.com">
      <button
        className={`flex flex-col items-center justify-center cursor-pointer text-[16px] md:text-[18px] w-fit text-primary bg-secondary ${border} ${dimensions} hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out border border-solid border-secondary hover:border-secondary`}>
        {content}
      </button>
    </a>
  ) : type === "external" ? (
    <a href="https://www.scouterna.se/">
      <button
        className={`flex flex-col items-center justify-center cursor-pointer text-[16px] md:text-[18px] w-fit text-primary bg-secondary ${border} ${dimensions} hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out border border-solid border-secondary hover:border-secondary`}>
        {content}
      </button>
    </a>
  ) : (
    <Link href={`/${redirect}`}>
      <button
        className={`flex flex-col items-center justify-center cursor-pointer text-[16px] md:text-[18px] w-fit text-primary bg-secondary ${border} ${dimensions} hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out border border-solid border-secondary hover:border-secondary`}>
        {content}
      </button>
    </Link>
  );
};

export default Button;
