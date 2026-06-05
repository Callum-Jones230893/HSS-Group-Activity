import Button from '@/components/Button';
import ContactUsForm from "@/components/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="relative bg-primary">
      <div
        className="hidden lg:block absolute -top-12 -left-12 w-75 h-75
      bg-[url('/images/background_shell1.png')] bg-no-repeat bg-contain
      rotate-135 opacity-35 pointer-events-none z-0"
      />
      <div className=" flex flex-col justify-center items-center xl:gap-8 xl:mx-auto xl:w-4/5 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <ContactUsForm />
        </div>
        <div className="w-full p-6 xl:w-1/2">
          <div>
            <h4 className="text-[28px] text-secondary mb-4">Viktiga länker</h4>
            <a href="https://www.scouterna.se/" target="_blank">
              <p className="text-white text-[19px] w-fit lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary duration-300">
                Scouterna
              </p>
            </a>
            <a href="https://www.scouternasfolkhogskola.se/" target="_blank">
              <p className="text-white text-[19px] w-fit lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary duration-300">
                Scouternas Folkhögskola
              </p>
            </a>
            <a href="https://www.scoutnet.se/f/login" target="_blank">
              <p className="text-white text-[19px] w-fit lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary duration-300">
                Scoutnet
              </p>
            </a>
            <a href="https://www.scoutshop.se/" target="_blank">
              <p className="text-white text-[19px] w-fit lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary duration-300">
                Scoutshop
              </p>
            </a>
          </div>
          <div>
            <h4 className="text-[28px] text-secondary mb-4 mt-8">Vill du bli en av oss?</h4>
            <Button content="Intresseanmälan" size="large" type='external' redirect='' url="https://www.scoutnet.se/register/in/group/764" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
