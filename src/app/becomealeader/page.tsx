import {BecomeALeaderData} from "@/data/becomeleader";
import SectionHero from '@/components/SectionHero'
import Button from "@/components/Button";
import Image from "next/image";

const BecomeALeader = () => {
  const data = BecomeALeaderData;
  return (
    <div className="flex flex-col bg-primary ">
      <div className="flex flex-start flex-col px-4  lg:px-36.5 lg:py-12">
        <SectionHero title="Vill du bli en av oss?" intro="Här kanske ditt livs äventyr startar. I HSS finns det spännande utmaningar för stor som liten." button={{
          content: "BLi ledare", 
          size:"large", redirect:"", 
          type:"external"
          }}/>
      </div>
      <Image
        src={data.image}
        height={1779}
        width={1152}
        loading="eager"
        alt="group of scouts on a cliff infront 3 boats"
        className=" py-9 lg:w-screen lg:max-h-120  object-cover object-[60%_75%] place-self-center rounded-2xl"
      />
      <section className=" font-primary text-left text-white text-[18px] lg:text-[24px] leading-[31.5px] lg:leading-10.5 tracking-[0.18px] lg:tracking-[0.24px] pb-10 px-4 lg:px-36.5">
        <p className="pb-6">{data.descriptionOne}</p>
        <p className="pb-6">{data.descriptionTwo}</p>
        <p className="pb-6">{data.descriptionThree}</p>
        <p className="pb-6">{data.descriptionFour}</p>
        <p>{data.descriptionFive}</p>
      </section>
    </div>
  );
};

export default BecomeALeader;
