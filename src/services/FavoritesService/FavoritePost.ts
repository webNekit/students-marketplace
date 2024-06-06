import { client } from "../../../sanity/lib/client";

export interface iParams {
    userId?: string | null
}

export async function getAllFavorites({ userId }: iParams) {
    const query = `
    *[_type == 'favorites' && userId == '${userId}']{
        _id,
        _createdAt,
            postId -> {
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
            }
        }`;
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return data
}