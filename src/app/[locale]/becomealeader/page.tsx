import { BecomeALeaderData } from "@/data/becomeleader";
import SectionHero from "@/components/SectionHero";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BecomeALeader = () => {
  const data = BecomeALeaderData;
  const t = useTranslations("becomealeader");
  return (
    <div className="flex flex-col bg-primary ">
      <div className="flex flex-start flex-col px-4  lg:px-36.5 lg:py-12">
        <SectionHero
          title={t("sectionHero.title")}
          intro={t("sectionHero.intro")}
          button={{
            url: "",
            content: t("button.content"),
            size: "large",
            redirect: "",
            type: "external",
          }}
        />
      </div>
      <Image
        src={data.image}
        height={1779}
        width={1152}
        loading="eager"
        alt="group of scouts on a cliff infront 3 boats"
        className=" py-9 lg:w-screen lg:max-h-120  object-cover object-[60%_75%] place-self-center rounded-2xl"
      />
      <section className="font-primary text-left text-white text-[18px] lg:text-[24px] leading-[31.5px] lg:leading-10.5 tracking-[0.18px] lg:tracking-[0.24px] px-4 lg:px-36.5">
        <p className="pb-6">{t("descriptionOne")}</p>
        <p className="pb-6">{t("descriptionTwo")}</p>
      </section>

      <div className="font-primary text-left text-white text-[18px] lg:text-[24px] lg:leading-11 pb-10 pt-4 px-4 lg:px-36.5">
        <p>{t("descriptionThree")}</p>
        <p className="py-2 pb-10 lg:pb-6">{t("quoteOne")}</p>
        <p>{t("descriptionFour")}</p>
        <p className="py-2 lg:pb-6">{t("quoteTwo")}</p>
        <p className="pt-4">{t("descriptionFive")}</p>
      </div>
    </div>
  );
};

export default BecomeALeader;
