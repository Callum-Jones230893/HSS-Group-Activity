import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { InstagramType } from "@/utils/instagramFetch";

type CardInfoProps = {
  item: InstagramType
};

const CardInfo = ({ item }: CardInfoProps) => {
  const maxChar = (description: string) =>
    description.substring(0, 105) + (description.length > 105 ? "..." : "");

  const date = ((date: string) => 
    date.substring(0,10) + (date.length > 10 ? "" : ""))

  return (
    <div className="flex flex-col max-w-100 bg-white rounded-lg">
      <Image
        src={item.sizes.small.mediaUrl}
        alt="grey haired woman with her back towards the camera and a blonde looking at her"
        width={326}
        height={217}
        loading="eager"
        className="flex object-cover md:h-auto w-screen lg:flex-col place-self-center rounded-t-lg"
      />
      <div className="flex-col lg:flex-col pt-[16] pl-[16] pr-[16] w-full grow">
        <p className="font-medium py-[7] text-primary">{date(item.timestamp)}</p>
        <p className="flex lg:grow lg:overflow-order text-[#5c5c5c] text-md w-full">
          {maxChar(item.caption)}
        </p>
      </div>
      <div className="flex flex-col pt-[24] mb-5 w-full gap-[5] ml-5">
        <Button
          content="Ansök Här"
          size="small"
          redirect={item.permalink}
          type="instagram"
        />
      </div>
    </div>
  );
};

export default CardInfo;
