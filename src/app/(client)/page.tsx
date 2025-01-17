import { ArticleItems } from "@/components/Article/ArticleItems/ArticleItems";
import { ArticleSkelton } from "@/components/Article/ArticleSkelton/ArticleSkelton";
import { Hero } from "@/components/Hero/Hero";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { PostSkelton } from "@/components/Post/PostSkelton/PostSkelton";
import { RecentSection } from "@/components/Sections/RecentSection";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <Hero />
      <RecentSection title="Макеты" href="/design">
        <Suspense fallback={<PostSkelton />}>
          <PostItems limit={8} category={'Макеты'} detailSlug={'/design'} />
        </Suspense>
      </RecentSection>
      <RecentSection title="Шаблоны" href="/template">
        <Suspense fallback={<PostSkelton />}>
          <PostItems limit={8} category={'Шаблоны'} detailSlug={'/template'} />
        </Suspense>
      </RecentSection>
      <RecentSection title="Библиотеки" href="/libs">
        <Suspense fallback={<PostSkelton />}>
          <PostItems limit={8} category={'Библиотеки'} detailSlug={'/libs'}/>
        </Suspense>
      </RecentSection>
      <RecentSection title="Статьи" href="/articles">
        <Suspense fallback={<ArticleSkelton />}>
          <ArticleItems limit={6} detailSlug={'/articles'} sort={'desc'} />
        </Suspense>
      </RecentSection>
    </>
  );
}
