import DepartmentCards from "@/components/DepartmentCards"
import { DepartmentData } from "@/data/department"

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