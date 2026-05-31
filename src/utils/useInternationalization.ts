import { useRouter } from "next/router"

export type Langauges = {
  welcome: string;
  country: string;
}

const languages: Record<string, Langauges> = {
  sv: require('../locales/sv/common.json'),
  en: require('../locales/en/common.json'),
}

export const useLanguages = () => {
  const {locale} = useRouter()
  return languages[locale || 'sv']
}