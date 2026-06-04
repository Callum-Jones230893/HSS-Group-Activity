import { useTranslations } from "next-intl";
import Image from "next/image";

const ContactUsForm = () => {
  const t = useTranslations("contactus");
  return (
    <div className="bg-primary relative h-95">
      <Image
        src="/images/background_shell1.png"
        height={300}
        width={300}
        alt="seashell graphic background image"
        className="absolute -top-12 -left-12 rotate-135 opacity-35"
      />
      <div className='mx-auto max-w-100 '>
        <h2 className="text-secondary">{t("title")}</h2>
        <h3 className="text-white">{t("subtitle")}</h3>
      </div>
    </div>
  );
};

export default ContactUsForm;
