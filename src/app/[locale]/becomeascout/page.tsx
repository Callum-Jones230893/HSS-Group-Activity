import DepartmentSelection from "@/components/DepartmentSelection"
import Hero from "@/components/SectionHero"
import { useTranslations } from "next-intl"

const BecomeAScout = () => {
  const t = useTranslations("DepartmentHero")
  const tNav = useTranslations("navbar")
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
          url: "https://www.scoutnet.se/register/in/group/764",
        }}
      />
    <DepartmentSelection />
    </>
  )
}

export default BecomeAScout