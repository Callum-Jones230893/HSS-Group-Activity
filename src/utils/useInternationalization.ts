import { useRouter } from "next/router"
import sv from "../locales/sv/common.json"

export type Languages = typeof sv

const languages: Record<string, Languages> = {
  sv: require('../locales/sv/common.json'),
  en: require('../locales/en/common.json'),
}

export const useLanguages = () => {
  const {locale} = useRouter()
  return languages[locale || 'sv']
}