import Image from "next/image";
import { iPost } from "../iPost";

interface iSingleProps {
    post: iPost;
}

export async function PostSingle({ post } : iSingleProps) {
    return (
        <>
            <section className='w-full py-7 border-b'>
                <div className="container mx-auto">
                    <div className="w-full space-y-2">
                        <span className="text-gray-500 text-lg">{post.categoryName}</span>
                        <h1 className='text-white text-xl md:text-3xl'>{post.title}</h1>
                        <ul className="flex flex-wrap gap-2 max-w-2xl">
                            {post.tags?.map((tag) => {
                                return(
                                    <li className="inline-flex">
                                        <span>#{tag.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="container mx-auto">
                    <div className="relative w-full h-[50vh] md:h-[65vh]">
                        <Image fill src={`${post.image?.asset.url}`} alt={post.title} className="w-full h-full object-cover object-center" />
                    </div>
                </div>
            </section>
        </>
    );
}
