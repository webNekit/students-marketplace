import Image from "next/image";
import { iPost } from "../iPost";
import { LoadingButton } from "@/components/ui/LoadingButton";

interface iPostProps {
    post: iPost;
    slug: string
}

export function PostCard({ post, slug }: iPostProps) {
    return (
        <>
            <div className="w-full h-full bg-card border rounded-md p-3">
                <div className="relative w-full h-56">
                    <Image fill src={`${post.image?.asset.url}`} alt={'Изображение поста'} className="w-full h-full object-cover object-center rounded-md" />
                </div>
                <div className="w-full h-[calc(100%_-_224px)] flex flex-col">
                    <ul className="flex pt-2 flex-wrap gap-1">
                        {post?.tags.map((tag) => {
                            return (
                                <li key={tag._id} className="inline-flex">
                                    <span className="text-[14px] text-gray-400 cursor-default">#{tag.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <h3 className="text-lg font-medium text-white">{post.title}</h3>
                    <p className="text-gray-200 mt-2 mb-4">{post.text}</p>
                    <div className="w-full flex gap-2 mt-auto">
                        <LoadingButton href={slug + post._id}>Подробнее</LoadingButton>
                    </div>
                </div>
            </div>
        </>
    );
}