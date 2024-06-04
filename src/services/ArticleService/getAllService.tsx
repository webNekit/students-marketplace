import { client } from "../../../sanity/lib/client";

export interface iArticleProps {
    limit: number | null;
    detailSlug?: string | null;
    sort?: string | null;
    category?: string | null;
}

export async function getAllArticles({ limit, detailSlug, sort = 'desc', category = null }: iArticleProps) {
    const query = `
    *[_type == 'article' ${category ? `&& category->slug.current == "${category}"` : ''}] | order(_createdAt ${sort}) ${limit ? `[0...${limit}]` : ''} {
    _id,
    _createdAt,
     title,
      text,
      contents[],
      'categorySlug' : category->slug {
        current
      },
      'categoryName' : category->title,
      image {
        asset -> {
          _id,
            url
        }
      },
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
  return data;
}