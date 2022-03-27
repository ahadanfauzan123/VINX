import { useSession } from 'next-auth/react'
import React from 'react'

function AdminUser() {
    const {data:session} = useSession()

  return (
    <div className='relative p-4 bg-cardTheme w-[550px] mobile:h-[275px] h-full rounded-[20px] flex items-end justify-start'>
        <div className='absolute -top-2 -left-2 bg-gray-600 w-[150px]  flex items-center justify-center py-4 rounded-tl-[20px]'>
            <h2 className='text-lg font-bold text-white'>Also Admin</h2>
        </div>
        {/* body */}
        <div className='w-full h-[175px] px-2 py-5 bg-themeSecondary flex flex-col space-y-4 rounded-lg overflow-y-scroll scrollbar-none'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <img src={session?.user?.image} alt="" className='w-12 rounded-lg' />
                    <h3 className='text-lg font-semibold text-color' >Candra</h3>
                </div>
                <button className='bg-blue-400 px-4 py-1 rounded-full hover:scale-95 hover:bg-red-400 transition-all duration-150 ease-out'> view</button>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <img src={session?.user?.image} alt="" className='w-12 rounded-lg' />
                    <h3 className='text-lg font-semibold text-color' >Ilham Angga</h3>
                </div>
                <button className='bg-blue-400 px-4 py-1 rounded-full hover:scale-95 hover:bg-red-400 transition-all duration-150 ease-out'> view</button>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <img src={session?.user?.image} alt="" className='w-12 rounded-lg' />
                    <h3 className='text-lg font-semibold text-color' >Sandi</h3>
                </div>
                <button className='bg-blue-400 px-4 py-1 rounded-full hover:scale-95 hover:bg-red-400 transition-all duration-150 ease-out'> view</button>
            </div>
        </div>
    </div>
  )
}

export default AdminUser