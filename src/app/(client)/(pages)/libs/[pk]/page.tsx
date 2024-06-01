import { PostSingle } from '@/components/Post/PostSingle/PostSingle'
import { getById } from '@/services/PostService/getById'
import React, { Suspense } from 'react'

export default async function pageSingleLib({ params } : { params: {pk: string} }) {
  const post = await getById({pk : params.pk})
  return (
    <Suspense fallback={'Загрузка...'}>
      <PostSingle post={post} />
    </Suspense>
  )
}
