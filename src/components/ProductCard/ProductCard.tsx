import { client } from "../../../sanity/lib/client";
import { iPost } from "./iPost";

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

export async function ProductCard() {
    const posts:iPost[] = await getPosts();
    console.log(posts);
    return (
        <div className="w-full">
            {posts?.map((post) => {
                return (
                    <div key={post._id} className="">
                        {post.title}
                    </div>
                );
            })}
        </div>
    );
}