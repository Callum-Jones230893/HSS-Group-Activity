import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"
import { useTranslations } from "next-intl"
import { CallToAction } from "@/data/intro"

type CallToActionProps = {
  item: CallToAction
}

const CallToActionCard = ({item}: CallToActionProps) => {
  const t = useTranslations('home')
  
  return (
    <div className="flex flex-col max-w-9/10 mx-auto h-fit text-primary font-primary p-2 lg:mb-10 xl:flex-row 
        xl:mx-14.75 xl:mt-5 lg:justify-center xl:even:flex-row-reverse xl:gap-28"
    >
      <div className="flex flex-col min-h-0 xl:w-163.25 gap-4">
        <h4 className="text-[24px] font-semibold lg:text-[36px]">{t(`${item.id}.title`)}</h4>
        <h2 className="text-black text-[28px] lg:text-[44px]">{t(`${item.id}.subtitle`)}</h2>
        <p className=" text-[18px] tracking-[1%] lg:py-15.25 lg:text-[24px]">{t(`${item.id}.description`)}</p>
        <div className="flex gap-10 items-center md:pb-3 text-[16px] lg:text-[18px]">
          <Button content={t(`${item.id}.button`)} size="large" redirect={item.redirect} type="" url="" />
          <div>
            <Link href="" className="w-37 h-16.25">{t(`${item.id}.readMore`)}</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto mt-10 lg:my-auto w-full lg:w-7/10 xl:w-4/10 lg:min-w-150 max-w-150 aspect-square">
        <Image src={item.image} alt={t(`${item.id}.title`)} width="400" height="300" 
          className="w-full max-h-137.5 xl:h-137.5 object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default CallToActionCard