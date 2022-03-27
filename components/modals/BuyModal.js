import { Transition, Dialog, Disclosure } from "@headlessui/react"
import React, { Fragment, useEffect } from 'react'
import { useRecoilState } from "recoil"
import { buyState } from "../../atom/buyAtom"
import {ChevronDoubleUpIcon, ChevronDownIcon} from '@heroicons/react/outline'
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

function BuyModal() {

    const [showBuy, setShowBuy] = useRecoilState(buyState)
    const {data:session} = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            return 'error'
        }
    }, [session, router])

  return (
    <Transition.Root show={showBuy} as={Fragment}>
    <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={setShowBuy}>
        <div className='flex items-center justify-center min-h-[800px] mobile:min-h-screen pt-4 px-4 pb-20 text-center'>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-[#645f5fad] transition-opacity" />
        </Transition.Child>

         {/* trick the browser to centering */}
         <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
                <div className='flex flex-col p-2 w-full max-w-[700px] bg-theme rounded-[20px]  items-center justify-center  px-4 pt-5 pb-4 text-left overflow-hidden  transform transition-all'>
                    {/* product mini card */}
                    <div className=" relative bg-cardTheme w-full h-[70px] flex space-x-3 justify-start items-center rounded-[20px]">
                        {/* image */}
                        <div className=" h-[80px] w-[100px] bg-gray-400 rounded-l-[20px] hover:scale-95 transition-all duration-150 ease-out"></div>
                        {/* product title */}
                        <h3 className="text-color font-bold text-md">ProductTitle</h3>
                        {/* product price */}
                        <h2 className="absolute right-5 text-xl text-colorProduct font font-extrabold">$30.00</h2>
                    </div>

                    {/* cost */}
                    <div className="mt-4 w-full">
                        <h2 className="text-left font-bold text-xl text-color">Total cost : <span className="text-colorProduct text-2xl animate-pulse">$30.00</span></h2>
                    </div>

                    {/* title */}
                    <div className="mt-6 ">
                        <h1 className="text-2xl font-semibold text-color">Choose Payment Method</h1>
                    </div>

                    {/* payment dropdown */}
                    <div className="mt-4 w-[80%] bg-cardTheme rounded-xl">
                    <Disclosure>
                                    {({open}) => (
                                        <>
                                        <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-lg font-medium text-left text-color focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>payment method</span>
                                                <ChevronDownIcon
                                                className={`${
                                                    open ? 'transform rotate-180' : ''
                                                } w-6 h-6 hover:scale-125 transition-all duration-150 text-purple-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className=' px-4 pt-4 pb-4 text-sm text-color flex flex-col space-y-4'>
                                            <div className='flex flex-col space-y-2'>
                                                <h3 className='font-bold text-color'>Username</h3>
                                            </div>
                                        </Disclosure.Panel>
                                        </>
                                    )}
                        </Disclosure>
                    </div>
                </div>
            </Transition.Child>
        </div>
    </Dialog>    
    </Transition.Root>  
  )
}

export default BuyModal