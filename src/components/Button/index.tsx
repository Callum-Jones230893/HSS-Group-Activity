import { Link } from "@/i18n/navigation";

export type ButtonProp = {
  content: string;
  size: string;
  redirect: string;
  type: string;
  url: string;
};

const Button = ({ content, size, redirect, type, url }: ButtonProp) => {
  let dimensions = "";

  if (size === "large") {
    dimensions = "h-[53px] px-[29px] py-[12px] rounded-[30px]";
  }

  if (size === "small") {
    dimensions = "h-[35px] px-[25px] py-[7px] rounded-[25px]";
  }

  return type === "submit" ? (
    <button
      className={`flex flex-col items-center justify-center cursor-pointer text-paragraph md:text-[18px] w-fit text-primary bg-secondary ${dimensions} hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out border border-solid border-secondary hover:border-secondary`}
    >
      {content}
    </button>
  ) : type === "external" ? (
    <a href={url} target="_blank" className="w-fit">
      <button
        className={`flex flex-col items-center justify-center cursor-pointer text-paragraph w-fit text-primary bg-secondary ${dimensions} hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out border border-solid border-secondary hover:border-secondary`}
      >
        {content}
      </button>
    </a>
  ) : (
    <Link href={`/${redirect}`} className="w-fit">
      <button
        className={`flex flex-col items-center justify-center cursor-pointer text-paragraph w-fit text-primary bg-secondary ${dimensions} hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out border border-solid border-secondary hover:border-secondary`}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;
