import Hero from "@/components/SectionHero";
import DepartmentSection from "@/components/DepartmentSection";
import { DepartmentData } from "@/data/department";

const Kaparna = () => {
  return (
    <>
    <Hero title="Hässelby Strands Sjöscoutkår" intro="För att gå med i vår scoutkår kan du göra en intresseanmälan som skickas direkt till vårt medlemsregister. Fyll i uppgifterna nedan så hör vi av oss till dig inom kort. Fält som är markerade med är obligatoriska." image="/images/005.jpg" 
    button={{
      content: "Bli scout",
      size: "large",
      redirect: "",
      type: "external"
    }}
    />
    <DepartmentSection {...DepartmentData[1]} />
    </>
  )
}

export default Kaparna