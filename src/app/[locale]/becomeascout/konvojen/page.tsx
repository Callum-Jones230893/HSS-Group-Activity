import Hero from "@/components/SectionHero";
import DepartmentSection from "@/components/DepartmentSection";
import { DepartmentData } from "@/data/department";
import { useTranslations } from "next-intl";

const Konvojen = () => {
  const t = useTranslations("DepartmentHero");
  const tNav = useTranslations("navbar");
  return (
    <>
      <Hero
        title="Hässelby Strands Sjöscoutkår"
        intro={t("intro")}
        image="/images/005.jpg"
        button={{
          content: tNav("becomeascout"),
          size: "large",
          redirect: "/becomeascout",
          type: "external",
        }}
      />
    <DepartmentSection item={DepartmentData[2]} />
    </>
  )
}

export default Konvojen