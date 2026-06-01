import Image from "next/image"
import { DepartmentItemType } from "@/data/department"
import { useTranslations } from "next-intl"

type DepartmentItemProps = {
  item: DepartmentItemType
}

const DepartmentCards = ({item}: DepartmentItemProps) => {
  const t = useTranslations('departments')

  return (
    <div className={`item-start xl:flex flex-col xl:flex-row xl:items-center rounded-lg xl:rounded-2xl lg:border-l-[3px] 
      lg:border-r-[0.50px] lg:border-t-[0.50px] lg:border-b-[3px] ${item.border} mb-21.75 font-primary text-lg xl:text-2xl p-8
      outline-[0.50px] outline-offset-[-0.50px] ${item.outline} inline-flex shadow-none transition duration-300 
      hover:shadow-sm ${item.shadow} hover:scale-102 cursor-pointer bg-[#ffffff]`}
    >
      <div className="flex min-w-7/10 xl:min-w-[20%]">
        <Image src={item.image} width="400" height="400" alt={item.title} loading="eager" className="size-28.5 xl:size-60 rounded-2xl overflow-hidden"/>
      </div>
      <div className="flex flex-col my-3 xl:mx-11.5 justify-evenly">
        <div className="flex items-center gap-1.5">
          <h3 className="font-extralight text-2xl xl:text-3xl text-sky-900">{t(`${item.id}.title`)}</h3>
          <p className={`font-bold text-1xl ${item.text}`}>{t(`${item.id}.subtitle`)}</p>
        </div>
        <div className="flex justify-start pt-4.5 xl:pr-20 font-light text-slate-900 self-stretch leading-8 xl:leading-10 tracking-tight">
          <p>{t(`${item.id}.description`)}</p>
        </div>
      </div>
    </div>
  )
}

export default DepartmentCards