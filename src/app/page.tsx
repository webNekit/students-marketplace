import { Hero } from "@/components/Hero/Hero";
import { ProductCard } from "@/components/ProductCard/ProductCard";


export default function Home() {
  return (
    <>
      <Hero />
      <ProductCard name="Название товара 1" />
    </>
  );
}
