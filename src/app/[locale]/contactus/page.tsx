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
  {
    name: "Scouternas Folkhögskola",
    href: "https://www.scouternasfolkhogskola.se/",
  },
  { name: "Scoutnet", href: "https://www.scoutnet.se/f/login" },
  { name: "Scoutshop", href: "https://www.scoutshop.se/" },
];

const ContactUs = () => {
  const t = useTranslations("contactus");

  return (
    <section className="relative bg-primary h-full overflow-hidden">
      <div className=" flex flex-col justify-center items-center mx-auto pb-20 lg:flex-row lg:w-9/10 xl:w-4/5 xl:gap-8 2xl:w-2/3">
        <article className="w-full xl:w-1/2">
          <ContactUsForm />
        </article>
        <section className="font-primary w-full p-6 xl:w-1/2 self-stretch flex flex-col">
          <section className="mb-8">
            <h1 className="text-secondary text-title mb-4">
              {t("memberTitle")}
            </h1>
            <Button
              content={t("formButton")}
              size="large"
              type="external"
              redirect=""
              url="https://www.scoutnet.se/register/in/group/764"
            />
          </section>
          <h4 className="text-secondary text-title mb-2">
            {t("linksTitle")}
          </h4>
          <section>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit block text-white text-paragraph mb-3 lg:border-b-[3px] lg:border-transparent lg:hover:border-secondary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
