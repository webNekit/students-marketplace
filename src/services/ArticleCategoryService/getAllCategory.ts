import { client } from "../../../sanity/lib/client";

export async function getAllCategory(){
    const query = `
    *[_type == 'articleCategory'] {
        _id,
        _createdAt,
        title,
        slug
      }`;

      const data = await client.fetch(query, {}, { next: { revalidate:0 } });
      return data;
}