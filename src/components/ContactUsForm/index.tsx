import { useTranslations } from 'next-intl'
import Image from "next/image";

const ContactUsForm = () => {
  const t = useTranslations("contactus")
  return (
    <div className="bg-primary relative">
      <Image src="/images/background_shell1.png" height={300} width={300} alt="seashell graphic background image" className='absolute -top-12 -left-12 rotate-135 opacity-35' />
      <h2 className='text-secondary'>{t("title")}</h2>
      <h3 className='text-white'></h3>
    </div>
  )
}

export default ContactUsForm