import Button from "@/components/Button";
import ContactUsForm from "@/components/ContactUsForm";
import { useTranslations } from "next-intl";

type LinkItem = {
  name: string;
  href: string;
};

const links: LinkItem[] = [
  { name: "Scouterna", href: "https://www.scouterna.se/" },
  { name: "Scouternas Folkhögskola", href: "https://www.scouternasfolkhogskola.se/" },
  { name: "Scoutnet", href: "https://www.scoutnet.se/f/login" },
  { name: "Scoutshop", href: "https://www.scoutshop.se/" },
];

const ContactUs = () => {
  const t = useTranslations("contactus");

  return (
    <div className="relative bg-primary">
      <div
        className="hidden lg:block absolute -top-12 -left-12 w-75 h-75
      bg-[url('/images/background_shell1.png')] bg-no-repeat bg-contain
      rotate-135 opacity-35 pointer-events-none z-0"
      />
      <div className=" flex flex-col justify-center items-center mx-auto lg:flex-row lg:w-9/10 xl:w-4/5 xl:gap-8 2xl:w-2/3">
        <div className="w-full xl:w-1/2">
          <ContactUsForm />
        </div>
        <div className="w-full p-6 xl:w-1/2">
          <div>
            <h4 className="text-[44px] text-secondary mb-4">{t("linksTitle")}</h4>
            <div>
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit block text-white text-[19px] lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary transition-all duration-300">
                  {link.name}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-[28px] text-secondary mb-4 mt-8">{t("memberTitle")}</h4>
              <Button
                content={t("formButton")}
                size="large"
                type="external"
                redirect=""
                url="https://www.scoutnet.se/register/in/group/764"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
