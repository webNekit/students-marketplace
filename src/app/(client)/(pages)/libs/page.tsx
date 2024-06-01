import { PostItems } from '@/components/Post/PostItems/PostItems';
import { PostSkelton } from '@/components/Post/PostSkelton/PostSkelton';
import { FilterSection } from '@/components/Sections/FilterSection';
import { PageSection } from '@/components/Sections/PageSection';
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Библиотеки',
  description: 'Откройте лучшие ресурсы для программистов и дизайнеров на нашей странице /design. Узнайте о последних тенденциях в веб-дизайне, получите полезные инструменты и советы для разработки интерфейсов. Ваше вдохновение начинается здесь!'
}

export default function pageLibs({ searchParams } : { searchParams: {sort?: string | null} }) {
  const sort = searchParams.sort || 'desc';
  return (
    <>
      <PageSection title='Библиотеки' text='Описание страницы библиотеки' img={'https://cerenas.club/uploads/posts/2022-12/1669896197_cerenas-club-p-fon-dlya-programmista-instagram-47.jpg'} />
      <FilterSection />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <div className="w-full">
            <Suspense fallback={<PostSkelton />}>
              <PostItems sort={`${sort}`} limit={null} category={'Библиотеки'} detailSlug={'/libs'} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
