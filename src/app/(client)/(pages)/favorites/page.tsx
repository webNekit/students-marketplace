import { FavoritesItem } from '@/components/Favorites/FavoritesItem/FavoritesItem'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React, { Suspense } from 'react'


export default async function favorites() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <div className="w-full space-y-5">
          <h2 className='text-xl md:text-3xl text-white font-semibold'>Избранное</h2>
          <div className="w-full">
            <Suspense fallback={'Загрузка...'}>
              <FavoritesItem user={user?.id as string} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
