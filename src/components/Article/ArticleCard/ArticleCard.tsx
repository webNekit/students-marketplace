import Image from "next/image";
import { CalendarDays, MoveRight } from "lucide-react";
import Link from "next/link";
import { iArticle } from "../iArticle";

interface iArticleCardProps {
    article: iArticle;
    slug?: string;
}

export async function ArticleCard({ article, slug }: iArticleCardProps) {
    return (
        <article className="w-full h-96 md:h-[420px] relative rounded-md">
            <div className="absolute z-10 top-0 left-0 right-0 bottom-0 w-full h-full p-2 md:p-4 flex">
                <div className="w-full mt-auto p-4 rounded-md border bg-card">
                    <div className="flex items-center gap-4 pb-4">
                        <span className="text-white/80 text-sm flex items-center gap-1"><CalendarDays size={16}/> {article._createdAt.slice(0, 10)}</span>
                        <span className="text-white/80 text-sm">{article.categoryName}</span>
                    </div>
                    <div className="w-full space-y-1">
                        <Link href={slug + article._id} className="inline-block group">
                            <h3 className="text-white text-lg font-semibold transition-colors group-hover:text-primary"><MoveRight size={17} className="inline" /> {article.title}</h3>
                        </Link>
                        <p className="text-gray-400 text-sm pr-0 md:pr-14">{article.text}</p>
                    </div>
                </div>
            </div>
            <Image fill src={`${article.image?.asset.url}`} alt="Изображение" className="w-full h-full rounded-md object-cover object-center" />
        </article>
    );
}