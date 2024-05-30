import { PostSingle } from '@/components/Post/PostSingle/PostSingle';
import React, { Suspense } from 'react';
import { client } from '../../../../../../sanity/lib/client';

interface iParams {
  pk: string
}

async function getSinglePost({ pk } : iParams) {
  const query = `
  *[_type == 'post' && _id == '${pk}'][0]{
    _id,
          title,
          slug,
          text,
          image {
              asset -> {
                _id,
                url
              }
            },
          publishedAt,
          tags[] -> {
              _id,
              slug {
                current
              },
              name
            },
            'categoryName' : category->title
        }`;
  const data = await client.fetch(query);
  return data;
}

export default async function pageSingleDesign({ params } : { params: {pk: string} }) {
  const post = await getSinglePost({pk: params.pk});
  console.log(post)
  return (
    <>
      <Suspense fallback={'Загрузка...'}>
        <PostSingle post={post} />
      </Suspense>
    </>
  )
}
