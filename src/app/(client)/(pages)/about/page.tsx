import { ContactsForm } from '@/components/ContactsForm/ContactsForm'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: 'О нас',
    description: 'Откройте лучшие ресурсы для программистов и дизайнеров на нашей странице /design. Узнайте о последних тенденциях в веб-дизайне, получите полезные инструменты и советы для разработки интерфейсов. Ваше вдохновение начинается здесь!'
  }


export default function aboutPage() {
  return (
    <section className='w-full py-10'>
      <div className="container mx-auto space-y-10">
        <div className="max-w-5xl mx-auto space-y-5">
          <h2 className='text-center text-xl md:text-3xl text-white font-semibold'>О нас</h2>
          <p className="text-center">Мы — команда энтузиастов, объединённых общей целью: предоставить веб-разработчикам всестороннюю поддержку и полезные ресурсы для успешного обучения и карьерного роста. Наш сайт создан для того, чтобы помочь вам максимально эффективно освоить искусство веб-разработки и достичь ваших профессиональных целей.</p>
        </div>
        <div className="w-full h-[320px] md:h-[560px] rounded-md border p-5">
          <div className="relative w-full h-full">
            <Image fill src={'https://media.baamboozle.com/uploads/images/576630/1648923007_343678.gif'} alt='Изображение программиста' className='w-full h-full rounded-md object-cover object-center' />
          </div>
        </div>
        <div className="w-full">
          <ContactsForm />
        </div>
      </div>
    </section>
  )
}
