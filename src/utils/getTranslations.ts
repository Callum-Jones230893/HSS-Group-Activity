import en from "../locales/en/common.json";
import sv from "../locales/sv/common.json";

export function getTranslations(locale: string) {
  return locale === "sv" ? sv : en;
}