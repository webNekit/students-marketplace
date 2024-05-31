import { PageSection } from '@/components/Sections/PageSection';
import React from 'react';
import { FilterSection } from '@/components/Sections/FilterSection';
import { Suspense } from "react";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { PostSkelton } from "@/components/Post/PostSkelton/PostSkelton";


export default function pageDesign({ searchParams } : { searchParams: {sort?: string | null} }) {
  return (
    <>
      <PageSection title='Макеты' text='Описание страницы макеты' />
      <FilterSection />
      <div className="container mx-auto">
        <Suspense fallback={<PostSkelton />}>
          <PostItems sort={`${searchParams.sort}`} limit={null} category={'Макеты'} detailSlug={'/design'} />
        </Suspense>
      </div>
    </>
  )
}
