import { defineType } from "sanity";

export const tag = defineType({
    name: 'tag',
    title: 'Тег',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Название',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'URL - адрес',
            type: 'slug',
            options: { source: 'name' }
        }
    ],
});