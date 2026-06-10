type CtaId = 'becomeascout' | 'becomealeader' | 'rentacabin' | 'becomeapartner'

export type CallToAction = {
  id: CtaId
  image: string
  redirect: string
}

export const callToActionData: CallToAction[] = [
  {
    id: "becomeascout",
    image: "/images/001.jpg",
    redirect: "becomeascout",
  },
  {
    id: "becomealeader",
    image: "/images/002.png",
    redirect: "becomealeader",
  },
  {
    id: "rentacabin",
    image: "/images/003.png",
    redirect: "ourcabin",
  },
  {
    id: "becomeapartner",
    image: "/images/004.png",
    redirect: "becomeapartner",
  }
]