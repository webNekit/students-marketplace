import { client } from "../../../../sanity/lib/client";
import { PostCard } from "../PostCard/PostCard";
import { iPost } from "../iPost";
async function getPosts() {
    const query = `
    *[_type == "post"] {
        title,
        slug,
        text,
        publishedAt,
      }
    `;
    const data = await client.fetch(query);
    return data;
}

export async function PostItems() {
    const posts:iPost[] = await getPosts();
    return (
        <>
            <div className="w-full bg-red-500 grid grid-cols-2 gap-2">
                {posts?.map((post) => {
                    return (    
                        <PostCard post={post} />
                    );
                })}
            </div>
        </>
    );
}