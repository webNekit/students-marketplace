import { Hero } from "@/components/Hero/Hero";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback="Загрузка...">
        <ProductCard />
      </Suspense>
    </>
  );
}
