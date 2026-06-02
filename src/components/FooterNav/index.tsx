import NavMenu from "../NavMenu";

const FooterNav = () => {
  return (
    <div className="bg-primary text-secondary p-12 grid grid-cols-2 justify-center items-center gap-5 mx-auto md:flex md:flex-row lg:gap-18">
      <NavMenu color={"bg-primary/30"} textColor={"text-secondary"} />
    </div>
  );
};

export default FooterNav;
