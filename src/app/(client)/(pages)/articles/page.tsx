import { ArticleItems } from '@/components/Article/ArticleItems/ArticleItems'
import { PageSection } from '@/components/Sections/PageSection'
import React, { Suspense } from 'react'

interface iPageProps {
  searchParams: {
    category?: string | null;
    sort?: string | null;
  }
}

export default function pageArticles({ searchParams } : iPageProps) {
  const category = searchParams.category ?? '';
  const sort = searchParams.sort ?? 'desc';
  return (
    <>
      <PageSection title={'Статьи и Новости'} text={'Описание страницы статьей и новостей'} img={'https://cdn1.ozone.ru/s3/multimedia-7/6450258595.jpg'} />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <div className="w-full">
            <Suspense fallback={'Загрузка...'}>
              <ArticleItems sort={`${sort}`} category={category} limit={null} detailSlug={'/articles'} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
