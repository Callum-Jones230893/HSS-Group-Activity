import DepartmentCards from "@/components/DepartmentCards"

type DepartmentItem = {
  title: string
  subtitle: string
  description: string
  image: string
}

const DepartmentData: DepartmentItem[] = [
  {
    title: "Sjöhumlor - ",
    subtitle: "Spårare 8-9 år",
    description: "vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2. Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna. (Tidigare hette spårarscout ”miniorscout”) Vi har möten varje vecka samt övernattningar, både hajker och längre läger",
    image: "/images/department1.png"
  },
  {
    title: "Kaparna - ",
    subtitle: "Spårare 10-11 år",
    description: "På Kaparna börjar man vid 10 års ålder och stannar kvar i två år tills det är dags för nästa steg. (Tidigare hette upptäckarscout ”juniorscout”) På Kaparna stegras svårighetsgraden på uppgifterna.",
    image: "/images/department2.png"
  },
  {
    title: "Konvojen - ",
    subtitle: " Äventyrare 12-14 år",
    description: "Vid 12 års ålder öppnas dörrarna till Äventyrarscouterna. I tre spännande år får man lära sig nyttiga saker inom sjömansskap och natur. (Tidigare hette äventyrarscout ”patrullscout”)",
    image: "/images/department3.png"
  },
  {
    title: "Utmanare - ",
    subtitle: "15+ år",
    description: "HSS utmanarscoutlag upphör aldrig att existera! Efter tiden som utmanarscout är man ett tätt sammansvetsat gäng. Det är inte ovanligt att man håller kontakten livet ut. (Tidigare hette denna avdelning ”seniorscout”)",
    image: "/images/department4.png"
  },
  // {
  //   title: "",
  //   subtitle: "",
  //   description: "",
  //   image: "/images/department5.png"
  // }
] 

const DepartmentSelection = () => {
  return (
    <section className="my-22">
      <div className="flex flex-col w-9/10 lg:w-7/10 mx-auto">
        {DepartmentData.map((item, index) => 
          <DepartmentCards key={index} item={item} />
        )}
      </div>
    </section>
  )
}

export default DepartmentSelection