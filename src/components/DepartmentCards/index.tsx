import Image from "next/image"

type DepartmentItem = {
  title: string
  subtitle: string
  description: string
  image: string
}

type DepartmentItemProps = {
  item: DepartmentItem
}

const DepartmentCards = ({item}: DepartmentItemProps) => {
  return (
    <div className="lg:flex flex-col lg:flex-row items-center rounded-lg lg:rounded-2xl lg:border-l-[3px] 
      lg:border-r-[0.50px] lg:border-t-[0.50px] lg:border-b-[3px] lg:border-lime-600/50 mb-21.75 font-primary text-lg lg:text-2xl p-8
      outline-[0.50px] outline-offset-[-0.50px] outline-lime-600/50 inline-flex"
    >
      <div className="flex w-7/10 lg:min-w-3/10">
        <Image src={item.image} width="400" height="400" alt={item.title} className="size-28.5 lg:size-60 rounded-2xl"/>
      </div>
      <div className="flex flex-col my-3 lg:mx-11.5">
        <div className="flex items-center gap-1.5">
          <h3 className="font-extralight text-2xl lg:text-3xl text-sky-900">{item.title}</h3>
          <p className="font-bold text-1xl">{item.subtitle}</p>
        </div>
        <div className="flex justify-start lg:pt-4.5 lg:pr-20 font-light text-slate-900 self-stretch leading-8 lg:leading-10 tracking-tight">
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