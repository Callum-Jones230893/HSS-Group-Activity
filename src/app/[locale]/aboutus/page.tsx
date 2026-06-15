import { useTranslations } from "next-intl";
import AboutSection from "@/components/AboutSection";
import Button from "@/components/Button";

const About = () => {
  const t = useTranslations("aboutus");

  return (
    <>
      <AboutSection />
      <section className="w-full flex flex-col items-center justify-center max-w-432.5 mx-auto bg-white pb-10 px-4 lg:px-20 xl:px-37.75 font-primary overflow-none">
<<<<<<< HEAD
        <h1 className="text-3xl text-primary font-primary pb-4 text-center">
          {t("linkTitle")}
        </h1>
        <Button
          content={t("button")}
          size="large"
          type="redirect"
          url=""
          redirect="/becomeascout"
        />
=======
        <h1 className="text-title text-primary font-primary pb-4 text-center">{t("linkTitle")}</h1>
        <Button content={t("button")} size="large" type="redirect" url="" redirect="/becomeascout" />
>>>>>>> cabad0fc261f749cc88fadbd9eb415ea4c273dd2
      </section>
    </>
  );
};
export default About;
