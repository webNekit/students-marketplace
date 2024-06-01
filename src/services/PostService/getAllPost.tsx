import { client } from "../../../sanity/lib/client";

export interface iLimitProps {
    limit: number | null;
    category: string;
    sort?: string;
    detailSlug?: string | null;
}

export async function getAllPost({ limit, category, sort = 'desc' }: iLimitProps) {
    const query = `
    *[_type == "post" && category->title == "${category}"] | order(_createdAt ${sort}) ${limit ? `[0...${limit}]` : ''} {
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
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return data;
}
