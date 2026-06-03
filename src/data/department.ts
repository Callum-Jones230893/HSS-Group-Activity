export type DepartmentItemType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string[];
  image: string;
  text: string;
  bg: string;
  border: string;
  outline: string;
  shadow: string;
};

export const DepartmentData: DepartmentItemType[] = [
  {
    id: "sjohumlor",
    title: "Sjöhumlor - ",
    subtitle: "Spårare 8-9 år",
    description:
      "Vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2. Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna. (Tidigare hette spårarscout ”miniorscout”) Vi har möten varje vecka samt övernattningar, både hajker och längre läger",
    fullDescription: [
      "Vid 8 års ålder kan man börja i HSS, dvs när man börjar i årskurs 2. Man blir då Spårarscout och medlem i avdelningen Sjöhumlorna. (Tidigare hette spårarscout ”miniorscout”)",
      "Vi har möten varje vecka samt övernattningar, både hajker och längre läger. Här får barnen lära sig knopar, grundläggande naturkunskap och sjömanskap på ett lekfullt sätt. ",
      "Du lär dig något nytt nästan varje dag i Scouterna, det är alltid roliga saker men ibland är de också väldigt bra att kunna. Som att tälja med kniv eller lägga bandage på någon som gjort sig illa. Till skillnad från hur man gör i skolan läser vi inga böcker om knivar och bandage, vi lär oss genom att göra, genom att prova på allt på riktigt istället. Medan vi gör det samarbetar vi i patruller, små grupper där alla är med och bestämmer. Det är smart, för tillsammans kan man alltid hjälps åt att hitta på ännu roligare saker.",
      "Vi seglar optimistjollar och 2-kronor.",
      "Sjöhumlorna har möten på måndagar i vår fina lokal Ruffen vid Hässelby Strandbad.",
      "När man är scout gör man alltid sitt bästa och det gör inget om det råkar bli fel, därför brukar vi tänka lite på hur allting gått till så att vi blir bättre till nästa gång.",
    ],
    image: "/images/department1.png",
    text: "text-lime-600",
    bg: "bg-lime-600",
    border: "lg:border-lime-600/50",
    outline: "outline-lime-600/50",
    shadow: "hover:shadow-lime-600/50",
  },
  {
    id: "kaparna",
    title: "Kaparna - ",
    subtitle: "Spårare 10-11 år",
    description:
      "På Kaparna börjar man vid 10 års ålder och stannar kvar i två år tills det är dags för nästa steg. (Tidigare hette upptäckarscout ”juniorscout”) På Kaparna stegras svårighetsgraden på uppgifterna.",
    fullDescription: [
      "På Kaparna börjar man vid 10 års ålder och stannar kvar i två år tills det är dags för nästa steg. (Tidigare hette upptäckarscout ”juniorscout”) På Kaparna stegras svårighetsgraden på uppgifterna.",

      "Scouterna får lära sig segla optimist samt prova på att segla 2-krona samt kölbåt.",

      "En färdigutbildad upptäckarscout kan bland annat hantera kniv, elda och släcka mindre bränder, segla optimist själv samt grundläggande sjukvård och sjösäkerhet.",

      "Avdelningen Kaparna har möten på tisdagar i vår lokal Ruffen vid Hässelby Strandbad.",

      "När man är scout gör man alltid sitt bästa men det gör inget om det råkar bli fel, därför brukar vi tänka lite på hur allting gått till så att vi blir bättre till nästa gång.",
    ],
    image: "/images/department2.png",
    text: "text-sky-500",
    bg: "bg-sky-500",
    border: "lg:border-sky-500",
    outline: "outline-sky-500",
    shadow: "hover:shadow-sky-500",
  },
  {
    id: "konvojen",
    title: "Konvojen - ",
    subtitle: " Äventyrare 12-14 år",
    description:
      "Vid 12 års ålder öppnas dörrarna till Äventyrarscouterna. I tre spännande år får man lära sig nyttiga saker inom sjömansskap och natur. (Tidigare hette äventyrarscout ”patrullscout”)",
    fullDescription: [
      "Vid 12 års ålder öppnas dörrarna till Äventyrarscouterna. I tre spännande år får man lära sig nyttiga saker inom sjömansskap och natur. (Tidigare hette äventyrarscout ”patrullscout”).",

      "Här börjar seglingen på allvar och det bär ut i skärgården om sommaren. När vi inte seglar tränar vi navigation och gör även traditionella landscoutaktiviteter.",

      "På vintern när det är som kallast har vi en rejäl vinterhajk då vi bor i tält. En annan höjdare är det traditionella isvaksbadet som ingen patrullscout slipper ifrån…",

      "Konvojen har möten på torsdagar.",
    ],
    image: "/images/department3.png",
    text: "text-orange-600",
    bg: "bg-orange-600",
    border: "lg:border-orange-600",
    outline: "outline-orange-600",
    shadow: "hover:shadow-orange-600",
  },
  {
    id: "utmanare",
    title: "Utmanare - ",
    subtitle: "15+ år",
    description:
      "HSS utmanarscoutlag upphör aldrig att existera! Efter tiden som utmanarscout är man ett tätt sammansvetsat gäng. Det är inte ovanligt att man håller kontakten livet ut. (Tidigare hette denna avdelning ”seniorscout”)",
    fullDescription: [
      "HSS utmanarscoutlag upphör aldrig att existera! Efter tiden som utmanarscout är man ett tätt sammansvetsat gäng. Det är inte ovanligt att man håller kontakten livet ut. (Tidigare hette denna avdelning ”seniorscout”).",

      "När man kommer upp från äventyrarscouterna bildar man ett lag tillsammans med kullkamraterna. Sedan arbetar man mot att lära sig nya saker och anta svårare utmaningar för att öka sammanhållningen.",

      "Under de första åren har man ledare med sig och allt eftersom man utvecklas blir man själv ledare på de andra avdelningarna.",

      "Utmanarscouterna seglar själva i skärgården när de uppnått tillräcklig kunskapsnivå.",

      "Varje utmanarscoutlag hittar på sitt eget namn (av tradition slutar de på -arne och laget kallas ”fjantarne” till dess att de kommit på ett eget namn).",

      "Mötena sker på tisdagar eller onsdagar.",
    ],
    image: "/images/department4.png",
    text: "text-pink-700",
    bg: "bg-pink-700",
    border: "lg:border-pink-700",
    outline: "outline-pink-700",
    shadow: "hover:shadow-pink-700",
  },
  {
    id: "familjescouting",
    title: "Familjescouting",
    subtitle: "",
    description:
      "Genom Familjescouting får barn under åtta år tillsammans med en eller flera vuxna på ett roligt och lekfullt sätt möta scouting. Familjescouting är dessutom ett utmärkt sätt att få in fler vuxna i kåren.",
    fullDescription: [
      "Familjescouting är till för barn under åtta år och en vuxen som barnet känner sig trygg med. Tillsammans upptäcker ni scouting genom lek, äventyr och roliga aktiviteter.",

      "Barn och vuxna är med sida vid sida och hjälps åt i aktiviteterna. Den vuxna ansvarar för barnet, men är också en viktig del av gemenskapen och deltar lika mycket som barnen.",

      "Den vuxna kan vara en förälder, mor- eller farförälder, släkting eller någon annan nära person.",

      "Fokus i Familjescouting är att barn och vuxna får uppleva saker tillsammans och stärka sin relation.",
    ],
    image: "/images/department5.png",
    text: "text-[#652482]",
    bg: "bg-[#652482]",
    border: "lg:border-[#652482]",
    outline: "outline-[#652482]",
    shadow: "hover:shadow-[#652482]",
  },
];
