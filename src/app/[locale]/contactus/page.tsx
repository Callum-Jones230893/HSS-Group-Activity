import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";

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
    <section className="relative bg-primary pb-40 overflow-hidden">
      <div
        className="hidden lg:block absolute -top-12 -left-12 w-75 h-75
      bg-[url('/images/background_shell1.png')] bg-no-repeat bg-contain
      rotate-135 opacity-35 pointer-events-none z-0"
      />
      <div className=" flex flex-col justify-center items-center mx-auto lg:flex-row lg:w-9/10 xl:w-4/5 xl:gap-8 2xl:w-2/3">
        <article className="w-full xl:w-1/2">
          <ContactUsForm />
        </article>
        <section className="font-primary w-full p-6 xl:w-1/2 self-stretch flex flex-col">
          <h4 className="text-secondary text-[44px] 2xl:text-[53px] mb-2">{t("linksTitle")}</h4>
          <section className="mb-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit block text-white text-[19px] mb-3 lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary transition-all duration-300">
                {link.name}
              </a>
            ))}
          </section>
          <section>
            <h1 className="text-secondary text-[44px] 2xl:text-[53px] mb-2">{t("memberTitle")}</h1>
            <Button
              content={t("formButton")}
              size="large"
              type="external"
              redirect=""
              url="https://www.scoutnet.se/register/in/group/764"
            />
          </section>
        </section>
      </div>
      <div className="absolute opacity-16 bottom-0 -right-5">
        <Image
          src="/images/background_shell3.png"
          height={522}
          width={384}
          alt="background seashell graphic"
          className="h-56.5 w-41.5 md:h-77.5 md:w-57.25 lg:h-100 lg:w-73.75 2xl:h-130.5 2xl:w-[384px] -rotate-129"
        />
      </div>
    </section>
  );
};

export default ContactUs;
