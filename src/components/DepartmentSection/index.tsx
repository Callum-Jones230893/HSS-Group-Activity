import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { DepartmentItemType } from "@/data/department";
import { useTranslations } from "next-intl";
import { 
  UserIcon,
  CalendarDaysIcon,
  MapPinIcon,
  LightBulbIcon,
} from "@heroicons/react/16/solid";

type DepartmentItemProps = {
  item: DepartmentItemType;
};

const DepartmentSection = ({ item }: DepartmentItemProps) => {
  const t = useTranslations("departments");
  const tBack = useTranslations();
  const tFacts = useTranslations("departmentFacts");

  return (
    <section className="w-full font-primary">
      <div className="bg-primary/5">
        <div className="max-w-432 mx-auto px-6 lg:px-20 py-6 lg:py-20">
          <div className="bg-[#fff] rounded-2xl py-4 px-6 flex flex-col lg:flex-row gap-2 lg:gap-4 max-w-347.75 mx-auto">
            <Image
              src={item.image}
              alt={t(`${item.id}.title`)}
              width={244}
              height={244}
              className="w-29.5 h-29.5 lg:h-56 lg:w-56"
            />

            <div className="flex-1 flex flex-col lg:max-w-225">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="font-extralight text-subtitle text-sky-900">
                  {t(`${item.id}.title`)}
                </h2>
                <p className={`font-bold text-paragraph ${item.text}`}>
                  {t(`${item.id}.subtitle`)}
                </p>
              </div>
              <p className="mb-4 whitespace-pre-line text-paragraph leading-relaxed">
                {t(`${item.id}.fullDescription`)}
              </p>
              <div className="bg-primary/5 text-primary rounded-2xl p-6 mb-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col md:text-center md:items-center">
                  <UserIcon className={`size-6 mb-1 ${item.text}`} />
                  <p className="text-[12px] mb-1 font-medium">
                    {tFacts("age")}
                  </p>
                  <p className="text-paragraph font-medium">
                    {t(`${item.id}.age`)}
                  </p>
                </div>
                <div className="flex flex-col md:text-center md:items-center">
                  <CalendarDaysIcon className={`size-6 mb-1 ${item.text}`} />
                  <p className="text-[12px] mb-1 font-medium">
                    {tFacts("meetings")}
                  </p>
                  <p className="text-paragraph font-medium">
                    {t(`${item.id}.meetings`)}
                  </p>
                </div>
                <div className="flex flex-col md:text-center md:items-center">
                  <MapPinIcon className={`size-6 mb-1 ${item.text}`} />
                  <p className="text-[12px] mb-1 font-medium">
                    {tFacts("place")}
                  </p>
                  <p className="text-paragraph font-medium">
                    {t(`${item.id}.location`)}
                  </p>
                </div>
                <div className="flex flex-col md:text-center md:items-center">
                  <LightBulbIcon className={`size-6 mb-1 ${item.text}`} />
                  <p className="text-[12px] mb-1 font-medium">
                    {tFacts("learn")}
                  </p>
                  <p className="text-paragraph font-medium">
                    {t(`${item.id}.learn`)}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <Link
                  href="/becomeascout"
                  className={`inline-flex rounded-2xl px-3 py-2 gap-2 text-white ${item.bg} lg:hover:scale-110 duration-300 ease-in-out`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{tBack("back")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
