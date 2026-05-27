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
];

const Cards = () => {
    const maxChar = (description: string) =>
        description.substring(0, 105) + (description.length > 105 ? "..." : "");

    return (
        <>
            <div className="flex flex-col grow justify-center bg-[#e8eaee] rounded-[12] m-6 lg:pb-[42] lg:pt-[42] lg:px-[32] lg:py-[42] p-7.5 lg:m-[40]">
                <h2 className="text-[#053a60] max-w-[1452] font-primary text-4xl text-light text-center lg:text-left lg:pl-8 pt-2 mb-3 md:text-center ">Upcoming events on HSS</h2>
                    <div className="grid lg:grid-cols-3 items-center gap-y-7 gap-x-2  justify-center md:margin-auto">
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
