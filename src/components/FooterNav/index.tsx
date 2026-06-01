import NavMenu from "../NavMenu";

const FooterNav = () => {
  return (
    <div className="bg-primary text-secondary py-10 flex flex-col justify-center items-center gap-4 md:flex-row md:gap-8">
      <NavMenu color={"bg-primary"} textColor={"text-secondary"} />
    </div>
  );
};

export default FooterNav;
