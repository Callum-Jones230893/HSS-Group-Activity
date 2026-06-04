type DepartmentId = 'sjohumlor' | 'kaparna' | 'konvojen' | 'utmanare' | 'familjescouting'

export type DepartmentItemType = {
  id: DepartmentId
  image: string
  text: string
  bg: string
  border: string
  outline: string
  shadow: string
}

export const DepartmentData: DepartmentItemType[] = [
    {
    id: "familjescouting",
    image: "/images/department5.png",
    text: "text-[#652482]",
    bg: "bg-[#652482]",
    border: "lg:border-[#652482]",
    outline: "outline-[#652482]",
    shadow: "hover:shadow-[#652482]"
  },
  {
    id: "sjohumlor",
    image: "/images/department1.png",
    text: "text-lime-600",
    bg: "bg-lime-600",
    border: "lg:border-lime-600/50",
    outline: "outline-lime-600/50",
    shadow: "hover:shadow-lime-600/50",
  },
  {
    id: "kaparna",
    image: "/images/department2.png",
    text: "text-sky-500",
    bg: "bg-sky-500",
    border: "lg:border-sky-500",
    outline: "outline-sky-500",
    shadow: "hover:shadow-sky-500",
  },
  {
    id: "konvojen",
    image: "/images/department3.png",
    text: "text-orange-600",
    bg: "bg-orange-600",
    border: "lg:border-orange-600",
    outline: "outline-orange-600",
    shadow: "hover:shadow-orange-600",
  },
  {
    id: "utmanare",
    image: "/images/department4.png",
    text: "text-pink-700",
    bg: "bg-pink-700",
    border: "lg:border-pink-700",
    outline: "outline-pink-700",
    shadow: "hover:shadow-pink-700",
  },
] 
