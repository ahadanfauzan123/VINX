import { PuzzleIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Header from '../components/layout/Header'

function MySites() {
    const {data:session} = useSession()
    const router = useRouter()

    useEffect(() => {
        if(!session) {
            router.push('/');
        }
    }, [])

    const DUMMY_DATA = [
        {
            id: '1',
            url: 'https://ahadanfauzan.com',
            title: 'portofolio',
            img: 'https://midias.correiobraziliense.com.br/_midias/png/2022/02/04/675x450/1_7871566-7410716.png?20220204133402?20220204133402',
            caption: 'first post, support me guys',
        },
        {
            id: '2',
            url: 'https://ahadanfauzan.com',
            title: 'portofolio',
            img: 'https://brasilnft.art.br/pytsycky/2021/10/Bored-Ape-8817-PNG.png',
            caption: 'third post, support me guys',
        },
        {
            id: '3',
            url: 'https://ahadanfauzan.com',
            title: 'portofolio',
            img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
            caption: 'fourth post, support me guys',
        },
        {
            id: '4',
            url: 'https://ahadanfauzan.com',
            title: 'ahamusic',
            img: 'https://image-cdn.hypb.st/https%3A%2F%2Fid.hypebeast.com%2Ffiles%2F2022%2F01%2Feminem-habiskan-6-miliar-untuk-nft-bored-ape-yacht-club-yang-mirip-dirinya-cover.jpg?w=960&cbr=1&q=90&fit=max',
            caption: 'fourth post, support me guys',
        },
    ]

  return (
    <div className='flex flex-col min-h-screen bg-theme'>
        <Header/>
        {/* header section */}
        <div className='bg-cardTheme flex items-center justify-between px-5 laptop:px-[4rem] py-6'>
            <div className='flex flex-col space-y-5'>
                <div className='flex space-x-4 justify-start items-center -mt-2'>
                    <h1 className='text-4xl font-bold text-color'>My Resources</h1>
                    <span><PuzzleIcon className='w-12 text-color'/></span>
                </div>
                <p className='text-sm text-color'>Here you edits and manage allready downloaded website</p>
            </div>

            {/* buttons */}
            <div className='flex space-x-4 items-center'>
                <button className='text-sm tablet:text-md px-3 py-2 bg-blue-400 rounded-full text-white hover:scale-110 transition-all duration-150 ease-in'>New Project</button>
                <button className='text-sm tablet:text-md px-3 py-2 bg-cardTheme rounded-full text-color border-2 border-blue-400 hover:scale-110 transition-all duration-150 ease-in'>New website</button>
            </div>

        </div>
        {/* sites */}
        <div className='mt-8 flex flex-col space-y-6 items-center tablet:items-start justify-center mx-auto w-full laptop:max-w-6xl'>
            
            <h1 className='text-2xl font-bold text-color'>My Websites</h1>
            
                <div className='flex flex-wrap'>
                    {DUMMY_DATA.map((site) => (
                    <div key={site.id} className='flex flex-col h-[220px] w-[350px] mr-3 mb-6 bg-cardTheme rounded-xl'>
                        <img src={site.img} alt="" className='w-full max-h-[150px] object-cover rounded-t-xl flex-1' />
                        <div className='ml-2 mt-2'>
                            <h1 className='text-lg font-semibold text-color'>{site.title}</h1>
                            <h3 className='text-md font-semibold text-color truncate w-[340px]'>
                                url =  <span className='text-blue-500 hover:text-blue-400 transition-all duration-150 ease-in'>{site.url}</span>
                            </h3>

                        </div>

                    </div>

                    ))}
                </div>
        </div>
    </div>
  )
}

export default MySites