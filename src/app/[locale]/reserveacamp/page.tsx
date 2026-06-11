import Hero from "@/components/SectionHero";
import { useTranslations } from "next-intl";
import CabinBookingForm from "@/components/CabinBookingForm";
import CabinCard from "@/components/CabinCard";

const ReserveACamp = () => {
  const t = useTranslations("reserveacamp");

  return (
    <>
      <Hero title={t("hero.title")} intro={t("hero.intro")} />
      <section className="bg-white w-full lg:w-4/5 mx-auto text-primary">
        <CabinCard />
      </section>
        <CabinBookingForm />
    </>
  );
};

export default ReserveACamp;
