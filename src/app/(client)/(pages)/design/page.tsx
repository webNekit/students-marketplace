"use client";
import { PageSection } from '@/components/Sections/PageSection';
import React, { useState } from 'react';
import { Suspense } from "react";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { PostSkelton } from "@/components/Post/PostSkelton/PostSkelton";
import { FilterSection } from '@/components/Sections/FilterSection';

export default function pageDesign() {
  const [sort, setSort] = useState("desc");
  const handleSortChange = (sort:string) => {
    setSort(sort);
  }
  return (
    <>
      <PageSection title='Макеты' text='Описание страницы макеты' />
      <FilterSection onSortChange={handleSortChange}>
        <Suspense fallback={<PostSkelton />}>
          <PostItems sort='' limit={null} category={'Макеты'} detailSlug={'/design'} />
        </Suspense>
      </FilterSection>
    </>
  )
}
