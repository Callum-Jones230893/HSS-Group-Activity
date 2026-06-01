import BecomeALeaderData from "../../data/becomeleader";
import Button from '@/components/Button'
import Image from 'next/image'

const BecomeALeader = () => {
  const data = BecomeALeaderData;
  return (
    <div className="flex flex-col bg-primary ">
      <div className="flex flex-start flex-col px-4  lg:px-36.5 lg:py-12">
        <h2 className="text-white font-primary text-[32px] lg:text-[53px] pt-6">{data.title}</h2>
        <h3 className="text-secondary font-primary pb-11 text-[28px] max-w-[901px] lg:text-[32px]">{data.subtitle}</h3>
        <Button content="Bli Ledare" theme="yellow" size="large"/>
      </div>
      <Image
        src={'/images/022.png'}
        height={1779}
        width={1152}
        alt="4 people on a white sailboat"
        className=" py-9 lg:w-screen lg:max-h-[600px] place-self-center object-cover"
      />
        <p className=" font-primary text-left text-white text-[18px] lg:text-[24px] leading-[31.5px] lg:leading-10.5 tracking-[0.18px] lg:tracking-[0.24px] pb-10 px-4 lg:px-36.5">{data.descriptionOne}
          <br/>
          <br/>
          {data.descriptionTwo}
          <br/>
          <br/>
          {data.descriptionThree}
          <br/>
          <br/>
          {data.descriptionFour}
          <br/>
          <br/>
          {data.descriptionFive}
          <br/>
          <br/>
          {data.descriptionSix}
        </p>
        
    </div>
  );
};

export default BecomeALeader;
