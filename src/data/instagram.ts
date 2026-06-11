export type InstagramPost = {
  id: string;
  image: string;
  link: string;
  date: string;
};

export const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    id: "001",
    image: "/images/002.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "002",
    image: "/images/018.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "003",
    image: "/images/003.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "004",
    image: "/images/019.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "005",
    image: "/images/006.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
  {
    id: "006",
    image: "/images/016.png",
    link: "https://www.instagram.com/hss_scout/",
    date: new Date().toISOString(),
  },
];
