import { Suspense } from "react";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { PostSkelton } from "@/components/Post/PostSkelton/PostSkelton";

export function FilterSection() {
    return (
        <section className="w-full py-7">
            <div className="container mx-auto">
                <div className="w-full">
                    <Suspense fallback={<PostSkelton />}>
                        <PostItems limit={8} category={'Макеты'} detailSlug={'/design'} />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}