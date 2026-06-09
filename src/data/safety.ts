export type SafetyItems = {
  id: string;
  image: string;
  pdfPath: string;
};

export const safetyData: SafetyItems[] = [
  {
    id: "policyOne",
    image: "/images/024.png",
    pdfPath: "/pdf/flytvästpolicy.pdf",
  },
  {
    id: "policyTwo",
    image: "/images/025.png",
    pdfPath: "/pdf/märkessystem.pdf",
  },
  {
    id: "policyThree",
    image: "/images/026.png",
    pdfPath: "/pdf/trygga-möten-policy.pdf",
  },
  {
    id: "policyFour",
    image: "/images/027.png",
    pdfPath: "",
  },
];
