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
          {data.map((dataItem, index) => (
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

// xl:mx-[145px]
// lg:mx-[80px]  
// mx-[14px]

{/* <section className="w-full max-w-[1728] lg:mx-auto flex flex-col items-stretch px-4 lg:py-18.5 lg:px-[151px]lg:px-12 mt-3.75 md:m-auto py-10 lg:max-w-168/200 overflow-none">
<div className="flex flex-col  bg-[#0036600F] rounded-[12] m-3.75 lg:pb-[42] lg:pt-[42] lg:py-[74] p-7.5">
  <h2 className="text-[#053a60] max-w-[1452] font-primary md:text-4xl text-[26px] text-light text-center lg:text-left lg:pl-8 pt-2 pb-5 md:text-center ">
    Tidigare Event Inom HSS
  </h2>
  <div className="grid xl:grid-cols-3 items-center lg:gap-3 gap-y-7 gap-x-9 md:gap-x-3md:gap-y-2 justify-center md:grid-cols-2 md:margin-auto"> */}

  {/*  <div className="flex lg:flex-row lg:p-4 lg:gap-[1] lg:rounded-[8] md:gap-[28]">
    <div className="max-w-75 md:flex flex-row  md:justify-center md:m-auto bg-[#ffffff] font-primary rounded-xl ">
      <section className="lg:flex lg:grow lg:flex-col flex-col grow font-primary rounded-xl w-full max-w-432  "> */}