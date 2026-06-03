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
        <div className="max-w-432 mx-auto px-6 lg:px-30 py-6 lg:py-20">
          <div className="bg-[#fff] rounded-2xl py-4 px-6 flex flex-col lg:flex-row gap-2 lg:gap-4 max-w-347.75 mx-auto">
            <Image
              src={image}
              alt={title}
              width={244}
              height={244}
              className="w-29.5 h-29.5 lg:h-56 lg:w-56"
            />

            <div className="flex-1 flex flex-col lg:max-w-225">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-primary font-extralight text-[20px] lg:text-[24px]">
                  {title}
                </h2>
                <p
                  className={`font-extralight text-[20px] lg:text-[24px] ${text}`}
                >
                  {subtitle}
                </p>
              </div>
              {fullDescription.map((description, index) => (
                <p
                  key={index}
                  className="mb-3 md:mb-4 text-[18px] font-light lg:text-[24px]"
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