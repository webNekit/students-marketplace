import { getAllCategory } from "@/services/ArticleCategoryService/getAllCategory";
import { iCategoryProps } from "../iCategory";
import Link from "next/link";

export async function CategoryFooter() {
    const categories: iCategoryProps[] = await getAllCategory();
    return (
        <ul className="w-full space-y-3">
            {categories.length > 0 ? categories.map((category) => {
                return(
                    <li key={category._id} className="w-full">
                        <Link href={'/articles'} className="hover:underline">{category.title}</Link>
                    </li>
                );
            }) : <p className="sm:col-span-2 md:col-span-4 text-wite text-xl text-destructive">Этот раздел редактируется. Приносим свои извинения!</p>}
        </ul>
    );
}