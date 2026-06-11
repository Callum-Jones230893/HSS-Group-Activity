import Image from "next/image";
import Hero from "@/components/SectionHero";
import { useTranslations } from "next-intl";
import CabinBookingForm from '@/components/CabinBookingForm';

const ReserveACamp = () => {
  const t = useTranslations("reserveacamp");

  return (
    <>
      <Hero
        title={t("hero.title")}
        intro={t("hero.intro")}
      />
      <section className="bg-white w-full md:pb-10 lg:w-4/5 mx-auto text-primary">
        <article className="flex flex-col lg:flex-row w-full p-4 md:p-8 gap-2 lg:gap-10">
          <div className="w-full lg:w-[55%]">
            <Image
              src="/images/016.png"
              alt="A few scout members walking in front of a Myset"
              height={450}
              width={576}
              className="w-full md:w-[90%] lg:w-full h-auto mx-auto rounded-xl"
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
      <CabinBookingForm />
      </section>
    </>
  );
};

export default ReserveACamp;
