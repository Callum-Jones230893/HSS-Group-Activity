import ContactUsForm from "@/components/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="relative bg-primary">
      <div
        className="hidden lg:block absolute -top-12 -left-12 w-75 h-75
      bg-[url('/images/background_shell1.png')] bg-no-repeat bg-contain
      rotate-135
      opacity-35
      pointer-events-none
      z-0
    "
      />
      <div className=" flex flex-col justify-center items-center xl:gap-8 xl:mx-auto xl:w-4/5 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <ContactUsForm />
        </div>
        <div className="w-full p-6 xl:w-1/2">other stuff</div>
      </div>
    </div>
  );
};

export default ContactUs;
