import { useTranslations } from "next-intl";
import Button from "../Button";

const ContactUsForm = () => {
  const t = useTranslations("contactus");

  return (
    <section className="mx-auto w-full p-6 relative z-10">
      <h2 className="text-secondary text-[32px] lg:text-[53px]">
        {t("title")}
      </h2>
      <h3 className="text-white text-[22px] md:text-[32px] mb-5">
        {t("subtitle")}
      </h3>
      <div className="w-full mx-auto">
        <form
          action="mailto:info@hss-scout.org"
          method="POST"
          encType="text/plain"
          className="text-white"
        >
          <fieldset>
            <div className="flex flex-col mb-8">
              <label htmlFor="name">{t("fieldOne")}*</label>
              <input
                type="text"
                name="Name"
                id="name"
                required
                className="border-b my-1 p-1 bg-transparent text-white outline-none"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="email">{t("fieldTwo")}*</label>
              <input
                type="email"
                name="Email"
                id="email"
                required
                className="border-b my-1 p-1 text-white outline-none"
              />
            </div>
            <div className="flex flex-col mb-8 my-1">
              <label htmlFor="message">{t("fieldThree")}*</label>
              <textarea
                name="Message"
                id="message"
                required
                className="border-b h-25 overflow-y-auto resize-none p-1 text-white outline-none"
              ></textarea>
            </div>
            <Button
              content={t("button")}
              size="large"
              type="submit"
              redirect=""
              url=""
            />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
