import { ArticleSingle } from '@/components/Article/ArticleSingle/ArticleSingle';
import { iArticle } from '@/components/Article/iArticle';
import { GetById } from '@/services/ArticleService/getById';
import React, { Suspense } from 'react';

interface iPageProps {
    params: {
        pk: string;
    }
}

export default async function pageSingleArticle({ params } : iPageProps) {
    const article:iArticle = await GetById({ pk: params.pk })
  return (
    <>
        <Suspense fallback={'Загрузка...'}>
            <ArticleSingle article={article} />
        </Suspense>
    </>
  )
}
