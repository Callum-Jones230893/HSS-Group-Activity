import DepartmentCards from "@/components/DepartmentCards"

type DepartmentItem = {
  title: string
  subtitle: string
  description: string
  image: string
  text: string
  border: string
  outline: string
  shadow: string
}

const DepartmentData: DepartmentItem[] = [
  {
    title: "Sjöhumlor - ",
    subtitle: "Spårare 8-9 år",
    description: "Vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2. Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna. (Tidigare hette spårarscout ”miniorscout”) Vi har möten varje vecka samt övernattningar, både hajker och längre läger",
    image: "/images/department1.png",
    text: "text-lime-600",
    border: "lg:border-lime-600/50",
    outline: "outline-lime-600/50",
    shadow: "hover:shadow-lime-600/50"
  },
  {
    title: "Kaparna - ",
    subtitle: "Spårare 10-11 år",
    description: "På Kaparna börjar man vid 10 års ålder och stannar kvar i två år tills det är dags för nästa steg. (Tidigare hette upptäckarscout ”juniorscout”) På Kaparna stegras svårighetsgraden på uppgifterna.",
    image: "/images/department2.png",
    text: "text-sky-500",
    border: "lg:border-sky-500",
    outline: "outline-sky-500",
    shadow: "hover:shadow-sky-500"
  },
  {
    title: "Konvojen - ",
    subtitle: " Äventyrare 12-14 år",
    description: "Vid 12 års ålder öppnas dörrarna till Äventyrarscouterna. I tre spännande år får man lära sig nyttiga saker inom sjömansskap och natur. (Tidigare hette äventyrarscout ”patrullscout”)",
    image: "/images/department3.png",
    text: "text-orange-600",
    border: "lg:border-orange-600",
    outline: "outline-orange-600",
    shadow: "hover:shadow-orange-600"
  },
  {
    title: "Utmanare - ",
    subtitle: "15+ år",
    description: "HSS utmanarscoutlag upphör aldrig att existera! Efter tiden som utmanarscout är man ett tätt sammansvetsat gäng. Det är inte ovanligt att man håller kontakten livet ut. (Tidigare hette denna avdelning ”seniorscout”)",
    image: "/images/department4.png",
    text: "text-pink-700",
    border: "lg:border-pink-700",
    outline: "outline-pink-700",
    shadow: "hover:shadow-pink-700"
  },
  {
    title: "Familjescouting",
    subtitle: "",
    description: "Genom Familjescouting får barn under åtta år tillsammans med en eller flera vuxna på ett roligt och lekfullt sätt möta scouting. Familjescouting är dessutom ett utmärkt sätt att få in fler vuxna i kåren.",
    image: "/images/department5.png",
    text: "text-primary",
    border: "lg:border-primary",
    outline: "outline-primary",
    shadow: "hover:shadow-primary"
  }
] 

const DepartmentSelection = () => {
  return (
    <section className="my-22">
      <div className="flex flex-col w-9/10 lg:w-7/10 mx-auto text-pri">
        {DepartmentData.map((item, index) => 
          <DepartmentCards key={index} item={item} />
        )}
      </div>
    </section>
  )
}

export default DepartmentSelection