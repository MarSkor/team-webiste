import {DiscussionEmbed} from "disqus-react"
import { useRouter } from 'next/router'


const DisqusComments = (article) => {
    const router = useRouter()

    // console.log("router.asPath", router.asPath)
    
    const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME

    const disqusConfig = {
        url: `https://team-webiste-qihzl617j-marskor.vercel.app//${router.asPath}`,
        identifier: article._id,
        title: article.title 
    }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;
