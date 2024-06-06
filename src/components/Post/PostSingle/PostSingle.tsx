import Image from "next/image";
import { iPost } from "../iPost";
import { BadgeCheck, Eye, ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FavoritesButton } from "@/components/ui/FavoritesButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface iSingleProps {
    post: iPost;
}

export async function PostSingle({ post }: iSingleProps) {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isLoginUser = await isAuthenticated();
    const user = await getUser();
    return (
        <>
            <section className='w-full py-7 border-b'>
                <div className="container mx-auto">
                    <div className="flex items-end justify-between flex-col md:flex-row gap-4">
                        <div className="w-full space-y-2">
                            <span className="text-gray-500 text-lg">{post.categoryName}</span>
                            <h1 className='text-white text-xl md:text-3xl'>{post.title}</h1>
                            <ul className="flex flex-wrap gap-2 max-w-2xl">
                                {post.tags?.map((tag) => {
                                    return (
                                        <li key={tag._id} className="inline-flex">
                                            <span>#{tag.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <ul className="flex items-center gap-2 w-full sm:w-auto">
                            {isLoginUser ?
                                    <li className="inline-flex w-full sm:w-auto">
                                        <FavoritesButton userId={user?.id} postId={post._id} categoryId={post.categoryId?._id} />
                                    </li>
                                :
                                ''
                            }
                            <li className="inline-flex w-full sm:w-auto">
                                <Button variant={'outline'} asChild className="w-full sm:w-auto">
                                    <Link href={`${post.previewLink}`} target="_blank" className="flex items-center gap-2 w-full sm:w-auto">
                                        <Eye size={20} />Предпросмотр</Link>
                                </Button>
                            </li>
                            <li className="inline-flex w-full sm:w-auto">
                                <Button variant={'default'} asChild className="w-full sm:w-auto">
                                    <Link href={`${post.downloadLink}`} target="_blank" className="flex items-center gap-2 w-full sm:w-auto">
                                        <ArrowDownToLine size={20} />Скачать</Link>
                                </Button>
                            </li>
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
            <section className="w-full py-7">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="w-full grid grid-cols-12 gap-5">
                        <div className="col-span-12 order-2 md:col-span-7 md:order-1">
                            <h2 className="text-gray-50 text-xl font-semibold md:text-3xl">Описание</h2>
                            <div className="w-full pt-4 space-y-4">
                                {post.contents?.map((content) => {
                                    return (
                                        <p key={content._key} className="text-gray-300 leading-7">{content.text}</p>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-span-12 order-1 md:col-span-5 md:order-2">
                            <div className="w-full sticky top-4 left-0">
                                <h2 className="text-gray-50 text-xl font-semibold md:text-2xl">Характеристики</h2>
                                <ul className="w-full pt-3 space-y-1">
                                    {post.specifics?.map((specific) => {
                                        return (
                                            <li key={specific._key} className="flex items-center gap-2">
                                                <BadgeCheck size={18} className="text-green-500" />
                                                <span className="text-gray-400">{specific.title}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
