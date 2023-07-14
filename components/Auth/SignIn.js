'use client'
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";


const SignIn = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold py-5">Sign in with NextAuth</h2>
        <div>
            <button onClick={()=> signIn('google', {callbackUrl: '/'})} className='flex items-center gap-1 bg-blue-400 text-white px-2 py-1 rounded-md'>
                <FcGoogle/>
                SignIn with Google
            </button>
        </div>
    </div>
  )
}

export default SignIn