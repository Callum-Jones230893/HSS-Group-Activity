import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { DepartmentItemType } from "@/data/department";
import { useTranslations } from "next-intl";

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
                <h2 className="text-primary font-extralight text-[20px] lg:text-[24px]">
                  {t(`${item.id}.title`)}
                </h2>
                <p
                  className={`font-extralight text-[20px] lg:text-[24px] ${item.text}`}
                >
                  {t(`${item.id}.subtitle`)}
                </p>
              </div>
              <p className="mb-4 whitespace-pre-line text-[18px] leading-relaxed font-light lg:text-[24px]">
                {t(`${item.id}.fullDescription`)}
              </p>
              <div className="bg-primary/5 text-primary rounded-2xl p-6 mb-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs mb-1">{tFacts("age")}</p>
                  <p className="text-sm font-medium">{t(`${item.id}.age`)}</p>
                </div>
                 <div>
                  <p className="text-xs mb-1">{tFacts("meetings")}</p>
                  <p className="text-sm font-medium">{t(`${item.id}.meetings`)}</p>
                </div>
                 <div>
                  <p className="text-xs mb-1">{tFacts("place")}</p>
                  <p className="text-sm font-medium">{t(`${item.id}.location`)}</p>
                </div>
                 <div>
                  <p className="text-xs mb-1">{tFacts("learn")}</p>
                  <p className="text-sm font-medium">{t(`${item.id}.learn`)}</p>
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
