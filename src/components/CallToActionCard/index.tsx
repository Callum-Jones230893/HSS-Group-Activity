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
    <div className="flex flex-col w-107.5 mh-223.25">
      <div className="flex flex-col w-99.5 mh-109.5">
        <h4>{item.title}</h4>
        <h2>{item.subtitle}</h2>
        <p className="my-5">{item.description}</p>
        <div className="flex">
          {/* <Button /> */}
          <Link href="">{item.link}</Link>
        </div>
      </div>
      <Image src="" alt="" />
    </div>
  )
}

export default CallToActionCard