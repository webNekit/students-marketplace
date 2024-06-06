import { defineType } from "sanity";

export const favorites = defineType({
    name: 'favorites',
    title: 'Избранное',
    type: 'document',
    fields: [
        {
            name: 'userId',
            title: 'Пользователь',
            type: 'string'
        },
        {
            name: 'categoryId',
            title: 'Категории постов',
            type: "reference",
            to: [{ type: 'postCategory' }],
        },
        {
            name: 'postId',
            title: 'Запись',
            type: "reference",
            to: [{ type: 'post' }],
        }
    ]
})