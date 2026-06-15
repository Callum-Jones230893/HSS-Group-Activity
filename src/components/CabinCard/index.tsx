import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "../Button";

const CabinCard = () => {
  const t = useTranslations("reserveacamp");

  return (
    <article className="flex flex-col lg:flex-row w-full p-4 md:p-8 gap-2 lg:gap-10">
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/016.png"
          alt="A few scout members walking in front of a Myset"
          height={450}
          width={576}
          className="w-full md:w-[90%] lg:w-full h-auto mx-auto rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3 w-full lg:w-1/2 pb-4">
        <h2 className="text-[24px] lg:text-[36px] 2xl:text-[40px]">
          {t("title")}
        </h2>
        <p className="text-[16px] lg:text-[18px] 2xl:text-[22px] leading-relaxed whitespace-pre-line">
          {t("description")}
        </p>
        <div className="text-[16px] lg:text-[18px] 2xl:text-[22px] leading-relaxed mb-4">
          <h5 className="font-bold">{t("subtitle")}:</h5>
          <p>{t("locationDescription")}</p>
          <p>{t("coordinates")}</p>
        </div>
        <Button
          content={t("button")}
          size="large"
          type="external"
          redirect=""
          url="/pdf/mysetplanlosning.pdf"
        />
      </div>
    </article>
  );
};

export default CabinCard;
