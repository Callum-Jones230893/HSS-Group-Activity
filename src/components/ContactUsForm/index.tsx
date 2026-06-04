import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../Button";

const ContactUsForm = () => {
  const t = useTranslations("contactus");
  return (
    <div className="bg-primary relative font-primary border py-8">
      <Image
        src="/images/background_shell1.png"
        height={300}
        width={300}
        alt="seashell graphic background image"
        className="absolute -top-12 -left-12 rotate-135 opacity-35"
      />
      <div className="mx-auto w-357">
        <h2 className="text-secondary text-[53px]">{t("title")}</h2>
        <h3 className="text-white text-[36px]">{t("subtitle")}</h3>
        <div className="w-1/2 py-10 mx-auto">
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
              <Button content={t("button")} size="large" type="mail" redirect="" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
