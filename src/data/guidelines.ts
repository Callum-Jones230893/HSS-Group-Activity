export type Guidelines = {
  title: string
  descriptionOne: string
  descriptionTwo: string
}

export type Policies = {
  id: string
  title: string
  description: string
  link: string
}

export const guidlines: Guidelines = {
  title: "Säkerhet och allmänna riktlinjer för scouter",
  descriptionOne: "Självklart får det aldrig bli farligt - men vi kan inte ta bort alla riskmoment. Istället behöver vi använda vår fantasi för att tänka till innan vi genomför olika aktiviteter.",
  descriptionTwo: "Inga säkerhetsregler i världen hjälper när olyckan redan har hänt. Därför är det viktigt att du som är ledare och ansvarig för verksamhet i Scouterna har förberett dig och din grupp väl innan ni ger er iväg på äventyr."
}

export const policies: Policies[] = [
  {
    id: "policyOne",
    title: "HSS flytvästpolicy",
    description: "Koppling till HSS Krisplan och Scouternas riktlinjer i “Säker Scout”. För att kunna ge alla scouter, och deras vårdnadshavare, tydliga direktiv i vilken typ av flytväst HSS rekommenderar, har HSS styrelse tagit fram denna policy.",
    link: "Ladda ner den här (pdf)"
  },
  {
    id: "policyTwo",
    title: "HSS märkessystem",
    description: "För att alla scouter i HSS ska få möjlighet att ta märken på rätt termin har styrelsen beslutat om följande märkessystem den 14 januari 2025. Avdelningarna får självklart bestämma annorlunda, men tänk på att det kan bli krångligt för nästa gäng ...",
    link: "Ladda ner den här (pdf)"
  },
  {
    id: "policyThree",
    title: "HSS Trygga möten policy",
    description: "Scouterna centralt initierade arbetet med Trygga Möten 2005 för att stärka ledare i att agera när barn och unga far illa. Målet är att ha en bred kunskap om potentiella risker för att förebygga diskriminering och övergrepp.",
    link: "Ladda ner den här (pdf)"
  },
  {
    id: "policyFour",
    title: "Vår fotopolicy",
    description: "Vi fotograferar våra aktiviteter och använder bilderna på vår hemsida och i sociala medier för att göra reklam för vår verksamhet. Vi publicerar aldrig namn på våra scouter. Genom att vara medlem i HSS samtycker man till detta.",
    link: "Ladda ner den här (pdf)"
  }
]