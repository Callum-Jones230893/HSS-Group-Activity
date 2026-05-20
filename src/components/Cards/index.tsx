import react from "react";
import CardInfo from "../CardInfo";
import image from "../../../public/images/006.png";

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
    return (
        <>
            <div className="flex flex-row">
                {/* background box  */}
                <div className="flex flex-row justify-between h-124 p-[16] rounded-[8] w-full sm:flex-col"> {/*sm:max-w-xl sm:mx-auto*/}
                        <div className="h-[496] w-[326]  md:max-w-2xl gap-2">
                            {data.map((dataItem, index) => (
                                <CardInfo
                                    key={index}
                                    title={dataItem.title}
                                    date={dataItem.date}
                                    description={dataItem.description}
                                />
                            ))}
                        </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
