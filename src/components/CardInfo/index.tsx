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
        <div className="lg:p-[16] lg:gap-2 lg:rounded-[8] lg:w-8/10 md:gap-4 ">
            <div className="md:flex md:justify-center md:ml-[20] bg-background font-primary rounded-xl mb-[28] bg-amber-200">
                <div className="lg:flex lg:grow lg:flex-row  w-[326] flex-col grow font-primary rounded-xl bg-amber-400">
                    <Image
                        src="/images/006.png"
                        alt="grey haired woman with her back towards the camera and a blonde looking at her"
                        width={326}
                        height={217}
                        loading="eager"
                        className="flex lg:flex-col rounded-t-xl"
                    />
                    <div className="flex-col lg:flex-col pt-[16] pl-[16] pr-[16] w-full">
                        <h2 className="font-semibold text-primary py-[7]">
                            {title}
                        </h2>
                        <p className="font-medium py-[7] text-primary">
                            {date}
                        </p>
                        <p className="flex lg:grow lg:overflow-order text-[#5c5c5c] text-md w-full">
                            {description}
                        </p>
                        <div className="flex h-[83] py-[24] gap-[13]">
                            <p className=" bg-amber-300  h-[35] rounded-full py-[7] px-[25] text-primary text-center w-[136]">
                                Ansök här
                            </p>{" "}
                            {/* button here */}
                            <Link
                                href={""}
                                className="decoration-1 px-[10] py-[7] text-primary text-center underline underline-offset-2"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CardInfo;
