import Hero from "@/components/SectionHero"
import { useTranslations } from "next-intl"

const Safety = () => {
const t = useTranslations("safetyguidelines")
  return (
    <>
    <Hero
        title={t("title")}
        intro={`${t("descriptionOne")}  ${t("descriptionTwo")}`}
        image="/images/028.jpg"
      />
    </>
  )
}

export default Safety