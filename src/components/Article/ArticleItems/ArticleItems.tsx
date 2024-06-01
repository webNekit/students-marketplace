import { iArticleProps } from "@/services/ArticleService/getAllService";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export function ArticleItems({ limit, detailSlug, sort } : iArticleProps) {
    return (
        <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <ArticleCard />
            </div>
        </>
    );
}