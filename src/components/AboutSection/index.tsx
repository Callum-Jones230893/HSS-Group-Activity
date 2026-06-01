import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full max-w-[1730px] mx-auto bg-white lg:bg-white py-10 lg:py-[74px] px-4 lg:px-[80px] xl:px-[151px] mt-[15px] justify-start items-start font-primary overflow-none">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 mb-16 lg:mb-[94px] lg:items-stretch">
        <div className="w-full lg:w-[45%] aspect-3/4 lg:aspect-auto lg:self-stretch relative rounded-lg overflow-none">
          <Image
            src="/images/image43.png"
            alt="about us"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover object-center rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center justify-between max-w-[750px]">
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
              <button className="w-[248px] h-[59.6px] px-8 py-0 bg-secondary text-primary text-xl font-light rounded-[32.93px] leading-7 mt-2">
                Se våra båtar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
