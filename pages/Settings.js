import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Header from '../components/layout/Header'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'

function Settings() {
    const {data:session} = useSession()
    const router = useRouter()

    useEffect(() => {
        if(!session) {
            router.push('/')
        }
    }, [session])

  return (
    <div className='flex flex-col min-h-screen pb-2 bg-theme'>
        <Header />
        <div className='flex justify-center mt-12'>
            <h1 className='font-extrabold text-5xl -mb-7 text-color'>Settings</h1>
        </div>
            <div className='w-full px-4 pt-16 flex justify-center'>
                <div className='w-full max-w-lg laptop:max-w-3xl p-2 mx-auto flex flex-col space-y-2 rounded-2xl'>
                    <div className='bg-cardTheme rounded-xl'>
                        <Disclosure>
                            {({open}) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-lg font-medium text-left text-color bg-cardTheme rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>Account</span>
                                        <ChevronDownIcon
                                        className={`${
                                            open ? 'transform rotate-180' : ''
                                        } w-6 h-6 hover:scale-125 transition-all duration-150 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className='px-4 pt-4 pb-4 text-sm text-color flex flex-col space-y-4'>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='font-bold text-color'>Username</h3>
                                            <div className='bg-lcolor py-1 px-2 rounded-xl'><span className='text-gray-300'>{session?.user?.name}</span></div>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='font-bold text-color'>Email</h3>
                                            <div className='bg-lcolor py-1 px-2 rounded-xl'><span className='text-gray-300'>{session?.user?.email}</span></div>
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <h3 className='font-bold text-color'>Image Profile</h3>
                                            <img src={session?.user?.image} alt="" className='w-9 h-9 rounded-full' />
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div className='bg-cardTheme rounded-xl'>
                        <Disclosure>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-lg font-medium text-left text-color bg-cardTheme rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>General</span>
                                                <ChevronDownIcon
                                                className={`${
                                                    open ? 'transform rotate-180' : ''
                                                } w-6 h-6 hover:scale-125 transition-all duration-150 text-purple-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className='px-4 pt-4 pb-4 text-sm text-color flex flex-col space-y-4'>
                                            <div className='flex flex-col space-y-2'>
                                                <h3 className='font-bold text-color'>Username</h3>
                                                <div className='bg-lcolor py-1 px-2 rounded-xl'><span className='text-gray-300'>{session?.user?.name}</span></div>
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <h3 className='font-bold text-color'>Email</h3>
                                                <div className='bg-lcolor py-1 px-2 rounded-xl'><span className='text-gray-300'>{session?.user?.email}</span></div>
                                            </div>
                                            <div className='flex flex-col space-y-2'>
                                                <h3 className='font-bold text-color'>Image Profile</h3>
                                                <img src={session?.user?.image} alt="" className='w-9 h-9 rounded-full' />
                                            </div>
                                        </Disclosure.Panel>
                                        </>
                                    )}
                        </Disclosure>
                    </div>
                    <div className='bg-cardTheme rounded-xl'>
                        <Disclosure>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-lg font-medium text-left text-color bg-cardTheme rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>Preferance</span>
                                                <ChevronDownIcon
                                                className={`${
                                                    open ? 'transform rotate-180' : ''
                                                } w-6 h-6 hover:scale-125 transition-all duration-150 text-purple-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className='px-4 pt-4 pb-4 text-sm text-color flex flex-col space-y-4'>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                        </Disclosure>
                    </div>
                    <div className='bg-cardTheme rounded-xl'>
                        <Disclosure>
                                    {({open}) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-lg font-medium text-left text-color bg-cardTheme rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>LogOut</span>
                                                <ChevronDownIcon
                                                className={`${
                                                    open ? 'transform rotate-180' : ''
                                                } w-6 h-6 hover:scale-125 transition-all duration-150 text-purple-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className='px-4 pt-4 pb-4 text-sm text-color flex flex-col space-y-4'>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                        </Disclosure>
                    </div>
                    
                </div>

        </div>        

    </div>
  )
}

export default Settings