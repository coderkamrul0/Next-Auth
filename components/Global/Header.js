'use server'
import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Header = async () => {
    const session = await getServerSession(authOptions);
    console.log({session});
  return (
    <header className='flex gap-5 border-b-4 py-3 mb-10'>
        <Link href={'/'}>Home</Link>
        <Link href={'/protected/client'}>Protected (client)</Link>
        <Link href={'/protected/server'}>Protected (server)</Link>

        {
            session 
            ? <>
                <Link href={'/profile/client'}>Profile (client)</Link>
                <Link href={'/profile/server'}>Profile (server)</Link>
                <Link href={'/dashboard'}>Admin Dashboard</Link>
            </>
            : <>
                <Link href={'/signIn'}> Sign In</Link>
            </>
        }

    </header>
  )
}

export default Header