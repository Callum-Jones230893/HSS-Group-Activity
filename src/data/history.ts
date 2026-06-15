type HistoryId =
  | "intro"
  | "boatHistory"
  | "buildingMyset"
  | "expanding"
  | "today";

export type HistoryType = {
  id: HistoryId;
  image: string;
};

export const HistoryData: HistoryType[] = [
  {
    id: "intro",
    image: "/images/hss_logo.png",
  },
  {
    id: "boatHistory",
    image: "/images/020.png",
  },
  {
    id: "buildingMyset",
    image: "/images/021.png",
  },
  {
    id: "expanding",
    image: "/images/022.png",
  },
  {
    id: "today",
    image: "/images/023.png",
  },
];
