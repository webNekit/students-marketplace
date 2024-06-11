import { client } from "../../../sanity/lib/client";

export interface iParams {
  pk: string;
}

export async function GetById({ pk }: iParams) {
  const query = `*[_type == 'article' && _id == '${pk}'][0] {
        _id,
          _createdAt,
           title,
            text,
             contents[] {
             _key,
                title,
                text,
                image {
                asset->{
                  url
                }
                }
              },
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
  const data = await client.fetch(query);
  return data;
}