import { Popover, Transition } from '@headlessui/react'
import { LogoutIcon, CogIcon, DocumentAddIcon, CashIcon, PlusSmIcon, FireIcon, HomeIcon, PuzzleIcon, TemplateIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import ThemeChanger from '../ThemeChanger'

function MiniProfile() {
  const {data: session } = useSession()
  console.log(session?.user)
  const router = useRouter()
  return (
    <Popover>
    {({ open }) => (
      <>
      <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-gradient-to-r from-purple-400 to-purple-600 pr-3 py-[2px]  rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <img src={session?.user?.image} alt="" className='w-10 h-10 rounded-full' />
              <ChevronDownIcon
                className={`${open ? 'transform rotate-180' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-white group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute z-10 w-[220px] max-w-sm px-4 mt-3 transform -translate-x-[60%]  sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-4 bg-cardTheme p-5 lg:grid-cols-1">
                          {session?.user?.email === 'ahadanfauzan123@gmail.com' && (
                            <h3 className='sidebarComponent' onClick={() => router.push('/admin/Dashboard')}>Admin Dashboard<TemplateIcon className='miniIcon' /></h3>
                          ) }
                            <h3 className='sidebarComponent' onClick={() => router.push('/')}>Dashboard<HomeIcon className='miniIcon' /></h3>
                            <h3 className='sidebarComponent' onClick={() => router.push('/MySites')}>My Resources<PuzzleIcon className='miniIcon' /></h3>
                            <h3 className='sidebarComponent'>Payments & Bills<CashIcon className='miniIcon' /></h3>
                            <h3 className='sidebarComponent'>Add New file<DocumentAddIcon className='miniIcon' /></h3>
                            <h3 className='sidebarComponent' onClick={() => router.push('/Settings')}>Settings<CogIcon className='miniIcon' /></h3>
                            <h3 className='sidebarComponent' onClick={() => signOut({callbackUrl: '/'})} >logout<LogoutIcon className='miniIcon'/></h3>
                            <div className='flex space-x-1 justify-between items-center pl-2'>
                              <FireIcon className='miniIcon'/>
                              <ThemeChanger className='flex-1'/>

                            </div>
                        </div>
                    </div>  
                </Popover.Panel>
      </Transition>

      </>
    )}
  </Popover>
  )
}
export default MiniProfile