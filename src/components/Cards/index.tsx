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
            <div className="h-screen">
                {/* background box  */}
                <div className="p-[16] gap-2 rounded-[8] w-full md:gap-4"> {/*sm:max-w-xl sm:mx-auto*/}
                        <div className="grid grid-flow-row justify-items-center gap-4 md:grid-flow-col md:gap-2">
                            {data.map((dataItem, index) => (
                                <CardInfo
                                    key={index}
                                    title={dataItem.title}
                                    date={dataItem.date}
                                    description={dataItem.description}/>
                            ))}
                        </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
