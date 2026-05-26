export type InstagramType = {
  timestamp: string
  permalink: string
  mediaUrl: string
  caption: string
  prunedCaption: string
  mentions: string[]
  sizes: {
    small: {
      mediaUrl: string
    }
  }
}

export async function instagramApi(): Promise<InstagramType[]> {
  try {
    const response = await fetch(`https://feeds.behold.so/bL8BpV4aqEvuArQToGd0`, { 
      next: {
          revalidate: 3600
        }
      }
    )
    
    if (!response.ok) {
      throw new Error("Error, please try again")
    }
    
    const data = await response.json()
    const feed: InstagramType[] = data.posts ?? []

    return feed

  } catch (error) {
    console.log("Error, please try again")

    return []
  }
}