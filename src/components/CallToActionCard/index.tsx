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
    <div className="flex flex-col max-w-9/10 mx-auto min-h-223.25 text-primary font-primary p-4 lg:flex-row 
      lg:max-w-387.25 lg:h-186 lg:mx-14.75 lg:my-17 lg:justify-center lg:odd:flex-row-reverse"
    >
      <div className="flex flex-col min-h-109.5 md:flex-col lg:w-163.25 lg:h-162.5 lg:mx-22.5">
        <h4 className="text-[24px] font-semibold md:text-[36px]">{item.title}</h4>
        <h2 className="text-black text-[28px] md:text-[44px]">{item.subtitle}</h2>
        <p className="my-5 text-[18px] tracking-[1%] lg:py-15.25 md:text-[24px]">{item.description}</p>
        <div className="flex justify-between items-center md:pb-17 text-[20px] md:text-[24px]">
          <Button></Button>
          <Link href="" className="flex items-center w-37 h-16.25">{item.link}</Link>
        </div>
      </div>
      <Image src={item.image} alt={item.title} width="400" height="300" 
        className="w-100 h-75 mx-auto object-cover rounded-lg mt-10 lg:mx-22.25 md:w-150 md:h-137.5"
      />
    </div>
  )
}

export default CallToActionCard