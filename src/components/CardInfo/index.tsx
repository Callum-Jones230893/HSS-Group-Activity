import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

type CardInfoProps = {
  title: string;
  date: string;
  description: string;
};

const CardInfo = ({ title, date, description }: CardInfoProps) => {
  const maxChar = (description: string) =>
    description.substring(0, 105) + (description.length > 105 ? "..." : "");

  return (
    <div className="max-w-100 bg-white rounded-lg">
      <Image
        src="/images/006.png"
        alt="grey haired woman with her back towards the camera and a blonde looking at her"
        width={326}
        height={217}
        loading="eager"
        className="flex object-cover md:h-auto w-screen lg:flex-col place-self-center rounded-t-lg"
      />
      <div className="flex-col lg:flex-col pt-[16] pl-[16] pr-[16] w-full">
        <h2 className="font-semibold text-primary py-[7]">{title}</h2>
        <p className="font-medium py-[7] text-primary">{date}</p>
        <p className="flex lg:grow lg:overflow-order text-[#5c5c5c] text-md w-full">
          {maxChar(description)}
        </p>
        <div className="flex lg:flex-start lg:flex-row py-[24] w-full gap-[13]">
          <Button
            content="Ansök Här"
            size="small"
            redirect=""
            type="instagram"
          />
          <Link
            href={""}
            className="flex lg:flex-start decoration-1 px-[10] py-[7] text-primary text-center underline underline-offset-2"
          >
            Läs Mer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
