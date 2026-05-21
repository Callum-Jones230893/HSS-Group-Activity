import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"

type CallToAction = {
  title: string
  subtitle: string
  description: string
  image: string
  button: string
  link: string
}

type CallToActionProps = {
  item: CallToAction
}

const CallToActionCard = ({item}: CallToActionProps) => {
  return (
    <div className="flex flex-col max-w-9/10 mx-auto h-fit text-primary font-primary p-4 odd: lg:mb-10 xl:flex-row 
      xl:max-w-387.25 xl:h-186 xl:mx-14.75 xl:my-10 lg:justify-center lg:item-center xl:even:flex-row-reverse"
    >
      <div className="flex flex-col justify-between min-h-109.5 md:flex-col xl:w-163.25 lg:justify-evenly lg:h-162.5 lg:mx-22.5">
        <h4 className="text-[24px] font-semibold lg:text-[36px]">{item.title}</h4>
        <h2 className="text-black text-[28px] lg:text-[44px]">{item.subtitle}</h2>
        <p className="my-5 text-[18px] tracking-[1%] lg:py-15.25 lg:text-[24px]">{item.description}</p>
        <div className="flex justify-between items-center md:pb-17 text-[20px] lg:text-[24px]">
          <Button content={item.button} theme="yellow" size="large" />
          <div>
            <Link href="" className="w-37 h-16.25">{item.link}</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 mx-auto lg:mt-15 lg:mx-auto md:w-150 md:h-137.5">
        <Image src={item.image} alt={item.title} width="400" height="300" 
          className="w-100 h-75 mx-auto object-cover rounded-lg md:w-full md:h-full"
        />
      </div>
    </div>
  )
}

export default CallToActionCard