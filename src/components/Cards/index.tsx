import CardInfo from "../CardInfo";

type Test = {
  title: string;
  date: string;
  description: string;
  image: string;
};

const data: Test[] = [
  {
    title: "Håll ut 2026 storvallens fjällstugor, Storlien",
    date: "Datum: 5-20 Juli 2025",
    description:
      "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
    image: "../../../public/images/006.png",
  },
  {
    title: "Håll ut 2026 storvallens fjällstugor, Storlien",
    date: "Datum: 5-20 Juli 2025",
    description:
      "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
    image: "../../../public/images/006.png",
  },
  {
    title: "Håll ut 2026 storvallens fjällstugor, Storlien",
    date: "Datum: 5-20 Juli 2025",
    description:
      "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
    image: "../../../public/images/006.png",
  },
  {
    title: "Håll ut 2026 storvallens fjällstugor, Storlien",
    date: "Datum: 5-20 Juli 2025",
    description:
      "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
    image: "../../../public/images/006.png",
  },
  {
    title: "Håll ut 2026 storvallens fjällstugor, Storlien",
    date: "Datum: 5-20 Juli 2025",
    description:
      "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
    image: "../../../public/images/006.png",
  },
  {
    title: "Håll ut 2026 storvallens fjällstugor, Storlien",
    date: "Datum: 5-20 Juli 2025",
    description:
      "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
    image: "../../../public/images/006.png",
  },
];
const Cards = () => {
  return (
    <>
    <section className="w-full max-w-[1728] flex flex-col justify-center px-1 lg:px-[151] p-7.5 md:m-auto  lg:max-w-19/20">
      <div className="flex flex-col lg:mx-auto justify-center items-center bg-[#0036600F] rounded-[12] m-3.75 lg:pb-[42] lg:pt-[42] lg:py-[74] p-7.5 items-stretch ">
        <h2 className="text-[#053a60] max-w-[1452] font-primary md:text-4xl text-[26px] text-light text-center lg:text-left lg:pl-8 pt-2 pb-5 md:text-center ">
          Tidigare Event Inom HSS
        </h2>
        <div className="grid xl:grid-cols-3 items-center lg:gap-3 gap-y-7 gap-x-2 justify-center md:grid-cols-2 md:margin-auto">
          {data.map((dataItem, index) => (
            <CardInfo
              key={index}
              title={dataItem.title}
              date={dataItem.date}
              description={dataItem.description}/>
          ))}
        </div>
      </div>
    </section >
    </>
  );
};

export default Cards;
