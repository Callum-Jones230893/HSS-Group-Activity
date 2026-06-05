import ContactUsForm from "../ContactUsForm";

const ContactUsContainer = () => {
  return (
    <div className="bg-primary relative font-primary py-8 xl:px-120 overflow-hidden">
      <div
        className="hidden lg:block absolute -top-12 -left-12 w-75 h-75
      bg-[url('/images/background_shell1.png')] bg-no-repeat bg-contain
      rotate-135
      opacity-35
      pointer-events-none
      z-0
    "
      />
      <ContactUsForm />
    </div>
  );
};

export default ContactUsContainer;
