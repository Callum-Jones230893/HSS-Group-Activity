import Image from "next/image"
import { useTranslations } from "next-intl"
import { HistoryType } from "@/data/history"

type HistoryItemProps = {
  item: HistoryType
  first?: boolean
}

const HistoryCards = ({item, first}: HistoryItemProps) => {
  const t = useTranslations('history')

  return (
    <div className="flex flex-col xl:flex-row 2xl:w-8/10 mx-auto xl:gap-28 font-primary justify-between py-8">
      <div className="flex flex-col md:mx-10 lg:mx-25 xl:w-5/10 text-[18px] md:text-[24px] text-primary tracking-[1%] leading-[175%] gap-4.5 my-5">
        <h2 className="text-[20px] md:text-[36px] text-black">{t(`${item.id}.date`)}</h2>
        <h1 className="text-[24px] md:text-[44px] font-light">{t(`${item.id}.title`)}</h1>
        <p>{t(`${item.id}.description`)}</p>
        <p>{t(`${item.id}.descriptionTwo`)}</p>
      </div>
      <div className="flex justify-center items-center my-5">
        <Image src={item.image} width="400" height="400" alt={t(`${item.id}.title`)} loading="eager" 
          className={first ? "w-75 aspect-square" : "w-150 aspect-3/2"}
        />
      </div>
    </div>
  )
}

export default HistoryCards