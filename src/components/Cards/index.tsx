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
        "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...iorgnireognrkgmjireogjmioregkjmirkmokrfmvkowmnwofvnmwksovfgrwoifkvdnogf",
        image: "../../../public/images/006.png",
    },
    {
        title: "Håll ut 2026 storvallens fjällstugor, Storlien",
        date: "Datum: 5-20 Juli 2026",
        description:
        "Under arrangemanget kommer fjällen var vår bas och en stor del av arrangemanget kommer vara utomhus...dfiognhdrkighndruighnouridhfgiosnrnneonekhnfpoeiwfjepwojf",
        image: "../../../public/images/006.png",
    },               
];

const Cards = () => {
    const maxChar = (description: string) =>
        description.substring(0, 105) + (description.length > 105 ? "..." : "");
    
    return (
        <>
            <div className="">
                    <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[28] md:grid-cols-1 ">
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
