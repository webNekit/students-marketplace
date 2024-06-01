import { PageSection } from '@/components/Sections/PageSection'
import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { FilterSection } from '@/components/Sections/FilterSection';
import { PostItems } from '@/components/Post/PostItems/PostItems';
import { PostSkelton } from '@/components/Post/PostSkelton/PostSkelton';

export const metadata: Metadata = {
  title: 'Шаблоны',
  description: 'Откройте лучшие ресурсы для программистов и дизайнеров на нашей странице /design. Узнайте о последних тенденциях в веб-дизайне, получите полезные инструменты и советы для разработки интерфейсов. Ваше вдохновение начинается здесь!'
}

export default function pageTemplate({ searchParams } : { searchParams: {sort?: string | null} }) {
  const sort = searchParams.sort || 'desc';
  return (
    <>
      <PageSection title={'Шаблоны'} text={'Страница для раздела шаблоны'} img={'https://i.pinimg.com/originals/07/4c/64/074c644f89fb4cb8fac261d85e2b9ee8.png'} />
      <FilterSection />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <div className="w-full">
            <Suspense fallback={<PostSkelton />}>
              <PostItems sort={`${sort}`} limit={null} category={'Шаблоны'} detailSlug={'/template'} />
            </Suspense>
          </div>
        </div>
      </section>
    </>    
  )
}
