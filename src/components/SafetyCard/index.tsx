import Image from "next/image";
import { useTranslations } from "next-intl";
import { safetyData, SafetyItems } from "@/data/safety";

type SafetyCardProps = {
  item: SafetyItems;
};

const SafetyCard = ({ item }: SafetyCardProps) => {
  const t = useTranslations("safetyguidelines");

  return (
    <section className="w-full font-primary py-10 lg:py-20  ">
      <div className="max-w-432 mx-auto px-6 lg:px-20   ">
        <div className="flex flex-col gap-7.5 max-w-341.25 mx-auto px-6 py-9 ">
          {safetyData.map((item) => (
            <div
              key={item.id}
              className="bg-[#fff] rounded-2xl py-9 px-6 flex flex-col sm:flex-row gap-4 items-center justify-between w-full"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-11.5 flex-1 w-full">
                <Image
                  src={item.image}
                  alt={t(`${item.id}.title`)}
                  width={230}
                  height={230}
                  className="size-56 object-contain "
                />

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-primary font-extralight text-3xl lg:text-[24px] mb-9">
                    {t(`${item.id}.title`)}
                  </h3>
                  <p className="mb-9 whitespace-pre-line text-[16px] leading-relaxed font-light lg:text-[18px] text-gray-600">
                    {t(`${item.id}.description`)}
                  </p>

                  {item.pdfPath && (
                    <a
                      href={item.pdfPath}
                      download
                      className="inline-flex items-center gap-2 text-amber-500 font-medium text-[14px] lg:text-[16px] hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      <span>{t(`${item.id}.link`)}</span>
                    </a>
                  )}
                </div>
              </div>
              {item.pdfPath && (
                <div className="flex sm:flex-col gap-3 shrink-0 mt-4 sm:mt-0  pt-0 w-full sm:w-auto justify-center">
                  <a
                    href={item.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl text-primary hover:bg-primary/10 transition-colors duration-200"
                    title="Visa PDF"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 lg:w-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyCard;
