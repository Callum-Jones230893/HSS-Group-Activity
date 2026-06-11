import Image from "next/image";
import Hero from "@/components/SectionHero";
import { useTranslations } from "next-intl";

const ReserveACamp = () => {
  const t = useTranslations("reserveacamp");

  return (
    <>
      <Hero
        title="Hajkstugan Myset"
        intro="Vi hyr gärna ut stugan till scoutkårer, skolklasser och andra grupper som vill prova på nya omgivningar."
      />
      <section className="bg-white w-full lg:w-4/5 mx-auto text-primary">
        <article className="flex flex-col lg:flex-row w-full p-4 md:p-8 gap-2 :py-8 lg:gap-10">
          <div className="w-full lg:w-[55%]">
            <Image
              src="/images/016.png"
              alt="A few scout members walking in front of a Myset"
              height={450}
              width={576}
              className="w-full md:w-2/3 lg:w-full h-auto mx-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[45%]">
            <h2 className="text-[24px] lg:text-[36px] 2xl:text-[40px]">{t("title")}</h2>
            <p className="text-[16px] lg:text-[18px] 2xl:text-[22px] leading-relaxed">{t("description")}</p>
            <div className="text-[16px] lg:text-[18px] 2xl:text-[22px] leading-relaxed">
              <h5>{t("subtitle")}:</h5>
              <p>{t("locationDescription")}</p>
              <p>{t("coordinates")}</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default ReserveACamp;
