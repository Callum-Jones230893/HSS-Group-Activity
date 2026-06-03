import CallToActionCard from "@/components/CallToActionCard"
import { callToActionData } from "@/data/intro"

const ScoutPage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 lg:gap-0">
      {callToActionData.map((item, index) => 
        <CallToActionCard key={index} item={item} />
      )}
    </div>
  )
}

export default ScoutPage