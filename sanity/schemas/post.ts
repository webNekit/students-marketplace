import { Rule } from "sanity";

export const post = {
    name: 'post',
    title: 'Записи',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Название записи',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().error('Обязательное поле'),
        },
        {
            name: 'slug',
            title: 'URL - адрес',
            type: 'slug',
            options: { source: 'title' },
            validation: (Rule: Rule) => Rule.required().error('Обязательное поле'),
        },
        {
            name: 'publishedAt',
            title: 'Дата создания',
            type: 'datetime',
            validation: (Rule: Rule) => Rule.required().error('Обязательное поле'),
        },
        {
            name: 'text',
            title: 'Краткое описание',
            type: 'text',
            validation: (Rule: Rule) => Rule.max(200).error('Макс.кол-во символов: 200'),
        },
        {
            name: 'content',
            title: 'Полное описание',
            type: 'array',
            of: [
                { type: 'block' },
                { 
                    type: 'image',
                    fields: [{
                        type: 'text',
                        name: 'alt',
                        title: 'Название изображения'
                    }]
                },
            ]
        },
        {
            name: 'tags',
            title: 'Теги',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tag' }] }]
        }
    ]
}