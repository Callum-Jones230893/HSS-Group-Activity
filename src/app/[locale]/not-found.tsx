import { useTranslations } from "next-intl";
import Button from "@/components/Button";

const NotFound = () => {
  const t = useTranslations("404");

  return (
    <div className="flex flex-col justify-center items-center max-w-9/10 mx-auto my-20 gap-2 text-primary">
      <svg viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-30 h-30">
        <rect width="139" height="139" rx="69.5" fill="white" />
        <rect x="19" y="19" width="102" height="102" rx="51" fill="#003660" />
        <path
          d="M72 103C64.9 103 58.875 100.525 53.925 95.575C48.975 90.625 46.5 84.6 46.5 77.5V49C46.5 48.15 46.7875 47.4375 47.3625 46.8625C47.9375 46.2875 48.65 46 49.5 46C50.35 46 51.0625 46.2875 51.6375 46.8625C52.2125 47.4375 52.5 48.15 52.5 49V67H58.5V43C58.5 42.15 58.7875 41.4375 59.3625 40.8625C59.9375 40.2875 60.65 40 61.5 40C62.35 40 63.0625 40.2875 63.6375 40.8625C64.2125 41.4375 64.5 42.15 64.5 43V67H70.5V40C70.5 39.15 70.7875 38.4375 71.3625 37.8625C71.9375 37.2875 72.65 37 73.5 37C74.35 37 75.0625 37.2875 75.6375 37.8625C76.2125 38.4375 76.5 39.15 76.5 40V67H82.5V46C82.5 45.15 82.7875 44.4375 83.3625 43.8625C83.9375 43.2875 84.65 43 85.5 43C86.35 43 87.0625 43.2875 87.6375 43.8625C88.2125 44.4375 88.5 45.15 88.5 46V63.25C87.05 64.3 85.9375 65.625 85.1625 67.225C84.3875 68.825 84 70.5 84 72.25V76H80.25C77.1 76 74.4375 77.0875 72.2625 79.2625C70.0875 81.4375 69 84.1 69 87.25V91H73.5V87.25C73.5 85.35 74.15 83.75 75.45 82.45C76.75 81.15 78.35 80.5 80.25 80.5H88.5V72.25C88.5 70.35 89.15 68.75 90.45 67.45C91.75 66.15 93.35 65.5 95.25 65.5H97.5V77.5C97.5 84.6 95.025 90.625 90.075 95.575C85.125 100.525 79.1 103 72 103Z"
          fill="#FDB714"
        />
      </svg>
      <h2 className="font-secondary text-center text-4xl mb-8">{t("title")}</h2>
      <p className="text-[20px] text-center mb-8 whitespace-pre-line">{t("subtitle")}</p>
      <Button content={t("button")} size="large" type="redirect" redirect="/" url="" />
    </div>
  );
};

export default NotFound;
