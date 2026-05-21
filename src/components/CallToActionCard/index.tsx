import Link from "next/link"
import Image from "next/image"

type CallToAction = {
  title: string
  subtitle: string
  description: string
  image: string
  link: string
}

type CallToActionProps = {
  item: CallToAction
}

const CallToActionCard = ({item}: CallToActionProps) => {
  return (
    <div className="flex flex-col max-w-9/10 mx-auto min-h-223.25 text-primary font-primary p-4 md:flex-row 
      md:max-w-387.25 md:h-186 md:mx-14.75 md:my-17 md:justify-center md:odd:flex-row-reverse"
    >
      <div className="flex flex-col min-h-109.5 md:flex-col md:w-163.25 md:h-162.5 md:mx-22.5">
        <h4 className="text-[24px] md:text-[36px]">{item.title}</h4>
        <h2 className="text-black text-[28px] md:text-[44px]">{item.subtitle}</h2>
        <p className="my-5 text-[18px] tracking-[1%] md:py-15.25 md:text-[24px]">{item.description}</p>
        <div className="flex justify-between items-center md:pb-17 text-[20px] md:text-[24px]">
          <p>PlaceHolder</p>
          <Link href="" className="flex items-center w-37 h-16.25">{item.link}</Link>
        </div>
      </div>
      <Image src={item.image} alt={item.title} width="400" height="300" 
        className="w-100 h-75 mx-auto object-cover rounded-lg mt-10 md:mx-22.25 md:w-150 md:h-137.5"
      />
    </div>
  )
}

export default CallToActionCard