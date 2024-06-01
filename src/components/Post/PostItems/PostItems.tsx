import { getAllPost, iLimitProps } from "@/services/PostService/getAllPost";
import { PostCard } from "../PostCard/PostCard";
import { iPost } from "../iPost";


export async function PostItems({ limit, category, sort, detailSlug }: iLimitProps) {
    const posts:iPost[] = await getAllPost({limit, category, sort});
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