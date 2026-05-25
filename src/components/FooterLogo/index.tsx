import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="bg-primary flex flex-col text-center items-center pt-5 pb-10 gap-8 lg:pt-20 lg:pb-20">
      <Image
        src="/images/hss_logo.png"
        alt="HSS Logo"
        width={103}
        height={103}
        loading="eager"
        className="w-19 h-19 lg:w-25.75 lg:h-25.75"
      />
      <h3 className="font-secondary text-secondary text-[28px] lg:text-[32px]">
        Tillsammans kan vi göra mer!
      </h3>
      <p className="max-w-162 font-primary text-[18px] text-white font-light">
        Scouterna ger barn och unga från alla delar av samhället chansen att
        uppleva äventyr tillsammans och växa som individer.
      </p>
      <button className="w-fit p-4 bg-secondary text-primary rounded-full">
        Become a scout Placeholder
      </button>
    </div>
  );
};

export default FooterLogo;
