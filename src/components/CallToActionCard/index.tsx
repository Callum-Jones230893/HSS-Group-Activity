import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"

type CallToAction = {
  title: string
  subtitle: string
  description: string
  image: string
  button: string
  readMore: string
}

type CallToActionProps = {
  item: CallToAction
}

const CallToActionCard = ({item}: CallToActionProps) => {
  return (
    <div className="flex flex-col max-w-9/10 mx-auto h-fit text-primary font-primary p-2 lg:mb-10 xl:flex-row 
        xl:mx-14.75 xl:mt-5 lg:justify-center xl:even:flex-row-reverse xl:gap-28"
    >
      <div className="flex flex-col min-h-0 xl:w-163.25 gap-4">
        <div className="flex flex-col">
          <h4 className="text-[24px] font-semibold lg:text-[36px]">{item.title}</h4>
          <h2 className="text-black text-[28px] lg:text-[44px]">{item.subtitle}</h2>
        </div>
        <p className=" text-[18px] tracking-[1%] lg:py-15.25 lg:text-[24px]">{item.description}</p>
        <div className="flex gap-10 items-center md:pb-3 text-[16px] lg:text-[18px]">
          <Button content={item.button} theme="yellow" size="large" />
          <div>
            <Link href="" className="w-37 h-16.25">{item.readMore}</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto mt-10 lg:my-auto lg:mx-auto w-full lg:w-7/10 xl:w-4/10 lg:min-w-150 max-w-150 aspect-4/3">
        <Image src={item.image} alt={item.title} width="400" height="300" 
          className="w-full max-h-137.5 xl:h-137.5 object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default CallToActionCard