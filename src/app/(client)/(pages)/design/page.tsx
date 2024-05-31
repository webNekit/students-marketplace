import { PageSection } from '@/components/Sections/PageSection';
import React from 'react';
import { Suspense } from "react";
import { PostItems } from "@/components/Post/PostItems/PostItems";
import { PostSkelton } from "@/components/Post/PostSkelton/PostSkelton";
import { FilterSection } from '@/components/Sections/FilterSection';

export default function pageDesign() {
  return (
    <>
      <PageSection title='Макеты' text='Описание страницы макеты' />
      <FilterSection />
    </>
  )
}
