import SectionHero from "@/components/SectionHero";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BecomeALeader = () => {
  const t = useTranslations("becomealeader");

  return (
    <div className="flex flex-col bg-primary pb-20">
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
        src="/images/member_background.JPEG"
        height={3000}
        width={1688}
        loading="eager"
        alt="A group of members gathering on a beach"
        className="w-screen lg:h-110 2xl:h-140 object-cover object-[center_60%] mb-8"
      />
      <section className="font-primary text-left text-white text-paragraph leading-[31.5px] lg:leading-10.5 tracking-[0.18px] lg:tracking-[0.24px] px-4 lg:px-36.5 2xl:px-64">
        <p className="pb-6 whitespace-pre-line ">{t("description")}</p>
      </section>
    </div>
  );
};

export default BecomeALeader;
