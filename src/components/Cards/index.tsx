import CardInfo from "../CardInfo";
import { instagramApi } from "@/utils/instagramFetch";
import { getTranslations } from "next-intl/server";

const Cards = async () => {
  const feed = await instagramApi();
  const t = await getTranslations("cards");

  return (
    <div className="flex justify-center">
      <section className="items-center xl:w-357  lg:mx-20 font-primary bg-[#0036600F] px-8 py-10.5 mx-3.5 rounded-lg  place-items-center xl:mx-37.5">
        <h2 className=" text-primary lg:text-[36px] md:text-[32px] text-[28px] text-center pb-9.5 lg:pb-10.5">
          {t("title")}
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7">
          {feed.slice(0, 3).map((item, index) => (
            <CardInfo key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
