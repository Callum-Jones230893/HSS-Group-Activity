import { useTranslations } from "next-intl";
import Button from "../Button";

const ContactUsForm = () => {
  const t = useTranslations("contactus");
  return (
    <div className="font-primary mx-auto w-full p-6 relative z-10">
      <h2 className="text-secondary text-[44px] md:text-[53px]">{t("title")}</h2>
      <h3 className="text-white text-[22px] md:text-[32px]">{t("subtitle")}</h3>
      <div className="w-full pt-10 mx-auto">
        <form action="mailto:" method="POST" encType="text/plain" className="text-white">
          <fieldset>
            <div className="flex flex-col mb-8">
              <label htmlFor="name">{t("fieldOne")}*</label>
              <input type="text" name="name" id="name" required className="border-b my-1 p-1" />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="email">{t("fieldTwo")}*</label>
              <input type="email" name="email" id="email" required className="border-b my-1 p-1" />
            </div>
            <div className="flex flex-col mb-8 my-1">
              <label htmlFor="message">{t("fieldThree")}*</label>
              <textarea
                name="message"
                id="message"
                required
                className="border-b h-25 overflow-y-auto resize-none p-1"></textarea>
            </div>
            <Button content={t("button")} size="large" type="mail" redirect="" url="" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
