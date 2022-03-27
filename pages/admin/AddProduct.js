import React, { useEffect } from 'react'
import {PlusIcon, PaperClipIcon, CurrencyDollarIcon , CodeIcon, PhotographIcon, AdjustmentsIcon, DocumentTextIcon, PaperAirplaneIcon} from '@heroicons/react/outline'
import Header from '../../components/layout/Header'
import AdminHeader from '../../components/adminlayout/AdminHeader'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function AddProduct() {
    const {data:session} = useSession()
    const router = useRouter()
    useEffect(() => {
        if(session?.user?.email !== 'ahadanfauzan123@gmail.com') {
            router.push('/')
        }
    }, [session])
  return (
    <div className='bg-theme min-h-screen' >
        <AdminHeader/>
        <div className='flex flex-col space-y-10 w-full max-w-4xl mx-auto p-4'>
            <h1 className='text-2xl font-bold text-color m-6' >Add Product</h1>
            {/* add title */}
            <div className='bg-cardTheme p-4 w-[50%] tablet:w-full flex flex-col gap-y-5 rounded-[20px]'>
            <div className='text-color flex space-x-3 items-center'>
                    <h1 className='text-xl font-bold'>title</h1>
                    <CodeIcon className='w-7 text-colorProduct'/>
                </div>
                <div className=''>
                    <input type="text" className='w-full bg-themeSecondary text-colorProduct rounded-lg text-xl font-extrabold outline-0 border-0 focus:outline-0 focus:ring-0' />
                </div>
            </div>
            {/* add image */}
            <div className='p-4 flex flex-col gap-y-6' >
                <div className='text-color flex space-x-3 items-center'>
                    <h1 className='text-xl font-bold'>add images</h1>
                    <PhotographIcon className='w-7 rotate-12 text-colorProduct'/>
                </div>
                <div className='' >
                    <div className='min-w-[90%] flex space-x-4 p-2 ' >
                        <div className='h-[250px] w-[350px] bg-cardTheme rounded-[20px]' >
                        </div>
                        {/* add */}
                        <div className='bg-cardTheme w-[350px] h-[250px] rounded-[20px] flex justify-center items-center p-2'>
                            <PlusIcon className='w-14 h-14 text-green-400' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Add file */}
            <div className='bg-cardTheme p-4 w-[50%] tablet:w-full flex flex-col gap-y-5 rounded-[20px]'>
                <div className='text-color flex space-x-3 items-center'>
                    <h1 className='text-xl font-bold'>add file</h1>
                    <PaperClipIcon className='w-6 text-colorProduct'/>
                </div>
                <div className=''>
                    <input type="file" className='w-full p-4 bg-themeSecondary text-colorProduct rounded-lg text-md font-extrabold outline-0 border-0 focus:outline-0 focus:ring-0' />
                </div>
            </div>
            {/* add price */}
            <div className='bg-cardTheme p-4 w-full tablet:w-[50%] flex flex-col gap-y-5 rounded-[20px]'>
            <div className='text-color flex space-x-3 items-center'>
                    <h1 className='text-xl font-bold'>Price</h1>
                    <CurrencyDollarIcon className='w-7 text-colorProduct'/>
                </div>
                <div className=''>
                    <input type="text" className='w-full bg-themeSecondary text-colorProduct rounded-lg text-2xl font-extrabold outline-0 border-0 focus:outline-0 focus:ring-0' />
                </div>
            </div>
            {/* add features */}
            <div className='bg-cardTheme p-4 w-[50%] tablet:w-full flex flex-col gap-y-5 rounded-[20px]'>
                <div className='text-color flex space-x-3 items-center'>
                    <h1 className='text-xl font-bold'>add features</h1>
                    <AdjustmentsIcon className='w-7 text-colorProduct'/>
                </div>
                <div className=''>
                    <input type="text" className='w-full h-[300px] bg-themeSecondary text-colorProduct rounded-lg text-xl font-extrabold outline-0 border-0 focus:outline-0 focus:ring-0' />
                </div>
            </div>
            {/* add description */}
            <div className='bg-cardTheme p-4 w-[50%] tablet:w-full flex flex-col gap-y-5 rounded-[20px]'>
                <div className='flex space-x-3 items-center'>
                    <h1 className='text-xl font-bold text-color'>add description</h1>
                    <DocumentTextIcon className='w-7 text-colorProduct' />
                </div>
                <div className=''>
                    <input type="text" className='w-full h-[150px] bg-themeSecondary text-colorProduct rounded-lg text-xl font-extrabold outline-0 border-0 focus:outline-0 focus:ring-0' />
                </div>
            </div>

            {/* submit */}
            <div className='bg-cardTheme rounded-[20px] p-4 flex justify-between'>
                <h1 className='text-xl font-bold'>Generate the Product</h1>
                <button className='bg-blue-400 w-[100px] flex justify-center py-2 rounded-xl hover:scale-110 transition-all duration-150'>
                    <PaperAirplaneIcon className='w-6 -mr-[5px] -mt-[2px] text-white rotate-45'/></button>

            </div>
        </div>
    </div>
  )
}

export default AddProduct