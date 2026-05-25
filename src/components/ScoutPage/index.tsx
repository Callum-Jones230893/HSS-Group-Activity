import CallToActionCard from "@/components/CallToActionCard"

type CallToAction = {
  title: string
  subtitle: string
  description: string
  image: string
  button: string
  link: string
}

const scout: CallToAction = {
  title: "Bli scout",
  subtitle: "I VÅR SCOUTKÅR!",
  description: "I Scouterna hittar du både utmaningar och nya kompisar, oavsett var du bor eller hur du gammal du är. Här kan du uppleva äventyr i naturen, upptäcka nya sätt att lösa problem eller bara ha kul tillsammans medan vi utforskar världen. Och du är självklart med och bestämmer vad vi ska hitta på.",
  image: "/images/001.jpg",
  button: "Bli scout",
  link: "Read more"
}

const leader: CallToAction = {
  title: "Bli en ledare",
  subtitle: "I VÅRT SCOUTLAG",
  description: "Som vuxen finns det utmärkta möjligheter att utvecklas som ledare hos oss. Du behöver inte vara en erfaren seglare för att delta i våra aktiviteter. Du behöver inte heller vara en gammal scout för att bli ledare. Det enda kravet är att du har ett genuint intresse för att arbeta med unga människor och att du är intresserad av att arbeta ideellt i en välfungerande scoutkår. Kåren bekostar den utbildning du behöver för att fungera bra som scoutledare.",
  image: "/images/002.png",
  button: "Bli ledare",
  link: "Läs mer"
}

const cabin: CallToAction = {
  title: "Hyr en mysig stuga",
  subtitle: "ATT UTFORSKA NATURENS FRIHET",
  description: "I Scouterna hittar du både utmaningar och nya kompisar, oavsett var du bor eller hur du gammal du är. Här kan du uppleva äventyr i naturen, upptäcka nya sätt att lösa problem eller bara ha kul tillsammans medan vi utforskar världen. Och du är självklart med och bestämmer vad vi ska hitta på.",
  image: "/images/003.png",
  button: "Hyr stuga",
  link: "Läs mer"
}

const partner: CallToAction = {
  title: "Bli partner",
  subtitle: "MED VÅR STOLTHET ÖVER NÄSTA LEDARE",
  description: "Som vuxen finns det utmärkta möjligheter att utvecklas som ledare hos oss. Du behöver inte vara en erfaren seglare för att delta i våra aktiviteter. Du behöver inte heller vara en gammal scout för att bli ledare. Det enda kravet är att du har ett genuint intresse för att arbeta med unga människor och att du är intresserad av att arbeta ideellt i en välfungerande scoutkår. Kåren bekostar den utbildning du behöver för att fungera bra som scoutledare.",
  image: "/images/004.png",
  button: "Bli partner",
  link: "Läs mer"
}

const callToActionData: CallToAction[] = [scout, leader, cabin, partner]

const ScoutPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-18 lg:gap-0">
      {callToActionData.map((item, index) => 
        <CallToActionCard key={index} item={item} />
      )}
    </div>
  )
}

export default ScoutPage