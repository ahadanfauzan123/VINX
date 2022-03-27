import { useSession } from 'next-auth/react'
import React from 'react'
import Notifications from '../parts/Notifications'
import ProductOverviews from '../parts/ProductOverviews'
import ProfileBox from '../parts/ProfileBox'
import SearchTemplate from '../parts/SearchTemplate'
import Templates from '../parts/Templates'
import UpgradeToPremium from '../parts/UpgradeToPremium'

function Dashboard() {
  const {data: session } = useSession()
  return (
    <>
      <div className={`w-full grid py-6 px-3 mobile:grid-cols-1 mobile:max-w-2xl tablet:grid-cols-2 tablet:max-w-3xl
      laptop:grid-cols-3 laptop:max-w-6xl mx-auto`}>
          <section className='col-span-2 grid gap-y-4'>
            {/* notifications */}
            <Notifications />

            {/* product overview */}
            <ProductOverviews/>

            {/* search templates */}
            <SearchTemplate />

          </section>

          <section className='hidden col-span-1 laptop:inline-grid '>
            <div className='max-h-screen flex flex-col space-y-4'>
              <ProfileBox/>
              <UpgradeToPremium/>

            </div>
          </section>
      </div>
      <div className='w-full flex flex-col mx-auto -mt-4 mb-6 py-3 tablet:max-w-3xl laptop:max-w-[70rem]'>
            {/* templates with headlessui */}
            <div className=' p-3 rounded-[20px] bg-cardTheme w-full max-w-[70rem]'>
              <h1 className='font-bold text-2xl mb-3 text-color'>Templates</h1>
            <Templates />
            </div>
      </div>
    </>
  )
}

export default Dashboard