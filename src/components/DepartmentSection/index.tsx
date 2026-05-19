import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  email: string;
  avatar: string;
};

type DepartmentPageProps = {
  departmentName: string;
  age: string;
  icon: string;
  intro: string;
  image: string;
  description: string;
  leader: Leader;
};

const DepartmentPage = ({
  departmentName,
  age,
  icon,
  intro,
  image,
  description,
  leader,
}: DepartmentPageProps) => {
  return (
    <section className="w-full font-primary">
      <div className="bg-primary">
        <div className="max-w-432 mx-auto px-4 md:px-36.75 pt-6 pb-10 md:py-20 flex flex-col md:flex-row gap-2 md:items-center">
          <div className="flex-1 flex flex-col gap-6 text-white md:max-w-175">
            <h1 className="text-[32px] md:text-[53px]">
              Hässelby Strands Sjöscoutkår
            </h1>
            <p className="text-[18px] font-light md:text-[24px]">{intro}</p>
            <button className="w-fit p-4 bg-secondary text-primary rounded-full">
              Become a scout Placeholder
            </button>
          </div>
          <Image
            src={image}
            alt={departmentName}
            width={471}
            height={471}
            className="hidden md:block object-cover w-117.75 h-117.75 rounded-2xl"
          />
        </div>
      </div>

      <div className="bg-primary/5">
        <div className="max-w-432 mx-auto px-4 md:px-36.75 py-10 md:py-20">
          <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-4 md:gap-2.5 max-w-347.75 mx-auto">
            <Image
              src={icon}
              alt={departmentName}
              width={244}
              height={244}
              className="object-contain w-29.5 h-29.5 md:h-56 md:w-56"
            />

            <div className="flex-1 flex flex-col md:max-w-225">
              <h2 className="text-primary font-extralight text-[20px] md:text-[24px] mb-4">
                {departmentName} - {age}
              </h2>

              <p className="text-[18px] font-light md:text-[24px] mb-8">
                {description}
              </p>

              <p className="text-[20px] font-light mb-3">Avdelningsledare:</p>
              <div className="flex items-center gap-4">
                <Image
                  src={leader.avatar}
                  alt={leader.name}
                  width={76}
                  height={76}
                  className="rounded-full object-cover"
                />

                <div className="flex flex-col gap-1">
                  <p className="text-[20px]">{leader.name}</p>
                  <span className="w-fit px-3 py-1 bg-[#3A9B6DB5] text-[#F9F9F9] text-[16px] font-extralight rounded-full">
                    {leader.role}
                  </span>
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-[16px] font-light text-[#0290FF]"
                  >
                    {leader.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentPage;
