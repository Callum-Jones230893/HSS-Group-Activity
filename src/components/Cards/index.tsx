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
  const maxChar = (description: string) =>
    description.substring(0, 105) + (description.length > 105 ? "..." : "");

  return (
    <>
      <div className="flex flex-col max-w-[1728] lg:mx-auto justify-center litems-center md:max-w-295 bg-[#0036600F] rounded-[12] m-3.75 lg:pb-[42] lg:pt-[42] lg:px-[12] lg:lg:py-[74] px-1 p-7.5 lg:max-w-9/10 ">
        <h2 className="text-[#053a60] max-w-[1452] font-primary md:text-4xl text-[26px] text-light text-center lg:text-left lg:pl-8 pt-2 mb-4 md:text-center ">
          Tidigare Event Inom HSS
        </h2>
        <div className="grid lg:grid-cols-3 items-center lg:gap-3  gap-y-7 gap-x-2  justify-center md:margin-auto">
          {data.map((dataItem, index) => (
            <CardInfo
              key={index}
              title={dataItem.title}
              date={dataItem.date}
              description={maxChar(dataItem.description)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
