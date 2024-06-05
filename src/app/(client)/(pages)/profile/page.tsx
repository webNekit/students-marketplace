import { Button } from '@/components/ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <section className="w-full py-10">
        <div className="container mx-auto">
          <div className="w-full space-y-5">
            <h2 className='text-xl md:text-3xl text-white font-semibold'>Личный кабинет</h2>
            <div className="w-full flex flex-col items-start md:flex-row gap-5">
              <div className="w-full md:w-4/12">
                <div className="w-full aspect-square border rounded-md p-3">
                  <Image loading={'lazy'} src={user?.picture ?? `https://avatar.vercel.sh/rauchg/${user?.given_name}`} alt={'Изображение профиля'} width={200} height={200} className='w-full h-full object-cover object-center rounded-md' />
                </div>
              </div>
              <div className="w-full md:w-8/12 space-y-10">
                <ul className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  <li className='inline-flex flex-col'>
                    <span className='text-gray-500'>Пользователь</span>
                    <p className='text-lg text-white'>{(user?.given_name && user?.family_name) ?? 'Имя пользовательна не получено'}</p>
                  </li>
                  <li className='inline-flex flex-col'>
                    <span className='text-gray-500'>E-mail</span>
                    <p className='text-xl text-white'>{(user?.email) ?? 'Данные не получены или не существуют'}</p>
                  </li>
                  <li className='inline-flex flex-col'>
                    <span className='text-gray-500'>Город</span>
                    <p className='text-lg text-white'>{(user?.properties?.usr_city) ?? 'Данные не получены или не существуют'}</p>
                  </li>
                  <li className='inline-flex flex-col'>
                    <span className='text-gray-500'>Направление</span>
                    <p className='text-lg text-white'>{(user?.properties?.usr_industry) ?? 'Данные не получены или не существуют'}</p>
                  </li>
                  <li className='inline-flex flex-col'>
                    <span className='text-gray-500'>Место работы</span>
                    <p className='text-lg text-white'>{(user?.properties?.usr_job_title) ?? 'Данные не получены или не существуют'}</p>
                  </li>
                  <li className='inline-flex flex-col'>
                    <span className='text-gray-500'>Регион проживания</span>
                    <p className='text-lg text-white'>{(user?.properties?.usr_state_region) ?? 'Данные не получены или не существуют'}</p>
                  </li>
                  <li className='inline-flex flex-col'>
                    <span className='text-gray-500'>Адрес проживания</span>
                    <p className='text-lg text-white'>{(user?.properties?.usr_street_address) ?? 'Данные не получены или не существуют'}</p>
                  </li>
                </ul>
                <Button variant={'outline'} asChild>
                  <Link href={"/favorites"}>Перейти в избранное</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
