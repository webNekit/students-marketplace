import { Button } from "@/components/ui/button";
import { getAllCategory } from "@/services/ArticleCategoryService/getAllCategory";
import Link from "next/link";
import { iCategoryProps } from "../iCategory";


interface iCategoryParams {
    getCategory: string | null;
}

export async function CategoryFilter({ getCategory } : iCategoryParams) {
    const categories: iCategoryProps[] = await getAllCategory();
    console.log(getCategory);
    return (
        <>
            <ul className="flex items-center justify-center gap-5">
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