import { EyeOffIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

function Notifications() {
    const [hide, setHide] = useState(false)
    const {data: session} = useSession()


    if(!session) return null
  return (
      <>
      <div className='w-full tablet:w-[680px] laptop:w-full'>
        {!hide && (
          <div className='flex items-center justify-between text-white bg-gradient-to-r from from-green-500 to-purple-500 px-4 py-2 rounded-[20px] transition-all duration-200 ease-out'>
              <h2>Hi {session?.user?.name}, kamu berhasil login</h2>
              <EyeOffIcon className='w-4 cursor-pointer hover:scale-110 transition-all duration-150'
                          onClick={() => setHide(!hide)}
              />
          </div>
        )}  

      </div>
      </>
  )
}

export default Notifications