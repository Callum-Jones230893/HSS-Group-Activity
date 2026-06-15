import { put, head } from "@vercel/blob";
import { PLACEHOLDER_POSTS } from "@/data/instagram";

export type InstagramType = {
  timestamp: string;
  permalink: string;
  mediaUrl: string;
  caption: string;
  prunedCaption: string;
  mentions: string[];
  sizes: {
    small: {
      mediaUrl: string;
    };
  };
};

const vercelKey = "instagramBlob.json";
const instagramStaticData = PLACEHOLDER_POSTS;

export const instagramApi = async (): Promise<InstagramType[]> => {
  try {
    const response = await fetch(
      `https://feeds.behold.so/au47cEddhn57lA49VlAe`,
      {
        next: {
          revalidate: 86400,
        },
      },
    );
    if (!response.ok) {
      throw new Error("Error, please try again");
    }
    const data = await response.json();
    const feed: InstagramType[] = data.posts ?? [];

    if (feed.length > 0) {
      await put(vercelKey, JSON.stringify(feed), {
        access: "public",
        addRandomSuffix: false,
      });
    }
    return feed;
  } catch (error) {
    console.log("Error, using fallback", error);

    try {
      const vercelStorage = await head(vercelKey);
      const response = await fetch(vercelStorage.url);
      const vercelFeed = await response.json();

      if (vercelFeed.length > 0) return vercelFeed;
      throw new Error("Error, using static data");
    } catch {
      console.log("Error, using static data", error);

      return instagramStaticData;
    }
  }
};
