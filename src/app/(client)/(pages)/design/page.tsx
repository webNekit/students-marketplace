import { PageSection } from '@/components/Sections/PageSection';
import React from 'react';
import { FilterSection } from '@/components/Sections/FilterSection';
import { Suspense } from "react";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { PostSkelton } from "@/components/Post/PostSkelton/PostSkelton";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Макеты',
  description: 'Откройте лучшие ресурсы для программистов и дизайнеров на нашей странице /design. Узнайте о последних тенденциях в веб-дизайне, получите полезные инструменты и советы для разработки интерфейсов. Ваше вдохновение начинается здесь!'
}


export default function pageDesign({ searchParams }: { searchParams: { sort?: string | null } }) {
  const sort = searchParams.sort || 'desc';
  return (
    <>
      <PageSection title='Макеты' text='Описание страницы макеты' img={'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eed4f1110163487.603d2796bcb50.jpg'} />
      <FilterSection />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <div className="w-full">
            <Suspense fallback={<PostSkelton />}>
              <PostItems sort={`${sort}`} limit={null} category={'Макеты'} detailSlug={'/design'} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
