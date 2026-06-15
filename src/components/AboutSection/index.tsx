import Image from "next/image";
import { useTranslations } from "next-intl";
import { AboutDataType, AboutSectionData } from "@/data/about";

type AboutSectionProps = {
  item?: AboutDataType;
};

const AboutSection = ({ item = AboutSectionData }: AboutSectionProps) => {
  const t = useTranslations();

  return (
    <section className="w-full max-w-432.5 mx-auto bg-white lg:bg-white py-10 lg:py-18.5 px-4 lg:px-20 xl:px-37.75 mt-3.75 justify-start items-start font-primary overflow-none">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-2 lg:mb-4 lg:items-stretch justify-center items-center ">
        <div className="w-full lg:w-[45%] aspect-3/4 lg:aspect-auto lg:self-stretch relative rounded-lg overflow-none">
          <Image
            src={item.image}
            alt={t(`${item.id}.title`)}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover object-center rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center  max-w-187.5">
          <p className=" text-primary text-title font-normal">
            {t(`${item.id}.title`)}
          </p>

          <div className=" text-primary text-paragraph tracking-[1%] pb-9">
            <p>{t(`${item.id}.descriptionOne`)}</p>
            <p>{t(`${item.id}.descriptionTwo`)}</p>
          </div>

          <div className="w-full max-w-187.5 p-6 bg-secondary/24 rounded-2xl flex flex-col justify-center  items-start ">
            <p className=" text-primary text-paragraph tracking-[1%] ">
              {t(`${item.id}.descriptionThree`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
