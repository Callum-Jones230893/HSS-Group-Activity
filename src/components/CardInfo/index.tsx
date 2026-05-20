import react from 'react'
import Link from 'next/link'

type CardInfoProps = {
    image: string,
   title: string,
   date: string,
   description: string,

}

const CardInfo = ({image, title, date, description}:CardInfoProps) => {
    return <>
    <div>
        <img>{image}</img>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{description}</p>
        {/* btn component */}
        {/* <Link>{Read more</Link> */}
    </div>
    </>
}

export default CardInfo