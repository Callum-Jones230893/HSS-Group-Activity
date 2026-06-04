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
    <div className="flex justify-center">
    <section className="items-center xl:w-[1428px]  lg:mx-[80px] font-primary bg-[#0036600F] px-8 py-10.5 mx-[14px] rounded-lg  place-items-center xl:mx-[150px]">
        <h2 className=" text-primary lg:text-[36px] md:text-[32px] text-[28px] text-center pb-9.5 lg:pb-10.5">Tidigare händelser inom HSS</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7">
          {data.slice(0, 3).map((dataItem, index) => (
            <CardInfo
              key={index}
              title={dataItem.title}
              date={dataItem.date}
              description={dataItem.description}/>
          ))}
        </div>
    </section>
    </div>
  );
};

export default Cards;