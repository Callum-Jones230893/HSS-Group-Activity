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
        <div className=" flex lg:flex-row lg:p-[16] lg:gap-[1] lg:rounded-[8] lg:w-8/10 md:gap-[28]">
            <div className="flex flex-row md:justify-center md:m-auto bg-[#ffffff] font-primary rounded-xl w-[326]">
                <div className="lg:flex lg:grow lg:flex-col flex-col grow font-primary rounded-xl  w-full max-w-432  ">
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
