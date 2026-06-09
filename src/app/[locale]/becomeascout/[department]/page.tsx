import Hero from "@/components/SectionHero";
import DepartmentSection from "@/components/DepartmentSection";
import { DepartmentData, getDepartment } from "@/data/department";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const DepartmentPage = async ({
  params,
}: {
  params: Promise<{ department: string }>;
}) => {
  const { department } = await params;
  const departmentData = getDepartment(department);

  if (!departmentData) notFound();

  const t = await getTranslations("DepartmentHero");
  const tNav = await getTranslations("navbar");

  return (
    <>
      <Hero
        title="Hässelby Strands Sjöscoutkår"
        intro={t("intro")}
        image="/images/005.jpg"
        button={{
          content: tNav("becomeascout"),
          size: "large",
          redirect: "/becomeascout",
          type: "external",
          url: "https://www.scoutnet.se/register/in/group/764",
        }}
      />
      <DepartmentSection item={departmentData} />
    </>
  );
};

export function generateStaticParams() {
  const departments = DepartmentData;
  return departments.map((department) => ({
    department: department.id,
  }));
}

export default DepartmentPage;
