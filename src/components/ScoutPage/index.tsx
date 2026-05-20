import CallToActionCard from "@/components/CallToActionCard"

type CallToAction = {
  title: string
  subtitle: string
  description: string
  image: string
  link: string
}

const scout: CallToAction = {
  title: "Become a member",
  subtitle: "OF OUR ADVENTURE GROUP OF FRIENDS",
  description: "I Scouterna hittar du både utmaningar och nya kompisar, oavsett var du bor eller hur du gammal du är. Här kan du uppleva äventyr i naturen, upptäcka nya sätt att lösa problem eller bara ha kul tillsammans medan vi utforskar världen. Och du är självklart med och bestämmer vad vi ska hitta på.",
  image: "/images/001.jpg",
  link: "Read more"
}

const leader: CallToAction = {
  title: "Become a leader",
  subtitle: "IN SCOUTING TROUPE WITH POWER",
  description: "Som vuxen finns det utmärkta möjligheter att utvecklas som ledare hos oss. Du behöver inte vara en erfaren seglare för att delta i våra aktiviteter. Du behöver inte heller vara en gammal scout för att bli ledare. Det enda kravet är att du har ett genuint intresse för att arbeta med unga människor och att du är intresserad av att arbeta ideellt i en välfungerande scoutkår. Kåren bekostar den utbildning du behöver för att fungera bra som scoutledare.",
  image: "/images/002.png",
  link: "Read more"
}

const cabin: CallToAction = {
  title: "Rent a cozy cabin",
  subtitle: "TO EXPLORE THE FREEDOM OF NATURE",
  description: "I Scouterna hittar du både utmaningar och nya kompisar, oavsett var du bor eller hur du gammal du är. Här kan du uppleva äventyr i naturen, upptäcka nya sätt att lösa problem eller bara ha kul tillsammans medan vi utforskar världen. Och du är självklart med och bestämmer vad vi ska hitta på.",
  image: "/images/003.png",
  link: "Read more"
}

const partner: CallToAction = {
  title: "Become a partner",
  subtitle: "WITH OUR PRIDE OF NEXT LEADERS",
  description: "Som vuxen finns det utmärkta möjligheter att utvecklas som ledare hos oss. Du behöver inte vara en erfaren seglare för att delta i våra aktiviteter. Du behöver inte heller vara en gammal scout för att bli ledare. Det enda kravet är att du har ett genuint intresse för att arbeta med unga människor och att du är intresserad av att arbeta ideellt i en välfungerande scoutkår. Kåren bekostar den utbildning du behöver för att fungera bra som scoutledare.",
  image: "/images/004.png",
  link: "Read more"
}

const callToActionData: CallToAction[] = [scout, leader, cabin, partner]

const ScoutPage = () => {
  return (
    <div className="mx-auto w-full">
      {callToActionData.map((item, index) => 
        <CallToActionCard key={index} item={item} />
      )}
    </div>
  )
}

export default ScoutPage