import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <section className="w-full py-10">
        <div className="container mx-auto">
            <h1>{user?.email}</h1>
        </div>
      </section>
    </>
  )
}
