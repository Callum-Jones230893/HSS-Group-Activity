import Hero from "@/components/SectionHero";
import { useTranslations } from "next-intl";
import SafetyCard from "@/components/SafetyCard";

const Safety = () => {
  const t = useTranslations("safetyguidelines");
  return (
    <>
      <Hero
        title={t("title")}
        intro={`${t("descriptionOne")}  ${t("descriptionTwo")}`}
        image="/images/028.jpg"
      />
      <SafetyCard item={{ id: "", image: "", pdfPath: "" }} />
    </>
  );
};

export default Safety;
