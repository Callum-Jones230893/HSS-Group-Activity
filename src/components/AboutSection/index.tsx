import Image from "next/image";
import { FEATURES_DATA } from "@/data/aboutus";
import Button from "@/components/Button";

const AboutSection = () => {
  return (
    <section className="w-full max-w-[1730px] mx-auto bg-white lg:bg-white py-10 lg:py-[74px] px-4 lg:px-[80px] xl:px-[151px] mt-[15px] justify-start items-start font-primary overflow-none">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 mb-16 lg:mb-[94px]">
        <div className="w-full lg:w-[45%]   aspect-3/4  lg:h-[1020px] relative  rounded-lg overflow-none">
          <Image
            src="/images/image43.png"
            alt="about us"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover object-center rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-between max-w-[750px]">
          <p className="text-primary text-5xl font-normal">Om HSS</p>

          <div className=" text-primary text-[18px] lg:text-[24px] tracking-[1%] pb-9">
            <p>
              Hässelby Strands Sjöscoutkår (HSS) är en traditionsrik ideell
              ungdomsverksamhet med fokus på scouting och båtliv. Vi är
              religiöst och politisk obundna, och medlem i Svenska
              Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges
              största ungdomsorganisationer.
            </p>
            <p>
              Målet med vår verksamhet är att ge barn och ungdomar möjligheten
              att uppleva naturen, båtlivet, sjömanskapet, utmaningarna och -
              framförallt - kamratskapet. Grundidén är Learning by doing. Inom
              scouterna finns ingen avbytarbänk!
            </p>
          </div>

          <div className="w-full max-w-[750px] p-6 bg-secondary/24 rounded-2xl flex flex-col justify-center  items-start ">
            <p className="text-primary text-[18px] lg:text-[24px] tracking-[1%] ">
              Scoutkåren bildades 1959 och bedriver verksamheten i en trevlig
              lokal (kallad Ruffen) vid Mälarens strand i Hässelby. Kåren har
              omkring 130 glada medlemmar, äger fem segelbåtar, tio
              optimistjollar, två 2-kronor, snabb följebåt och en stor
              scoutstuga.
            </p>

            <div className=" flex flex-col justify-center items-start gap-10">
              <Button content="Se våra båtar" size={"large"} redirect="becomeascout" type="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-20 items-center justify-center mt-12">
        {FEATURES_DATA.map((card, index) => (
          <div
            key={index}
            className="max-w-[500px] w-full  h-[208px] lg:h-[319px] px-3.5 lg:px-6 py-4 lg:py-6 bg-primary/10 rounded-[10.43px] lg:rounded-2xl flex flex-col justify-center items-center gap-1.5 lg:gap-2.5 transition-all"
          >
            <div className="size-24 lg:size-36 flex justify-center items-center">
              {card.icon}
            </div>

            <div className="text-center flex flex-col justify-center items-center">
              <p className="text-primary text-xl lg:text-3xl font-bold tracking-tight leading-tight">
                {card.title}
              </p>
              <p className="text-primary text-xl lg:text-3xl font-extralight tracking-tight leading-tight">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
