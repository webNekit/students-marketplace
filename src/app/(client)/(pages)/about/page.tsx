import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'О нас',
    description: 'Откройте лучшие ресурсы для программистов и дизайнеров на нашей странице /design. Узнайте о последних тенденциях в веб-дизайне, получите полезные инструменты и советы для разработки интерфейсов. Ваше вдохновение начинается здесь!'
  }


export default function aboutPage() {
  return (
    <section className='w-full py-10'>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-5">
          <h2 className='text-center text-xl md:text-3xl text-white font-semibold'>О нас</h2>
          <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officia dicta pariatur earum tempora perferendis recusandae magni nulla quo eaque. Deserunt voluptatem earum voluptates nihil iure labore quasi ipsum eligendi?</p>
        </div>
      </div>
    </section>
  )
}
