import { getProviders, signIn } from 'next-auth/react'
import React from 'react'
import Header from '../../components/layout/Header';

function SignIn({providers}) {
  return (
    <div className='flex flex-col min-h-screen pb-2 bg-theme'>
        <Header/>
        <div className='grid place-items-center grid-cols-1 gap-y-8 mt-12'>
            <div className='inline-flex w-[100px] h-[100px]'>       
                <svg className='w-full h-full' viewBox="0 0 440 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="220" cy="135" r="75" fill="#474141"/>
                <rect x="129" y="46.4264" width="60" height="125" rx="30" transform="rotate(-45 129 46.4264)" fill="#474141"/>
                <rect x="268.388" y="4" width="60" height="125" rx="30" transform="rotate(45 268.388 4)" fill="#474141"/>
                <rect x="36" y="85.9117" width="72" height="260" rx="36" transform="rotate(-45 36 85.9117)" fill="url(#paint0_linear_1_9)"/>
                <rect x="353.848" y="35" width="72" height="260" rx="36" transform="rotate(45 353.848 35)" fill="url(#paint1_linear_1_9)"/>
                <defs>
                <linearGradient id="paint0_linear_1_9" x1="72" y1="85.9117" x2="72" y2="345.912" gradientUnits="userSpaceOnUse">
                <stop offset="0.73211" stopColor="#6FF163"/>
                <stop offset="1" stopColor="#51D046"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_9" x1="389.848" y1="35" x2="389.848" y2="295" gradientUnits="userSpaceOnUse">
                <stop offset="0.287572" stopColor="#51D046"/>
                <stop offset="0.727295" stopColor="#58DD4C" stopOpacity="0.99"/>
                <stop offset="0.974955" stopColor="#67FC5A" stopOpacity="0.24"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div className='relative flex flex-col justify-center min-h-[300px] p-8 bg-cardTheme rounded-[20px]'>
                <div className='absolute top-0 px-2 py-2 w-[200px] tablet:w-[350px] rounded-b-xl mobile:left-[12.5%] tablet:left-[13%] flex justify-center bg-purple-400 shadow-sm'>
                    <h1 className=' font-bold text-lg laptop:text-[20px] text-color'>Sign in into VINX</h1>

                </div>
                <div className=''>
            {Object.values(providers).map((provider) => (
            <div key={provider.name} className=''>
                <button className='w-[200px] tablet:w-[400px] p-4 mt-5 rounded-lg hover:scale-110 text-gray-700 bg-white hover:to-indigo-800 transition-all duration-150'
                 onClick={() => signIn(provider.id, {callbackUrl: '/'})}>
                Sign in with {provider.name} {console.log(provider.name)}
                </button>
            </div>
            ))}
        </div>
            </div>
        </div>

    </div>
  )
}

export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default SignIn