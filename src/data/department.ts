export type DepartmentItemType = {
  id: string
  image: string
  text: string
  border: string
  outline: string
}

export const DepartmentData: DepartmentItemType[] = [
  {
    id: "sjohumlor",
    image: "/images/department1.png",
    text: "text-lime-600",
    border: "lg:border-lime-600/50",
    outline: "outline-lime-600/50"
  },
  {
    id: "kaparna",
    image: "/images/department2.png",
    text: "text-sky-500",
    border: "lg:border-sky-500",
    outline: "outline-sky-500"
  },
  {
    id: "konvojen",
    image: "/images/department3.png",
    text: "text-orange-600",
    border: "lg:border-orange-600",
    outline: "outline-orange-600"
  },
  {
    id: "utmanare",
    image: "/images/department4.png",
    text: "text-pink-700",
    border: "lg:border-pink-700",
    outline: "outline-pink-700"
  },
  // {
  //   id: "",
  //   image: "/images/department5.png",
  //   text: "",
  //   border: "",
  //   outline: ""
  // }
] 