import Image from "next/image";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

const FooterLogo = () => {
  const t = useTranslations("footer.logo")
  const tNav = useTranslations("navbar")
  return (
    <div className="bg-primary flex flex-col text-center items-center pt-5 pb-10 gap-8 lg:pt-20 lg:pb-20 px-7">
      <Image
        src="/images/hss_logo.png"
        alt="HSS Logo"
        width={103}
        height={103}
        loading="eager"
        className="w-19 h-19 lg:w-25.75 lg:h-25.75"
      />
      <h3 className="font-secondary text-secondary text-[28px] lg:text-[32px]">
        {t("title")}
      </h3>
      <p className="max-w-162 font-primary text-[18px] text-white font-light">
        {t("description")}
      </p>
     <Button content={tNav("becomeascout")} size={"large"} redirect="becomeascout" type="" url="" />
    </div>
  );
};

export default FooterLogo;
