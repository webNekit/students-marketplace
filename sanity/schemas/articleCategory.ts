import { defineType } from "sanity";

export const articleCategory = defineType({
    name: 'articleCategory',
    title: 'Категории статьей',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Название категории',
            type: 'string'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL - адрес',
            options: { source: 'title' },
        }
    ],
});