import Image from "next/image"
import type { DepartmentItemType } from "@/data/department"

type DepartmentItemProps = {
  item: DepartmentItemType
}

const DepartmentCards = ({item}: DepartmentItemProps) => {

  return (
    <div className={`xl:flex flex-col xl:flex-row items-center rounded-lg xl:rounded-2xl lg:border-l-[3px] 
      lg:border-r-[0.50px] lg:border-t-[0.50px] lg:border-b-[3px] ${item.border} mb-21.75 font-primary text-lg xl:text-2xl p-8
      outline-[0.50px] outline-offset-[-0.50px] ${item.outline} inline-flex`}
    >
      <div className="flex min-w-7/10 xl:min-w-[20%]">
        <Image src={item.image} width="400" height="400" alt={item.title} loading="eager" className="size-28.5 xl:size-60 rounded-2xl"/>
      </div>
      <div className="flex flex-col my-3 xl:mx-11.5 justify-evenly">
        <div className="flex items-center gap-1.5">
          <h3 className="font-extralight text-2xl xl:text-3xl text-sky-900">{item.title}</h3>
          <p className={`font-bold text-1xl ${item.text}`}>{item.subtitle}</p>
        </div>
        <div className="flex justify-start pt-4.5 xl:pr-20 font-light text-slate-900 self-stretch leading-8 xl:leading-10 tracking-tight">
          <p>{item.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-1/10">
        <p className="pt-4">hello</p>
      </div>
    </div>
  )
}

export default DepartmentCards