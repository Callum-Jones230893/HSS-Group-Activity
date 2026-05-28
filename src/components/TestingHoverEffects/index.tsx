const TestingHoverEffects = () => {
  return (
    <>
      <div className="bg-[#f6f6f6] flex flex-col w-full items-center justify-center gap-16 p-10">
        <div className="flex gap-4">
          <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-[#e5a000] cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
          <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
          <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-secondary cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
          <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-primary hover:text-secondary hover:border-primary cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
        </div>
        <div className="flex gap-4">
          <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] cursor-pointer hover:shadow-[0_12px_25px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out">
            shadow
          </button>
          <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] cursor-pointer hover:shadow-[0_12px_25px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out">
            shadow
          </button>
        </div>
      </div>
      <div
        className="bg-[#f6f6f6] flex flex-col w-full items-center justify-center gap-16 p-10
        md:bg-[url('/images/hero_background.png')] md:bg-position-[center_center] md:h-150">
        <div className="flex gap-4">
          <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-[#e5a000] cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
          <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-primary hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
          <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-secondary cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
          <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-primary hover:text-secondary hover:border-primary cursor-pointer transition-colors duration-300 ease-in-out">
            color change
          </button>
        </div>
        <div className="flex gap-4">
          <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] cursor-pointer hover:shadow-[0_12px_25px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out">
            shadow
          </button>
          <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] cursor-pointer hover:shadow-[0_12px_25px_rgba(0,0,0,0.45)] transition-shadow duration-300 ease-in-out">
            shadow
          </button>
        </div>
      </div>
    </>
  );
};

export default TestingHoverEffects;
