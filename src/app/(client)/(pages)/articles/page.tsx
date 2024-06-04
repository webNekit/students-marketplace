import { ArticleItems } from '@/components/Article/ArticleItems/ArticleItems'
import { CategoryFilter } from '@/components/Category/CategoryFilter/CategoryFilter';
import { CategorySort } from '@/components/Category/CategorySort/CategorySort';
import { PageSection } from '@/components/Sections/PageSection'
import { Metadata } from 'next';
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Статьи',
  description: 'Откройте лучшие ресурсы для программистов и дизайнеров на нашей странице /design. Узнайте о последних тенденциях в веб-дизайне, получите полезные инструменты и советы для разработки интерфейсов. Ваше вдохновение начинается здесь!'
}

interface iPageProps {
  searchParams: {
    category?: string | null;
    sort?: string | null;
  }
}

export default function pageArticles({ searchParams }: iPageProps) {
  const category = searchParams.category ?? '';
  const sort = searchParams.sort ?? 'desc';
  return (
    <>
      <PageSection title={'Статьи и Новости'} text={'Описание страницы статьей и новостей'} img={'https://cdn1.ozone.ru/s3/multimedia-7/6450258595.jpg'} />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <div className="w-full space-y-10">
            <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-between gap-5">
              <Suspense fallback={'Загрузка'}>
                <CategoryFilter className='order-2 md:order-1' getCategory={category} />
              </Suspense>
              <CategorySort className='order-1 md:order-2' />
            </div>
            <div className="w-full">
              <Suspense fallback={'Загрузка...'}>
                <ArticleItems sort={sort} category={category} limit={null} detailSlug={'/articles'} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
