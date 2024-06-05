import Image from "next/image";
import { iPost } from "../iPost";
import { LoadingButton } from "@/components/ui/LoadingButton";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

interface iPostProps {
    post: iPost;
    slug: string
}

export function PostCard({ post, slug }: iPostProps) {
    return (
        <>
            <div className="w-full bg-card border rounded-md p-3">
                <div className="relative w-full h-56">
                    <Image fill src={`${post.image?.asset.url}`} alt={'Изображение поста'} className="w-full h-full object-cover object-center rounded-md" />
                </div>
                <div className="w-full">
                    <ul className="flex pt-2 flex-wrap gap-2">
                        {post?.tags.map((tag) => {
                            return (
                                <li key={tag._id} className="inline-flex">
                                    <span className="text-sm text-gray-400 cursor-default">#{tag.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <h3 className="text-lg font-medium text-white">{post.title}</h3>
                    <p className="text-gray-200 my-2">{post.text}</p>
                    <div className="w-full flex gap-2 mt-4">
                        <LoadingButton href={slug + post._id}>Подробнее</LoadingButton>
                    </div>
                </div>
            </div>
        </>
    );
}