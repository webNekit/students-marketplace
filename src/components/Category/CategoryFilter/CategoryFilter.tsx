import { Button } from "@/components/ui/button";
import { getAllCategory } from "@/services/ArticleCategoryService/getAllCategory";
import Link from "next/link";
import { iCategoryProps } from "../iCategory";
import { cn } from "@/lib/utils";


interface iCategoryParams {
    getCategory: string | null;
    className?: string;
}

export async function CategoryFilter({ getCategory, className } : iCategoryParams) {
    const categories: iCategoryProps[] = await getAllCategory();
    console.log(getCategory);
    return (
        <>
            <ul className={cn(className, "w-full flex items-center justify-start gap-5 overflow-x-scroll no-scrollbar")}>
                <li className="inline-flex">
                    <Button variant={getCategory == '' ? 'default' : 'ghost'} asChild>
                        <Link href={'/articles'} className="">Все статьи</Link>
                    </Button>
                </li>
                {categories?.map((category) => {
                    return (
                        <li key={category._id} className="inline-flex">
                            <Button variant={getCategory == category.slug?.current ? 'default' : 'ghost'} asChild>
                                <Link href={`/articles?category=${category.slug?.current}`} className="">{category.title}</Link>
                            </Button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}