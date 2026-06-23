import { useTranslations } from "next-intl";

const FooterCopyright = () => {
  const t = useTranslations("footerCopyright");

  return (
    <section className="bg-primary flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 py-10 w-full text-center text-[14px] text-white font-primary border-t border-secondary lg:w-9/10 lg:justify-center lg:flex-row-reverse lg:gap-10 lg:pt-11 lg:pb-22">
        <p>{t("org")}</p>
        <p>{t("copy")}</p>
      </div>
    </section>
  );
};

export default FooterCopyright;
