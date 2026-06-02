import Image from "next/image";

type DepartmentSectionProps = {
  title: string;
  subtitle: string;
  image: string;
  fullDescription: string[];
  text: string;
};

const DepartmentSection = ({
  title,
  subtitle,
  image,
  fullDescription,
  text,
}: DepartmentSectionProps) => {
  return (
    <section className="w-full font-primary">
      <div className="bg-primary/5">
        <div className="max-w-432 mx-auto px-4 md:px-36.75 py-10 md:py-20">
          <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-4 md:gap-2.5 max-w-347.75 mx-auto">
            <Image
              src={image}
              alt={title}
              width={244}
              height={244}
              className="object-contain w-29.5 h-29.5 md:h-56 md:w-56"
            />

            <div className="flex-1 flex flex-col md:max-w-225">
              <div className="flex items-center gap-1.5 mb-4">
                <h2 className="text-primary font-extralight text-[20px] md:text-[24px]">
                  {title}
                </h2>
                <p
                  className={`font-extralight text-[20px] md:text-[24px] ${text}`}
                >
                  {subtitle}
                </p>
              </div>
              {fullDescription.map((description, index) => (
                <p
                  key={index}
                  className="mb-3 md:mb-4 text-[18px] font-light md:text-[24px]"
                >
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
