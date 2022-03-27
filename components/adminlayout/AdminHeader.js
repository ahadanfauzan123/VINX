import { BellIcon, DocumentAddIcon, DocumentIcon, MenuIcon, PlusIcon, UserGroupIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import MiniProfile from '../parts/MiniProfile'

function AdminHeader() {
  const {data:session} = useSession()
  const router = useRouter()
  return (
    <div className='bg-white sticky top-0 p-3 z-50 flex items-center justify-center'>
      <div className='w-full max-w-6xl mx auto flex justify-between items-center'>
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
        <div className='flex-1 ml-10 flex space-x-4 items-center'>
          <div onClick={() => router.push('/admin/ProductManagement')} className='cursor-pointer flex items-center space-x-2 text-gray-700'>
            <h1 className='text-sm' >Manage Products</h1>
            <DocumentIcon className='w-5 text-colorProduct'/>
          </div>
          <div onClick={() => router.push('/admin/AddProduct')} className='cursor-pointer flex items-center space-x-2 text-gray-700'>
            <h1 className='text-sm' >Add Product</h1>
            <PlusIcon className='w-5 text-colorProduct'/>
          </div>
          <div onClick={() => router.push('/admin/ManageUser')} className='cursor-pointer flex items-center space-x-2 text-gray-700'>
            <h1 className='text-sm' >Manage User</h1>
            <UserGroupIcon className='w-5 text-colorProduct'/>
          </div>
        </div>

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

export default AdminHeader