import { Rule } from "sanity";

export const article = {
    name: 'article',
    title: 'Статьи',
    type: 'document',
    groups: [
        {
            name: 'information',
            title: 'Основная информация'
        },
        {
            name: 'content',
            title: 'Контент'
        },
        {
            name: 'image',
            title: 'Изображение'
        }
    ],
    fields: [
        {
            name: 'title',
            title: 'Название статьи',
            type: 'string',
            group: 'information'
        },
        {
            name: 'slug',
            title: 'URL - адрес',
            type: 'slug',
            options: { source: 'title' },
            group: 'information'
        },
        {
            name: 'category',
            title: 'Категория статьи',
            type: 'reference',
            to: [
                { type: 'articleCategory' }
            ],
            group: 'information'
        },
        {
            name: 'text',
            title: 'Краткое описание',
            type: 'text',
            validation: (Rule: Rule) => Rule.max(100).error('Макс.кол-во символов: 100'),
            group: 'information'
        },
        {
            name: 'contents',
            title: 'Полное описание',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            title: 'Абзац'
                        }
                    ]
                }
            ],
            group: 'content'
        },
        {
            name: 'image',
            title: 'Изображение',
            type: 'image',
            options: {
              hotspot: true
            },
            group: 'image'
          },
    ]
}