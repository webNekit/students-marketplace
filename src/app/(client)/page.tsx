import { Hero } from "@/components/Hero/Hero";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback="Загрузка...">
        <PostItems />
      </Suspense>
    </>
  );
}
