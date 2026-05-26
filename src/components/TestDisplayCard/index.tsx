import { instagramApi } from "@/hooks/instagram"
const feed = await instagramApi()

const TestDisplayCard = () => {
  return (
    feed.map((post, index) => 
      <div key={index}>
        <h1>{post.caption}</h1>
        <p>{post.permalink}</p>
      </div>
    )
  )
}

export default TestDisplayCard