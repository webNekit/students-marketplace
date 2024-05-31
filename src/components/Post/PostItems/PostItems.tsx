import { client } from "../../../../sanity/lib/client";
import { PostCard } from "../PostCard/PostCard";
import { iPost } from "../iPost";

interface iLimitProps {
    limit: number | null;
    category: string;
    detailSlug?: string | null;
}

async function getPosts({ limit, category } : iLimitProps) {
    const query = `
    *[_type == "post" && category->title == "${category}"] | order(_createdAt desc) ${limit ? `[0...${limit}]` : ''} {
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
          },
            'categoryName' : category->title
      }`;
    const data = await client.fetch(query);
    return data;
}

export async function PostItems({ limit, category, detailSlug }: iLimitProps) {
    const posts:iPost[] = await getPosts({limit, category});
    return (
        <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {posts.length > 0 ? posts?.map((post) => {
                    return (    
                       <PostCard key={post._id} post={post} slug={`${detailSlug}/`} />
                    );
                }) : <p className="sm:col-span-2 md:col-span-4 text-wite text-xl text-destructive">Этот раздел редактируется. Приносим свои извинения!</p>}
            </div>
        </>
    );
}