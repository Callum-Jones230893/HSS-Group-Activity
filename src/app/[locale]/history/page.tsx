import { HistoryData } from "@/data/history"
import HistoryCards from "@/components/HistoryCards"

const History = () => {
  return (
    <section className="flex flex-col w-9/10 mx-auto items-center justify-center lg:gap-28 my-10 lg:my-22">
      {HistoryData.map((item, index) => 
        <HistoryCards key={index} item={item} first={index === 0}/>
      )}
    </section>
  )
}

export default History