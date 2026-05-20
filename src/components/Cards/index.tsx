import react from "react";
import CardInfo from "../CardInfo";
import { title } from "process";

const data = [
    {
        title: "blablabla",
        date: "18 maj",
        description: "loremloremlorem",
    },
];

type Test = {
    title: string,
    date: string,
    description: string,
}

const Cards = () => {
    return (
        <>
            {data.map((data, key): Test => (
                <CardInfo title={title} date={date} description={description} />
            ))}
        </>
    );
};

export default Cards;
