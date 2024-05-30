import { title } from "process";
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
            name: 'text',
            title: 'Краткое описание',
            type: 'text',
            validation: (Rule: Rule) => Rule.max(100).error('Макс.кол-во символов: 100'),
            group: 'information'
        },
        {
            name: 'content',
            title: 'Полное описание',
            type: 'array',
            of: [
                { 
                    type: 'block' 
                }
            ],
            group: 'content'
        }
    ]
}