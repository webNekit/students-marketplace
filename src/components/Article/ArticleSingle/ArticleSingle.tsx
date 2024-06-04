import Image from "next/image";
import { iArticle } from "../iArticle";

interface iSingleProps {
    article: iArticle;
}

export async function ArticleSingle({ article }: iSingleProps) {
    return (
        <section className="w-full py-7">
            <div className="container mx-auto">
                <div className="relative w-full h-[320px] md:h-[490px]">
                    <Image loading="lazy" fill src={`${article.image?.asset.url}`} alt={'Пример изображения записи'} className="w-full h-full object-cover object-center rounded-md" />
                </div>
                <div className="relative z-40 max-w-[calc(100%_-_20px)] md:max-w-4xl mx-auto px-4 bg-background -mt-20 rounded-md">
                    <div className="w-full pt-6 pb-2">
                        <ul className="flex items-center gap-4">
                            <li className="inline-flex">
                                <span className="text-gray-500">{article._createdAt.slice(0, 10)}</span>
                            </li>
                            <li className="inline-flex">
                                <span className="text-gray-500">{article.categoryName}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full py-4 space-y-4">
                        {article.contents.map((content) => {
                            return(
                                <p key={content._key} className="w-full text-gray-300 leading-7">{content.text}</p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}