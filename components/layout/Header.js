import React from 'react'
import { 
  SearchIcon,
  BellIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  HomeIcon,
  MenuIcon,
} from '@heroicons/react/solid'
import MiniProfile from '../parts/MiniProfile'
import { useSession } from 'next-auth/react'

function Header() {
  const {data: session } = useSession()
  return (
    <div className=' bg-white sticky z-50 top-0 mobile:shadow-md laptop:shadow-md p-3 pl-5 flex items-center justify-center'>
        <div className='flex justify-between items-center h-full max-h-[100px] w-full max-w-screen laptop:max-w-6xl'>
            {/* icon */}
            <div className='inline-flex w-12 h-12 cursor-pointer hover:scale-125 transition-all duration-300'>
              
              <svg className='w-15 h-15' viewBox="0 0 440 271" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            {/* middle */}
            {/* <div className='text-gray-400 flex space-x-2 items-center justify-start laptop:space-x-4'>
              <HomeIcon className='headerIcon'/>
              <SearchIcon className='headerIcon'/>
              <UserGroupIcon className='headerIcon'/>
            </div> */}

            {/* right */}
            <div className='text-gray-400 flex justify-end items-center space-x-2 laptop:space-x-4'>
            <BellIcon className='headerIcon'/>
              <MenuIcon className='headerIcon'/>
            {/* mini profile dropdown */}
            {session && (
              <MiniProfile />

            )}
            </div>
        </div>
    </div>
  )
}

export default Header