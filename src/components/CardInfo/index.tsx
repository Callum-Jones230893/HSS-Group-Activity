import Link from "next/link";
import Image from "next/image";

type CardInfoProps = {
    title: string;
    date: string;
    description: string;
};

const CardInfo = ({ title, date, description }: CardInfoProps) => {
    return (
        <>
            <div className=" md:ml-[20] bg-background font-primary rounded-xl ">
                <div className=" font-primary rounded-xl">
                    <Image
                        src="/images/006.png"
                        alt="grey haired woman with her back towards the camera and a blonde looking at her"
                        width={326}
                        height={217}
                        loading="eager"
                        className="rounded-t-xl"/>
                    <div className="h-[277] pt-[16] pl-[16] pr-[16] w-[326]">
                        <h2 className="font-semibold text-primary py-[7]">
                            {title}
                        </h2>
                        <p className="font-medium py-[7] text-primary">
                            {date}
                        </p>
                        <p className="h-[69] text-[#5c5c5c] text-sm w-[229]">
                            {description}
                        </p>
                        <div className="flex h-[83] py-[24] gap-[13]">
                            <p className=" bg-amber-300  h-[35] rounded-full py-[7] px-[25] text-primary text-center w-[136]">
                                Ansök här
                            </p>{" "}
                            {/* button here */}
                            <Link
                                href={""}
                                className="decoration-1 px-[10] py-[7] text-primary text-center underline underline-offset-2">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardInfo;
