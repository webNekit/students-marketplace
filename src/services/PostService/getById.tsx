import { client } from "../../../sanity/lib/client";

export interface iParams {
    pk: string
}

export async function getById({ pk }: iParams) {
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
              specifics[],
              contents[],
              downloadLink,
              previewLink,
              'categoryName' : category->title
          }`;
    const data = await client.fetch(query);
    return data;
}