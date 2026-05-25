import CardInfo from "../CardInfo";

type Test = {
    title: string;
    date: string;
    description: string;
    image: string;
};

const data:Test[] = [
    {
        title: "Håll ut 2026 storvallens fjällstugor, Storlien",
        date: "Datum: 5-20 Juli 2026",
        description:
        "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
        image: "../../../public/images/006.png",
    },
    {
        title: "Håll ut 2026 storvallens fjällstugor, Storlien",
        date: "Datum: 5-20 Juli 2026",
        description:
        "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
        image: "../../../public/images/006.png",
    },
    {
        title: "Håll ut 2026 storvallens fjällstugor, Storlien",
        date: "Datum: 5-20 Juli 2026",
        description:
        "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...",
        image: "../../../public/images/006.png",
    },  
    {
        title: "Håll ut 2026 storvallens fjällstugor, Storlien",
        date: "Datum: 5-20 Juli 2026",
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
            <div className="flex flex-col grow lg:content-center bg-[#e8eaee] rounded-[42] w-full max-w-[1452] mt-[42] px-[32] py-[42] m-20">
                <h2 className="text-[#053a60] w-full font-primary text-4xl text-light text-center md:text-left pl-8 pt-[42] pb-[41] md:pt-[24]">Upcoming events on HSS</h2>
                    <div className="grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-y-[8] md:grid-cols-1 content-center gap-y-[28px] gap-x-2">
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

                <div className="flex flex-col grow justify-center bg-[#e8eaee] rounded-[42] w-full max-w-[1452] mt-[42] px-[32] py-[42] m-20">
                    <h2 className="text-[#053a60] w-full font-primary text-4xl text-light text-center md:text-left">Past adventure events on HSS</h2>
                    <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-7 md:grid-cols-1 content-center ">
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
