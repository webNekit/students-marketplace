import { Hero } from "@/components/Hero/Hero";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { RecentSection } from "@/components/Sections/RecentSection";
import Link from "next/link";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <Hero />
      <RecentSection title="Макеты" href="/design">
        <Suspense fallback="Загрузка...">
          <PostItems limit={8} category={'Макеты'} />
        </Suspense>
      </RecentSection>
      <RecentSection title="Шаблоны" href="/template">
        <Suspense fallback="Загрузка...">
            <PostItems limit={8} category={'Шаблоны'} />
          </Suspense>
      </RecentSection>
      <RecentSection title="Библиотеки" href="/libs">
        <Suspense fallback="Загрузка...">
            <PostItems limit={8} category={'Библиотеки'} />
          </Suspense>
      </RecentSection>
    </>
  );
}
