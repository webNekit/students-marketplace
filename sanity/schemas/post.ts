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
            name: 'category',
            title: 'Категория записи',
            type: 'reference',
            to: [
                { type: 'postCategory' }
            ]
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
              ]
        },
        {
            name: 'tags',
            title: 'Теги',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tag' }] }]
        },
        {
            name: 'image',
            title: 'Изображение',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'specifics',
            title: 'Характеристики',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    type: 'string',
                    title: 'Название'
                  }
                ]
              }
            ]
          }
    ]
}