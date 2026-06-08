import SectionHero from "@/components/SectionHero";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BecomeALeader = () => {
  const t = useTranslations("becomealeader");

  return (
    <div className="flex flex-col bg-primary ">
      <SectionHero
        title={t("sectionHero.title")}
        intro={t("sectionHero.intro")}
        button={{
          url: "https://www.scoutnet.se/register/in/group/764",
          content: t("button.content"),
          size: "large",
          redirect: "",
          type: "external",
        }}
      />
      <Image
        src="/images/030.jpg"
        height={1779}
        width={1152}
        loading="eager"
        alt="A group of members gathering in a forest"
        className=" py-9 lg:w-screen lg:max-h-120  object-cover object-[60%_75%] place-self-center rounded-2xl"
      />
      <section className="font-primary text-left text-white text-[18px] lg:text-[24px] leading-[31.5px] lg:leading-10.5 tracking-[0.18px] lg:tracking-[0.24px] px-4 lg:px-36.5">
        <p className="pb-6 whitespace-pre-line ">{t("description")}</p>
      </section>
    </div>
  );
};

export default BecomeALeader;
