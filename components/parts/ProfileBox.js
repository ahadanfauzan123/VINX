import { LogoutIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'

function ProfileBox() {
    const {data: session } = useSession()
    if(!session) return null
  return (
    <div className='flex flex-col items-start ml-8 bg-cardTheme p-3 rounded-[20px] min-h-[340px]'>
        {/* profile image, name */}
        <div className='flex items-center space-x-4 p-5 '>
                <img src={session?.user?.image} alt="" className='rounded-full w-7 h-7' />
            
            <h1 className='font-semibold text-color'>{session?.user?.name}</h1>

            <SwitchHorizontalIcon className='w-6' />
            <LogoutIcon onClick={() => signOut({callbackUrl: '/auth/SignIn'})} className='w-6 hover:scale-110 transition-all duration-150' />
            
        </div>
        {/* wallets */}
        <div className='flex flex-col space-y-3 items-start mb-5 text-color'>
            <h2 className='text-[16px] text-color font-bold ml-6'>My Wallets</h2>
            <div className='flex items-center justify-between text-color ml-6'>
                <p className='text-sm mr-4 '>Paypal: </p>
                <p className='text-sm text-blue-400'>$30.000</p>
            </div>
        </div>


        {/* history */}
        <div className='flex flex-1 flex-col space-y-3 text-color items-start'>
        <h2 className='text-[16px] font-bold ml-6'>History</h2>
        <span className='text-xs text-color ml-6'>you dont have any purchases yet !</span>
        </div>
        
    </div>
  )
}

export default ProfileBox