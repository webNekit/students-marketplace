import { client } from "../../../../sanity/lib/client";
import { PostCard } from "../PostCard/PostCard";
import { iPost } from "../iPost";

interface iLimitProps {
    limit: number | null;
}

async function getPosts({ limit } : iLimitProps) {
    const query = `
    *[_type == "post"] | order(publishedAt desc) ${limit ? `[0...${limit}]` : ''} {
        _id,
        title,
        slug,
        text,
        image {
            asset -> {
              _id,
              url
            }
          },
        publishedAt,
        tags[] -> {
            _id,
            slug {
              current
            },
            name
          }
      }`;
    const data = await client.fetch(query);
    return data;
}

export async function PostItems({ limit }: iLimitProps) {
    const posts:iPost[] = await getPosts({limit});
    return (
        <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {posts?.map((post) => {
                    return (    
                       <PostCard key={post._id} post={post} slug="/design/" />
                    );
                })}
            </div>
        </>
    );
}