export type CallToAction = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  button: string
  redirect: string
  readMore: string
}

export const callToActionData: CallToAction[] = [
  {
    id: "becomeascout",
    title: "Become a member",
    subtitle: "OF OUR ADVENTURE GROUP OF FRIENDS",
    description: "I Scouterna hittar du både utmaningar och nya kompisar, oavsett var du bor eller hur du gammal du är. Här kan du uppleva äventyr i naturen, upptäcka nya sätt att lösa problem eller bara ha kul tillsammans medan vi utforskar världen. Och du är självklart med och bestämmer vad vi ska hitta på.",
    image: "/images/001.jpg",
    button: "Become a scout",
    redirect: "becomeascout",
    readMore: "Read more"
  },
  {
    id: "becomealeader",
    title: "Become a leader",
    subtitle: "IN SCOUTING TROUPE WITH POWER",
    description: "Som vuxen finns det utmärkta möjligheter att utvecklas som ledare hos oss. Du behöver inte vara en erfaren seglare för att delta i våra aktiviteter. Du behöver inte heller vara en gammal scout för att bli ledare. Det enda kravet är att du har ett genuint intresse för att arbeta med unga människor och att du är intresserad av att arbeta ideellt i en välfungerande scoutkår. Kåren bekostar den utbildning du behöver för att fungera bra som scoutledare.",
    image: "/images/002.png",
    button: "Become a leader",
    redirect: "becomealeader",
    readMore: "Read more"
  },
  {
    id: "rentacabin",
    title: "Rent a cozy cabin",
    subtitle: "TO EXPLORE THE FREEDOM OF NATURE",
    description: "I Scouterna hittar du både utmaningar och nya kompisar, oavsett var du bor eller hur du gammal du är. Här kan du uppleva äventyr i naturen, upptäcka nya sätt att lösa problem eller bara ha kul tillsammans medan vi utforskar världen. Och du är självklart med och bestämmer vad vi ska hitta på.",
    image: "/images/003.png",
    button: "Rent a cabin",
    redirect: "reserveacamp",
    readMore: "Read more"
  },
  {
    id: "becomeapartner",
    title: "Become a partner",
    subtitle: "WITH OUR PRIDE OF NEXT LEADERS",
    description: "Som vuxen finns det utmärkta möjligheter att utvecklas som ledare hos oss. Du behöver inte vara en erfaren seglare för att delta i våra aktiviteter. Du behöver inte heller vara en gammal scout för att bli ledare. Det enda kravet är att du har ett genuint intresse för att arbeta med unga människor och att du är intresserad av att arbeta ideellt i en välfungerande scoutkår. Kåren bekostar den utbildning du behöver för att fungera bra som scoutledare.",
    image: "/images/004.png",
    button: "Become a partner",
    redirect: "becomeapartner",
    readMore: "Read more"
  }
]
