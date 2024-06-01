import { getAllArticles, iArticleProps } from "@/services/ArticleService/getAllService";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { iArticle } from "../iArticle";

export async function ArticleItems({ limit, detailSlug, sort, category } : iArticleProps) {
    const articles : iArticle[] = await getAllArticles({limit, detailSlug, sort, category})
    return (
        <>
            <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {articles.length > 0 ? articles?.map((article) => {
                    return(
                        <ArticleCard key={article._id} article={article} slug={`${detailSlug}/`} />
                    );
                }) : <p className="sm:col-span-2 md:col-span-4 text-wite text-xl text-destructive">Этот раздел редактируется. Приносим свои извинения!</p>}
            </div>
        </>
    );
}