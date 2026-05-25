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
  description: string;
  leader: Leader;
};

const DepartmentPage = ({
  departmentName,
  age,
  icon,
  description,
  leader,
}: DepartmentPageProps) => {
  return (
    <section className="w-full font-primary">
      <div className="bg-primary/5">
        <div className="max-w-432 mx-auto px-4 lg:px-36.75 py-10 lg:py-20">
          <div className="bg-white rounded-2xl p-4 flex flex-col lg:flex-row gap-4 lg:gap-2.5 max-w-347.75 mx-auto">
            <Image
              src={icon}
              alt={departmentName}
              width={244}
              height={244}
              className="object-contain w-29.5 h-29.5 lg:h-56 lg:w-56"
            />

            <div className="flex-1 flex flex-col lg:max-w-225">
              <h2 className="text-primary font-extralight text-[20px] lg:text-[24px] mb-4">
                {departmentName} - {age}
              </h2>

              <p className="text-[18px] font-light lg:text-[24px] mb-8">
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
