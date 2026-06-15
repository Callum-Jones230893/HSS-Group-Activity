import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const currentLocale =
    locale && hasLocale(routing.locales, locale)
      ? locale
      : routing.defaultLocale;

  return {
    locale: currentLocale,
    messages: (await import(`../translations/${currentLocale}.json`)).default,
  };
});
