import { PostSingle } from '@/components/Post/PostSingle/PostSingle';
import { iPost } from '@/components/Post/iPost';
import { getById } from '@/services/PostService/getById';
import React, { Suspense } from 'react';


export default async function pageSingleDesign({ params } : { params: {pk: string} }) {
  const post:iPost = await getById({pk: params.pk});
  return (
    <>
      <Suspense fallback={'Загрузка...'}>
        <PostSingle post={post} />
      </Suspense>
    </>
  )
}
