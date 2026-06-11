import { useTranslations } from "next-intl";
import Button from "../Button";

const CabinBookingForm = () => {
  const t = useTranslations("reserveacamp.form");

  return (
    <div className="bg-white relative font-primary px-4 py-8 md:px-30 xl:px-80 2xl:px-120 overflow-hidden">
      <h2 className="text-secondary text-[26px] md:text-[36px] xl:text-[44px]">{t("title")}</h2>
      <h3 className="text-primary text-[19px] md:text-[21px] xl:text-[28px]">{t("subtitle")}</h3>
      <div className="w-full pt-3 mx-auto">
        <form action="mailto:myset.hss.scout@gmail.com" method="POST" encType="text/plain" className="text-primary">
          <fieldset>
            <div className="flex flex-col mb-8">
              <label htmlFor="name">{t("fieldOne")}*</label>
              <input
                type="text"
                name="Name"
                id="name"
                required
                className="border-b my-1 p-1 bg-transparent text-primary outline-none"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="email">{t("fieldTwo")}*</label>
              <input
                type="email"
                name="Email"
                id="email"
                required
                className="border-b my-1 p-1 text-primary outline-none"
              />
            </div>
            <div className='flex w-full gap-4'>
              <div className="flex flex-col mb-8 w-1/2">
                <label htmlFor="date">{t("inDate")}*</label>
                <input
                  type="date"
                  name="Check-in Date"
                  id="indate"
                  required
                  className="border-b my-1 p-1 bg-transparent text-primary outline-none"
                />
              </div>
              <div className="flex flex-col mb-8 w-1/2">
                <label htmlFor="date">{t("outDate")}*</label>
                <input
                  type="date"
                  name="Check-out Date"
                  id="outdate"
                  required
                  className="border-b my-1 p-1 bg-transparent text-primary outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col mb-8 my-1">
              <label htmlFor="message">{t("fieldThree")}</label>
              <textarea
                name="Message"
                id="message"
                className="border-b h-10 overflow-y-auto resize-none p-1 text-primary outline-none"></textarea>
            </div>
            <Button content={t("button")} size="large" type="submit" redirect="" url="" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CabinBookingForm;
