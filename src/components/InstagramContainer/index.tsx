import { instagramApi } from "@/utils/instagramFetch";
import InstagramSlider from "../InstagramSlider";

const InstagramContainer = async () => {
  const feed = await instagramApi();

  return <InstagramSlider feed={feed} />;
};

export default InstagramContainer;
