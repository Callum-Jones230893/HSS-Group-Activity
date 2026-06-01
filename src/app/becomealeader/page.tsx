import BecomeALeaderData from "../../data/becomeleader";
import Button from '@/components/Button'

const BecomeALeader = () => {
  const data = BecomeALeaderData;
  return (
    <div className="flex flex-col bg-primary max-w-107.5 max-h-[1763] lg:max-w[1728px] lg:max-h-578.5">
      <div className="flex flex-start flex-col px-4  lg:px-37.25 lg:max-w-260.75">
        <h2 className="text-white font-primary text-[32px] lg:text-[53px] pt-6">{data.title}</h2>
        <h3 className="text-secondary font-primary pb-6 text-[28px] lg:text-[32px]">{data.subtitle}</h3>
        <Button content="Bli Ledare" theme="yellow" size="large"/>
      </div>
      <img
        src={'public/images/memeber-background.jpg'}
        height={1779}
        width={1152}
        alt="4 people on a white sailboat"
        className="py-9"
      />
        <p className=" font-primary text-left text-white max-w-99.5 lg:max-w-313.5 text-[18px] lg:text-[24px] leading-[31.5px] lg:leading-10.5 tracking-[0.18px] lg:tracking-[0.24px] pb-10 px-4 lg:px-36.5">{data.description}</p>
    </div>
  );
};

export default BecomeALeader;
