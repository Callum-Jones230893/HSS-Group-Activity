const TestingHoverEffects = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-24 p-10">
      <div className="flex gap-4">
        <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-[#e5a000] cursor-pointer">
          color change
        </button>
        <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-primary hover:text-secondary cursor-pointer">
          color change
        </button>
        <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-secondary cursor-pointer">
          color change
        </button>
        <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px] hover:bg-primary hover:text-secondary hover:border-primary cursor-pointer">
          color change
        </button>
      </div>
      <div className="flex gap-4">
        <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px] cursor-pointer">
          scale
        </button>
        <button className="w-fit text-primary bg-secondary h-[53px] px-[29px] py-[12px] rounded-[30px]  cursor-pointer">
          scale
        </button>
        <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px]  cursor-pointer">
          scale
        </button>
        <button className="w-fit text-primary border-secondary border border-solid h-[53px] px-[29px] py-[12px] rounded-[30px]  cursor-pointer">
          scale
        </button>
      </div>
    </div>
  );
};

export default TestingHoverEffects;
